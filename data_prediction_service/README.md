# Data prediction service

Data prediction is an independent microservice for kafka stream data collection and processing. For
the moment there is two main ideas: **LSTM networks for failure prediction** and **data filtering with send-on-delta sampling**.

## LSTM networks

TODO:

---

## Filtering with send-on-delta sampling
TODO:

---

## Dev venv and install

To run scripts in development mode init venv and install requirements:

```bash
    $ python3 -m venv venv
    $ source venv/bin/activate
    $ pip3 install -r requirements.txt
```

---

## Docker

Build docker image from Dockerfile or just run top-level docker-compose.yml:

```bash
    $ docker build -t data_prediction_service .
    $ docker run data_prediction_service@latest
```

or

```bash
    $ docker-compose up
```