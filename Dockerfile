FROM node:12.18.4-slim

COPY package*.json ./

RUN npm install
RUN npm install make -g

USER node

CMD [ "make", "run-test" ]