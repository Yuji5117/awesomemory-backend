FROM node:16.10.0-alpine

WORKDIR /api

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .
RUN npx prisma generate
