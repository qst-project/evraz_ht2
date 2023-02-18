package main

func main2() {
	messages := make(chan string, 1)
	go func() {
		for {
			select {
			case msg := <-messages:
				println(msg)
			}
		}
	}()
	yandexKafkaClient := NewYandexKafkaClient()
	yandexKafkaClient.poll(messages)
}
