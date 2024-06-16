# Pulling OS image from registry
FROM node:20.11-alpine AS development

# Setting home directory for OS
WORKDIR /usr/src/app

# Copying of all dependencies
COPY --chown=node:node package*.json ./

# Pulling all dependencies from npm registry
RUN npm install

# Copying of other application files
COPY --chown=node:node . .

# Building application
RUN npm run build

# Setting port on which application will be accessible
EXPOSE 8000

# Running application on port 8080
CMD ["npm", "run", "start:dev"]