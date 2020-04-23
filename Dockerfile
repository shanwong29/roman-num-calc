FROM node:12.16.1

# set working directory
WORKDIR /usr/app

# copy json files in to WORKDIR
COPY package*.json ./

# install and cache app dependencies
RUN npm install --silent

# start app
CMD ["npm", "start"]