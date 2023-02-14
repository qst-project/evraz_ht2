FROM node:18-alpine

WORKDIR /app
COPY package.json /app/package.json
RUN npm install -p
COPY . /app
RUN npm run build

ENTRYPOINT ["npm", "run" , "start", "--port", "8080"]