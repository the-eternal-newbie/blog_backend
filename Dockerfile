FROM node:12

WORKDIR /blog-app
COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x wait-for-it.sh