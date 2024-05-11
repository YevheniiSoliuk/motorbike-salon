FROM node:20.11-alpine AS development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . .

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "start:dev"]