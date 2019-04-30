#!bin/bash

echo "Creando set de datos inicial"
node main.js addArtist MaroonV
node main.js addAlbum 1 V 2005
node main.js addTrack 1 Maps 3 Pop
node main.js addTrack 1 Animals 4 Pop
node main.js addTrack 1 Sugar 4 Pop
node main.js addTrack 1 NewLove 5 Pop
node main.js addTrack 1 Feelings 6 Pop
node main.js addTrack 1 ThisSummer 3 Pop

node main.js addArtist RHCP
node main.js addAlbum 2 Californication 2001
node main.js addTrack 2 AroundTheWorld 4 Rock Funk
node main.js addTrack 2 ParallelUniverse 5 Rock Funk
node main.js addTrack 2 Easily 6 Rock Funk
node main.js addTrack 2 Savior 5 Rock Funk

node main.js addArtist DaftPunk
node main.js addAlbum 3 RAM 2001
node main.js addTrack 3 Contact 4 Funk
node main.js addTrack 3 Touch 5 Funk
node main.js addTrack 3 GetLucky 6 Funk
node main.js addTrack 3 Beyond 5 Funk

node main.js addUsuario Tobias
node main.js addUsuario Mauro
node main.js addUsuario Gabi
node main.js addUsuario Nahuel

echo "Datos ingresados correctamente"
