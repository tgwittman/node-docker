FROM node:12

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 80

CMD [ "node", "src/server.js" ]
