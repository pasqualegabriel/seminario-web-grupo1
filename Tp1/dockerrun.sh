#!/bin/bash

UNQFY_PORT=8000
docker run -d -p $UNQFY_PORT:$UNQFY_PORT unqfyapp || exit

NOTIFY_PORT=8001
docker run -d -p $NOTIFY_PORT:$NOTIFY_PORT notifyapp || exit

MONITOR_PORT=8002
docker run -d -p $MONITOR_PORT:$MONITOR_PORT monitorapp || exit

LOGS_PORT=8003
docker run -d -p $LOGS_PORT:$LOGS_PORT logsapp || exit

echo
echo "----------------------------------------------------------------"
echo

echo "Aplicacion unqfy corriendo en el puerto $UNQFY_PORT"
echo "Aplicacion notify corriendo en el puerto $NOTIFY_PORT"
echo "Aplicacion monitor corriendo en el puerto $MONITOR_PORT"
echo "Aplicacion logs corriendo en el puerto $LOGS_PORT"
