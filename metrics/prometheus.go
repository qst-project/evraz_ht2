package main

import (
	"math/rand"
	"net/http"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

type PrometheusCollector struct {
	metric *prometheus.Desc
}

func (c *PrometheusCollector) Describe(ch chan<- *prometheus.Desc) {
	ch <- c.metric
}

func (c *PrometheusCollector) Collect(ch chan<- prometheus.Metric) {
	// your logic should be placed here

	t := time.Now()
	s := prometheus.NewMetricWithTimestamp(t, prometheus.MustNewConstMetric(c.metric, prometheus.CounterValue, float64(rand.Intn(100))))

	ch <- s
}

func main() {
	collector := &PrometheusCollector{
		metric: prometheus.NewDesc(
			"my_metric",
			"This is my metric with custom TS",
			nil,
			nil,
		),
	}
	prometheus.MustRegister(collector)

	http.Handle("/metrics", promhttp.Handler())
	//log.Info("Beginning to serve on port :8080")
	http.ListenAndServe(":2112", nil)
}
