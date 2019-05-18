FROM node:12

RUN rm -rf /usr/src/lunchroom/pages
WORKDIR /usr/src/lunchroom/server

COPY package*.json ./

RUN npm install
RUN export NODE_ENV=development

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
