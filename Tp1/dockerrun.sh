#!/bin/bash

UNQFY_PORT=8000
docker run -d --net unqfynet --ip 172.20.0.5 -p $UNQFY_PORT:$UNQFY_PORT unqfyapp || exit

NOTIFY_PORT=8001
docker run -d --net unqfynet --ip 172.20.0.2 -p $NOTIFY_PORT:$NOTIFY_PORT notifyapp || exit

MONITOR_PORT=8002
docker run -d --net unqfynet --ip 172.20.0.3 -p $MONITOR_PORT:$MONITOR_PORT monitorapp || exit

LOGS_PORT=8003
docker run -d --net unqfynet --ip 172.20.0.4 -p $LOGS_PORT:$LOGS_PORT logsapp || exit

echo
echo "----------------------------------------------------------------"
echo

echo "Aplicacion unqfy corriendo en 172.20.0.5:$UNQFY_PORT"
echo "Aplicacion notify corriendo en 172.20.0.2:$NOTIFY_PORT"
echo "Aplicacion monitor corriendo en 172.20.0.3:$MONITOR_PORT"
echo "Aplicacion logs corriendo en 172.20.0.4:$LOGS_PORT"
