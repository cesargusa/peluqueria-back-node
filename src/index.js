import express from 'express';
const app = express()

import usuariosRoutes from './routes/usuarios.routes.js'
const PORT = process.env.PORT || 2222


app.use(usuariosRoutes)
app.listen(PORT, () =>{
    console.log(`Servidor ejecutandose en el puerto ${PORT}`)
})