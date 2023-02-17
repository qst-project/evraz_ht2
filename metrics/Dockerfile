FROM golang:1.18-alpine

WORKDIR /wrk

COPY go.mod ./
COPY go.sum ./
RUN mkdir /usr/local/share/ca-certificates/Yandex
COPY ../.extras/YandexCA.crt /usr/local/share/ca-certificates/Yandex/YandexCA.crt

RUN go mod download

COPY *.go ./

RUN go build -o /app

CMD [ "/app" ]
