FROM nginx:stable
MAINTAINER farizap  "fapriyanto@alterra.id"

RUN mkdir -p /coffeology_react/www/reak
RUN mkdir -p /coffeology_react/logs/nginx

COPY default.conf /etc/nginx/conf.d/
COPY . /coffeology_react/

WORKDIR /coffeology_react
