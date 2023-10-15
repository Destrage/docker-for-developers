FROM node

WORKDIR /usr/src/auth_server

RUN npm i -g pnpm

COPY package*.json ./

RUN pnpm install

COPY . .

EXPOSE 4000
CMD [ "npm", "start"]