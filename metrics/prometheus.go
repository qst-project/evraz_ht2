package main

import (
	cmap "github.com/orcaman/concurrent-map/v2"
	"net/http"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

type ValueWithTime struct {
	float64
	time.Time
}
type PrometheusCollector struct {
	metrics       cmap.ConcurrentMap[string, *prometheus.Desc]
	metricsValues cmap.ConcurrentMap[string, ValueWithTime]
	schemas       map[string]*CsvSchema
}

func NewPrometheusCollector(schemas map[string]*CsvSchema) (res PrometheusCollector) {
	res.metrics = cmap.New[*prometheus.Desc]()
	res.metricsValues = cmap.New[ValueWithTime]()
	res.schemas = schemas
	for _, schema := range schemas {
		desc := prometheus.NewDesc(
			schema.Signal,
			"",
			[]string{
				"description",
				"sinmachine_number",
				"exhauster_number",
				"exhauster_name",
				"bearing_number",
				"measure",
				"type",
				"activity",
			},
			nil,
		)
		res.metrics.Set(schema.Code, desc)
	}
	prometheus.MustRegister(&res)
	return
}
func (c *PrometheusCollector) Describe(ch chan<- *prometheus.Desc) {
	for _, metric := range c.metrics.Items() {
		ch <- metric
	}
}

func (c *PrometheusCollector) Collect(ch chan<- prometheus.Metric) {
	for code, value := range c.metricsValues.Items() {
		desc, ok := c.metrics.Get(code)
		if !ok {
			continue
		}
		schema, ok := c.schemas[code]
		if !ok {
			continue
		}
		metric := prometheus.MustNewConstMetric(
			desc,
			prometheus.CounterValue,
			value.float64,
			schema.Description,
			schema.SinmachineNumber,
			schema.ExhausterNumber,
			schema.ExhausterName,
			schema.BearingNumber,
			schema.Measure,
			schema.Type,
			schema.Activity,
		)
		ch <- prometheus.NewMetricWithTimestamp(value.Time, metric)
	}
}

func (c *PrometheusCollector) UpdateMetric(metricCode string, value float64, lastTimeMetricsUpdated time.Time) {
	c.metricsValues.Set(metricCode, ValueWithTime{value, lastTimeMetricsUpdated})
}
func (c *PrometheusCollector) Run() {
	http.Handle("/metrics", promhttp.Handler())
	if err := http.ListenAndServe(":2112", nil); err != nil {
		panic(err)
	}
}
