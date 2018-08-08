# docker-setup

## run Redis in background with persistent storage

docker run --name redis -d -v redis-data:/data redis:alpine

## build & run app

docker build -t docker-setup .

docker run -it --rm --name docker-setup docker-setup

## check running containers

docker ps -a

