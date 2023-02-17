mkdir backend/.extras
cp .extras/schema.json backend/.extras
cp .extras/YandexCA.crt backend/.extras

mkdir metrics/.extras
cp .extras/YandexCA.crt metrics/.extras

mkdir frontend/.extras
cp .extras/schema.json frontend/.extras

mkdir datascience/.extras
cp .extras/schema.json datascience/.extras
cp .extras/YandexCA.crt datascience/.extras

docker compose down && docker compose build && docker compose up
