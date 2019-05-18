FROM node:12

WORKDIR /usr/src/lunchroom/server

COPY package*.json ./

RUN npm install
RUN export NODE_ENV=development

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
