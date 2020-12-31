FROM node:12

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD [ "node", "src/server.js" ]
