package main

type Config struct {
	kafkaBrokers []string
	topic        string
	groupId      string
}

var config = Config{
	kafkaBrokers: []string{"localhost:29092"},
	topic:        "test",
	groupId:      "qst-group-test-4",
}
