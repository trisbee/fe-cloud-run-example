# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

ARG RELEASE_VERSION
ENV RELEASE_VERSION $RELEASE_VERSION

RUN npm ci
# If you are building your code for production
# RUN npm ci --only=production
# Install production dependencies.
#RUN npm install --only=production

# Bundle app source
COPY src ./src

# copy git for this example
COPY .git/ ./.git/


# Start the server app using Node.js
CMD ["npm", "run", "start"]
