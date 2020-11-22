FROM node:12.18.4-alpine

WORKDIR /test

COPY package*.json ./

RUN npm install
RUN npm install make -g

COPY . .

USER node

CMD [ "make", "run-test" ]