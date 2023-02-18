mkdir backend/.extras
cp .extras/schema.csv backend/.extras
cp .extras/YandexCA.crt backend/.extras

mkdir metrics/.extras
cp .extras/YandexCA.crt metrics/.extras
cp .extras/schema.csv metrics/.csv

mkdir frontend/.extras
cp .extras/schema.json frontend/.extras

mkdir datascience/.extras
cp .extras/schema.csv datascience/schema.csv
cp .extras/YandexCA.crt datascience/.extras

docker compose down && docker compose build && docker compose up
