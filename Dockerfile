FROM node:latest

WORKDIR /app

ENV PATH $PATH:/app/node_modules/.bin

COPY package*.json /app/
RUN npm install

#COPY . .

#ENV PORT=8080
