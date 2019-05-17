FROM node:10
RUN mkdir -p /src/app/nba-client
WORKDIR /src/app/nba-client

COPY package.json /src/app/nba-client

RUN npm install

COPY . /src/app/nba-client
CMD ["npm","start"]
