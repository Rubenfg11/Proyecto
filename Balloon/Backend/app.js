const express= require ('express');
require ('dotenv').config();
require ('./config/bd');

const app=express();

//config
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api',require('./routes/api'));
// todas las peticiones que empiecen por /api  van a estar gestionadas por el fichero api.js



const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Servidor Corriendo en el puerto ${PORT}`);
});