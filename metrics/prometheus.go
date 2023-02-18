package main

import (
	cmap "github.com/orcaman/concurrent-map/v2"
	"net/http"
	"strings"
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
}

func NewPrometheusCollector(schemas map[string]*CsvSchema) (res PrometheusCollector) {
	res.metrics = cmap.New[*prometheus.Desc]()
	res.metricsValues = cmap.New[ValueWithTime]()
	for code, schema := range schemas {
		var name = strings.ToLower(code)
		name = strings.Replace(name, "\\", "", -1)
		name = strings.Replace(name, "]", "", -1)
		name = strings.Replace(name, "[", "_", -1)
		name = strings.Replace(name, ":", "__", -1)
		name = strings.Replace(name, ".", "_", -1)
		desc := prometheus.NewDesc(
			name,
			schema.Description,
			nil,
			map[string]string{
				"sinmachine_number": schema.SinmachineNumber,
				"exhauster_number":  schema.ExhausterNumber,
				"exhauster_name":    schema.ExhausterName,
				"bearing_number":    schema.BearingNumber,
				"measure":           schema.Measure,
				"type":              schema.Type,
				"activity":          schema.Activity,
				"signal":            schema.Signal,
			},
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
		desc, res := c.metrics.Get(code)
		if res {
			metric := prometheus.MustNewConstMetric(desc, prometheus.CounterValue, value.float64)
			ch <- prometheus.NewMetricWithTimestamp(value.Time, metric)
		}
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
