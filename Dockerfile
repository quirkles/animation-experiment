FROM node:16

# Create app directory
WORKDIR /app

COPY . .

RUN cd server && npm install
RUN npm install && npm run build

RUN rm -rf src

EXPOSE 3030

CMD [ "node", "server/index.js" ]
