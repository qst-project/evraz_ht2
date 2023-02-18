package main

import (
	"encoding/json"
	"time"
)

func unmarshal(message json.RawMessage, value any) {
	if err := json.Unmarshal(message, value); err != nil {
		panic(err)
	}
}

func unmarshalTime(message json.RawMessage) (res time.Time) {
	var momentString string
	unmarshal(message, &momentString)
	res, err := time.Parse("2006-01-02T15:04:05.000000", momentString)
	if err != nil {
		panic(err)
	}
	return
}
func unmarshalFloat(message json.RawMessage) (res float64) {
	unmarshal(message, &res)
	return
}
func main() {
	schemasByCode := ReadSchemas()
	collector := NewPrometheusCollector(schemasByCode)
	go NewYandexKafkaClient().poll(func(rawMessage []byte) {
		var data map[string]json.RawMessage
		unmarshal(rawMessage, &data)
		moment := unmarshalTime(data["moment"])
		for code, rawValue := range data {
			if code == "moment" {
				continue
			}
			value := unmarshalFloat(rawValue)
			collector.UpdateMetric(code, value, moment)
		}
	})
	collector.Run()
}
