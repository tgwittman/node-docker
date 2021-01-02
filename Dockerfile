FROM node:12

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]
