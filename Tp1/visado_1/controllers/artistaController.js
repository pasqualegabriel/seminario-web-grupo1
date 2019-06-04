const {getUNQfy, saveUNQfy} = require('../config/db');

const save = (req, res) => {

  try{
    const unqfy = getUNQfy();
    const artists=unqfy.addArtist(req.body);  
    saveUNQfy(unqfy);
    res.status(200).send(artists);

  }catch (error) {
    //REVISAR
    res.status(500).send(error).end();
  }   
};

const findBy = (req, res) => {
  try{
    const unqfy = getUNQfy();
    const artists=unqfy.getArtistById(parseInt(req.params.id));  
    saveUNQfy(unqfy);
    res.status(200).send(artists);
  
  }catch (error) {
    //REVISAR
    res.status(500).send(error);
  }   
};

module.exports = {save,findBy};


