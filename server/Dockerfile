FROM node:10
RUN mkdir -p /src/app/nba-server
WORKDIR /src/app/nba-server

COPY package.json /src/app/nba-server

RUN npm install

COPY . /src/app/nba-server
CMD ["npm","start"]
