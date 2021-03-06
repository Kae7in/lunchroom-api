FROM node:12

WORKDIR /usr/src/lunchroom/server

COPY package*.json ./

RUN npm install
RUN export NODE_ENV=development
RUN npm i --S mongodb

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
