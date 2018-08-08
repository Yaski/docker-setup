# Alpine Linux is much smaller than most distribution base images (~5MB), and thus leads to much slimmer images in general.
FROM node:alpine

WORKDIR /usr/src/app

COPY nodejs /usr/src/app

RUN npm install

CMD npm start
 
