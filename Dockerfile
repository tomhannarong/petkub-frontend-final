FROM node:14-alpine

ENV PORT 3000
ENV NODE_ENV=production

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json yarn.lock /usr/src/app/
RUN yarn

# Copying source files
COPY . /usr/src/app

# Building app
RUN yarn build
EXPOSE 3000

# Copying source files
COPY . /usr/src/app

# Running the app
CMD yarn start
