# docker-setup

## start all services

docker-compose up -d

## stop all services

docker-compose down

## run InfluxDB in background with custom config file

docker run --name influxdb -d -v $PWD/influxdb.conf:/etc/influxdb/influxdb.conf:ro influxdb:alpine -config /etc/influxdb/influxdb.conf

## run Redis in background with persistent storage

docker run --name redis -d -v redis-data:/data redis:alpine

## build & run app

docker build -t docker-setup .

docker run -it --rm --name docker-setup --link redis:redis --link influxdb:influxdb docker-setup

## check running containers

docker ps -a

