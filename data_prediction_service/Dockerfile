FROM python:3.8-slim-buster

WORKDIR /data_prediction_service

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY data_prediction_service/ws_prediction_server.py ws_prediction_server.py
COPY data_prediction_service/consumer.py consumer.py
COPY data_prediction_service/data.py data.py
COPY data_prediction_service/config config

COPY .extras/YandexCA.crt /usr/local/share/ca-certificates/Yandex/YandexCA.crt
RUN chmod 655 /usr/local/share/ca-certificates/Yandex/YandexCA.crt
# RUN cd /etc/security/ && keytool -importcert \
#                  -alias YandexCA -file /usr/local/share/ca-certificates/Yandex/YandexCA.crt \
#                  -keystore ssl -storepass sample-storepass \
#                  --noprompt
# RUN chmod 655 /etc/security/ssl

EXPOSE 8765

CMD [ "python3", "ws_prediction_server.py"]