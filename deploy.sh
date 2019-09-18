#!/bin/bash

sudo docker stop coffeology_react
sudo docker rm coffeology_react
sudo docker rmi farizap/coffeology_react
sudo docker run -d --name coffeology_react -p 3000:80 farizap/coffeology_react:latest
