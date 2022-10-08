const express = require('express');
const app = express();
const port = 4000;
const ucampersRoutes =  require('./src/routes/ucampers.routes')
const cors = require('cors')

//middlewares

app.use(express.json())
app.use(cors());

app.use(ucampersRoutes)

app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})


