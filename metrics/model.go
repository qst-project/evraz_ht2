package main

import "time"

type SampleMessage struct {
	ID        string    `json:"id"`
	Temp      float64   `json:"temp"`
	Timestamp time.Time `json:"timestamp"`
}
