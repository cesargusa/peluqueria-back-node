import express from 'express';
const app = express()

import usuariosRoutes from './routes/usuarios.routes.js'
const PORT = process.env.PORT || 2222

app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(usuariosRoutes)
app.listen(PORT, () =>{
    console.log(`Servidor ejecutandose en el puerto ${PORT}`)
})