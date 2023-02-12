FROM golang:1.18-alpine

WORKDIR /wrk

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY *.go ./

RUN go build -o /app

CMD [ "/app" ]
