FROM node:14-alpine AS builder
ENV NODE_ENV production
# add a work directory
WORKDIR /app
# cache and istall dependencies
COPY package.json .
COPY package-lock.json ./
RUN npm i npm@latest 
#Copy app files
COPY . /app
RUN npm run build 
EXPOSE  3000


CMD [ "npm", "start" ]

FROM development AS build 

RUN npm run build

# 2.for ngnix setup
FROM nginx:alpine

COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]