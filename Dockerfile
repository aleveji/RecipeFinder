FROM node:12.18.4-slim

COPY package*.json ./

RUN npm install

RUN rm ./package*.json

CMD [ "npm", "test" ]