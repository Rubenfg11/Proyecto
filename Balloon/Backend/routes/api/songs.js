const router = require('express').Router();

const Song= require('../../models/song.model');

//se encarga de ejecutarse  cuando recibimos una peticion de tipo get sobre api/songs;
router.get('/',async(req,res)=>{                //Cuando ataques la url '/' va a devolver un array con una lista de todo
    try{
        const songs= await Song.find();
        res.json(songs);
    }catch(error){
        res.json({error:error.message});
    }
})  

router.get('/:songId',async (req,res)=>{
    const{songID}=req.params;
    const song= await Song.findById(songID); async
    res.json(song);
})







module.exports = router;