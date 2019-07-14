FROM node:10

WORKDIR /usr/src/docker/logs_app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8003

CMD ["npm", "start"]


