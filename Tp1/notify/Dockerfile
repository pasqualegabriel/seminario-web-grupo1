FROM node:10

WORKDIR /usr/src/docker/notify_app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8001

CMD ["npm", "start"]


