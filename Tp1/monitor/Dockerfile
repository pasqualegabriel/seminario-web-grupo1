FROM node:11.10.1

COPY . .

RUN npm install

ENV NODE_ENV=production
ENV PORT=8002
ENV LOGS_PORT=localhost:8003
ENV NOTIFY_PORT=localhost:8001
ENV UNQFY_PORT=localhost:8080

EXPOSE 8002

CMD npm start
