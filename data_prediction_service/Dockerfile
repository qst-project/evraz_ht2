FROM python:3.8-slim-buster

WORKDIR /data_prediction_service

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY ws_prediction_server .

EXPOSE 8765

CMD [ "python3", "ws_prediction_server.py"]