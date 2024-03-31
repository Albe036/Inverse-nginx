FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

#ENV PORT 3000
#ENV NODE_ENV DEV

COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD ["npm", "run", "dev"]