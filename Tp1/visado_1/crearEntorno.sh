#!/bin/bash

echo "Creando Entorno de suscriptor"
echo
echo "---------------------------"
echo
node main.js addArtist PabloLescano Argentina

node main.js addUsuario pasquboca12@gmail.com
node main.js addUsuario n.autalan@gmail.com 
node main.js addUsuario reekremag@gmail.com
node main.js subscribe 1 pasquboca12@gmail.com
node main.js subscribe 1 n.autalan@gmail.com 
node main.js subscribe 1 reekremag@gmail.com
node main.js addAlbum 1 ATRCUMBIAPIOLA 2018
echo
echo "------------------------------"
echo
echo "finalizada la carga"
