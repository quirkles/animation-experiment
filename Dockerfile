FROM node:16

# Create app directory
WORKDIR /app

COPY dist dist
COPY server server

RUN cd server && npm install

EXPOSE 3030

CMD [ "node", "server/index.js" ]
