FROM node:18.16.1 as base

WORKDIR /usr/src/app
COPY package.json ./

RUN yarn install

COPY src ./src
COPY tsconfig.json ./tsconfig.json

RUN yarn build

EXPOSE 3000
