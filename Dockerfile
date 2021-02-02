FROM node:lts

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

ENV PORT=3333

RUN npm install

COPY . .

EXPOSE $PORT

ENTRYPOINT ["npm", "run", "development"]