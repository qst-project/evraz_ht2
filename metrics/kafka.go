package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/segmentio/kafka-go"
)

func consume(ctx context.Context) {
	// initialize a new reader with the brokers and topic
	// the groupID identifies the consumer and prevents
	// it from receiving duplicate messages
	r := kafka.NewReader(kafka.ReaderConfig{
		Brokers:     config.kafkaBrokers,
		Topic:       config.topic,
		GroupID:     config.groupId,
		StartOffset: kafka.LastOffset,
	})
	for {
		msg, err := r.ReadMessage(ctx)
		if err != nil {
			panic("could not read message " + err.Error())
		}
		// after receiving the message, log its value
		fmt.Println("received: ", string(msg.Value))

		var dat SampleMessage
		if err := json.Unmarshal(msg.Value, &dat); err != nil {
			panic("error unmarshalling JSON " + err.Error())
		}
		sampleMessage = dat
	}
}
