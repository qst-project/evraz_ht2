package main

import (
	"crypto/tls"
	"crypto/x509"
	"fmt"
	"github.com/Shopify/sarama"
	"io/ioutil"
	"os"
)

type YandexKafkaClient struct {
	sarama.Consumer
	sarama.PartitionConsumer
}

func NewYandexKafkaClient() (res YandexKafkaClient) {
	splitBrokers := config.kafkaBrokers
	conf := sarama.NewConfig()
	conf.Producer.RequiredAcks = sarama.WaitForAll
	conf.Version = sarama.V0_10_0_0
	conf.Consumer.Return.Errors = true
	conf.ClientID = "sasl_scram_client"
	conf.Metadata.Full = true
	conf.Net.SASL.Enable = true
	conf.Net.SASL.User = config.kafkaUser
	conf.Net.SASL.Password = config.kafkaPassword
	conf.Net.SASL.Handshake = true
	conf.Net.SASL.SCRAMClientGeneratorFunc = func() sarama.SCRAMClient { return &XDGSCRAMClient{HashGeneratorFcn: SHA512} }
	conf.Net.SASL.Mechanism = sarama.SASLMechanism(sarama.SASLTypeSCRAMSHA512)

	certs := x509.NewCertPool()
	pemPath := "/usr/local/share/ca-certificates/Yandex/YandexCA.crt"
	pemData, err := ioutil.ReadFile(pemPath)
	if err != nil {
		fmt.Println("Couldn't load cert: ", err.Error())
		// Handle the error
	}
	certs.AppendCertsFromPEM(pemData)

	conf.Net.TLS.Enable = true
	conf.Net.TLS.Config = &tls.Config{
		InsecureSkipVerify: true,
		RootCAs:            certs,
	}

	res.Consumer, err = sarama.NewConsumer(splitBrokers, conf)
	if err != nil {
		fmt.Println("Coulnd't create consumer: ", err.Error())
		os.Exit(1)
	}
	topic := config.kafkaTopic

	res.PartitionConsumer, err = res.Consumer.ConsumePartition(topic, 0, sarama.OffsetOldest)
	if err != nil {
		panic(err)
	}
	return
}
func (client YandexKafkaClient) poll(callback func(message []byte)) {
	for {
		select {
		case err := <-client.PartitionConsumer.Errors():
			fmt.Println(err)
		case msg := <-client.PartitionConsumer.Messages():
			callback(msg.Value)
		}
	}
}

func (client YandexKafkaClient) close() {
	defer func() {
		if err := client.Consumer.Close(); err != nil {
			panic(err)
		}
	}()
}
