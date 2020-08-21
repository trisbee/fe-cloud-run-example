# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Install production dependencies.
#RUN npm install --only=production

# Bundle app source
#COPY src ./src

# copy all for this example
COPY . .


# Start the server app using Node.js
CMD ["npm", "run", "start"]