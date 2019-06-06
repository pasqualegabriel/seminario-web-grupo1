const {getUNQfy, saveUNQfy} = require('../config/db');

const save = (req, res) => {
  try{
    const unqfy = getUNQfy();
    const albums=unqfy.addAlbum(parseInt(req.body.artistId),req.body);  
    saveUNQfy(unqfy);
    res.status(201).send(albums);
  }catch (error) {
    //REVISAR
    res.status(500).send(error).end();
  }   
};

const findBy= (req,res) =>{
  try{
    const unqfy = getUNQfy();
    const albums=unqfy.getAlbumById(parseInt(req.params.id));  
    saveUNQfy(unqfy);
    res.status(200).send(albums);
  }catch(error){
    res.status(500).send(error).end();
  }
};

const updateYear= (req,res) =>{
  try{
    const unqfy = getUNQfy();
    const albums=unqfy.updateYear(parseInt(req.params.id),req.body);  
    saveUNQfy(unqfy);
    res.status(200).send(albums);
  }catch(error){
    res.status(500).send(error).end();
  }
};
  
const deleteA = (req, res) => {
  try{
    const unqfy = getUNQfy();
    unqfy.deleteAlbum(parseInt(req.params.id));  
    saveUNQfy(unqfy);
    res.status(204).send();
  }catch (error) {
    //REVISAR
    res.status(500).send(error).end();
  }   
};

const all = (req, res) => {
  try{
    const unqfy = getUNQfy();
    const albums = req.query.name ?unqfy.findAllAlbums() : unqfy.findAllAlbumsByName(req.query.name);  
    saveUNQfy(unqfy);
    res.status(200).send(albums);
  }catch (error) {
    //REVISAR
    res.status(500).send(error).end();
  }   
};
  
module.exports = {save,findBy,updateYear,deleteA,all};