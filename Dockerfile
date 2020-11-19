FROM node:12.18.4-slim

COPY Makefile ./
COPY package*.json ./

RUN npm install
RUN npm install make -g
RUN npm install --global mocha

USER node

CMD [ "make", "run-test" ]