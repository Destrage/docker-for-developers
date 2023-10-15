FROM node:18

WORKDIR /usr/src/auth_server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000
CMD [ "npm", "start"]