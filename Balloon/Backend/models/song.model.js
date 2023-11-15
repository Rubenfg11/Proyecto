const { model , Schema} = require('mongoose');

const songSchema= new Schema({
    title: String,
    duration: Number,
    album: String,
    isEsplicit: Boolean,
});

module.exports=model('song',songSchema)

