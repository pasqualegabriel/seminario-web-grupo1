#!/bin/bash

docker kill $(docker ps -a -q) > /dev/null 2>&1
echo "Se detuvieron todos los servicios de docker."
