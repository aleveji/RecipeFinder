FROM node:12.18.4-slim

COPY Makefile ./
COPY package*.json ./

RUN make install

CMD [ "make", "run-test" ]