FROM node:10

WORKDIR /usr/src/docker/unqfy_app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]


