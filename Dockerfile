FROM node:20-alpine

WORKDIR /app

COPY . .

ENV NODE_ENV="production"

RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "start"]
