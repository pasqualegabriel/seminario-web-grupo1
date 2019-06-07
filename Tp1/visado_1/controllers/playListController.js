const {getUNQfy, saveUNQfy} = require('../config/db');

const create = (req, res) => {
  try{
    const unqfy = getUNQfy();
    const playList= unqfy.createPlaylist(req.body);  
    saveUNQfy(unqfy);
    res.status(201).send(playList);
  }catch (error) {
    //REVISAR
    res.status(500).send(error).end();
  }   
};

const createByTracks = (req, res) => {
  try{
    const unqfy = getUNQfy();
    const playList= unqfy.createPlaylistByTracks(req.body);  
    saveUNQfy(unqfy);
    res.status(201).send(playList);
  }catch (error) {
    //REVISAR
    res.status(500).send(error).end();
  }   
};



module.exports = {create,createByTracks};