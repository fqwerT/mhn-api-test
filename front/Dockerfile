FROM node:18-alpine as build

ARG ENVIRONMENT="develop"

RUN apk add --no-cache yarn git

WORKDIR /usr/src/frontend

COPY . .

RUN cp .env.${ENVIRONMENT} .env && \
    git config --global http.sslVerify false && \
    yarn install --network-concurrency 1 && \
    yarn build

FROM nginx:1.25.4

COPY --from=build /usr/src/frontend/build/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/

EXPOSE 80
