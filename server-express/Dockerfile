FROM node:lts-alpine
WORKDIR /server-express
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
CMD [ "node", "server.js" ]
