package main

type Config struct {
	kafkaBrokers  []string
	kafkaTopic    string
	kafkaGroupId  string
	kafkaUser     string
	kafkaPassword string
	schemaCsvPath string
}

//kafka.host = rc1a-b5e65f36lm3an1d5.mdb.yandexcloud.net:9091
//kafka.topic = zsmk-9433-dev-01
//kafka.user= 9433_reader
//kafka.pass = eUIpgWu0PWTJaTrjhjQD3.hoyhntiK
//kafka.ts-file = /etc/security/ssl
//kafka.ts-pass = sample-storepass

var config = Config{
	kafkaBrokers:  []string{"rc1a-b5e65f36lm3an1d5.mdb.yandexcloud.net:9091"},
	kafkaTopic:    "zsmk-9433-dev-01",
	kafkaGroupId:  "qst-group-test-metrics-0012964",
	kafkaUser:     "9433_reader",
	kafkaPassword: "eUIpgWu0PWTJaTrjhjQD3.hoyhntiK",
	schemaCsvPath: ".extras/schema.csv",
}
