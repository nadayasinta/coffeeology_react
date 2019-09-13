#!/bin/bash

sudo docker stop helloworld
sudo docker rm helloworld
sudo docker rmi farizap/helloworld
sudo docker run -d --name helloworld -p 3000:80 farizap/helloworld:latest
