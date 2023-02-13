package main

import (
	"context"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
)

var sampleMessage SampleMessage

var opsProcessed = promauto.NewGauge(
	prometheus.GaugeOpts{
		Name: "metric_1_",
		Help: "The total number of processed operations",
	},
)

var tempCelsius = promauto.NewGauge(
	prometheus.GaugeOpts{
		Name: "current_temperature_api_celsius",
		Help: "Current temperature",
	},
)

func main() {
	// create a new context
	ctx := context.Background()
	// produce messages in a new go routine, since
	// both the produce and consume functions are
	// blocking
	consume(ctx)
}
