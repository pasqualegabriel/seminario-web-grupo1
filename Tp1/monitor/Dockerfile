FROM node:10

WORKDIR /usr/src/docker/monitor_app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8002

CMD ["npm", "start"]


