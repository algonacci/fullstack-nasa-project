FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install --only=production

RUN npm run build --prefix client

USER node

EXPOSE 8000

CMD ["npm", "start", "--prefix", "server"]