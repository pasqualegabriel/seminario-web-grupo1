const {getUNQfy, saveUNQfy} = require('../config/db');

const save = (req, res) => {

  try{
    const unqfy = getUNQfy();
    const artists=unqfy.addArtist(req.body);  
    saveUNQfy(unqfy);
    res.status(201).send(artists);
  }catch (error) {
    //REVISAR
    res.status(500).send(error).end();
  }   
};

const update = (req, res) => {

  try{
    const unqfy = getUNQfy();
    const artists=unqfy.updateArtist(parseInt(req.params.id),req.body);  
    saveUNQfy(unqfy);
    res.status(200).send(artists);
  }catch (error) {
    //REVISAR
    res.status(500).send(error).end();
  }   
};

const all = (req, res) => {

  try{
    console.log(req.query.name);
    const unqfy = getUNQfy();
    const artists= req.query.name ? unqfy.findAllArtistByName(req.query.name): unqfy.getAllArtist();  
    saveUNQfy(unqfy);
    res.status(200).send(artists);
  }catch (error) {
    //REVISAR
    res.status(500).send(error).end();
  }   
};

const addAlbum = (req, res) => {

  try{
    const unqfy = getUNQfy();
    const artists=unqfy.addAlbum(parseInt(req.params.id),req.body);  
    saveUNQfy(unqfy);
    res.status(200).send(artists);
  }catch (error) {
    //REVISAR
    res.status(500).send(error).end();
  }   
};

const deleteA = (req, res) => {
  try{
    const unqfy = getUNQfy();
    unqfy.deleteArtist(parseInt(req.params.id));  
    saveUNQfy(unqfy);
    res.status(204).send();
  }catch (error) {
    //REVISAR
    res.status(500).send(error).end();
  }   
};

const findByName = (req, res) => {
  try{
    const unqfy = getUNQfy();
    const artists=unqfy.findAllArtistByName(req.query.name);  
    saveUNQfy(unqfy);
    res.status(200).send(artists);
  
  }catch (error) {
    //REVISAR
    res.status(500).send(error);
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

module.exports = {save,findBy,addAlbum,deleteA,findByName,all,update};


