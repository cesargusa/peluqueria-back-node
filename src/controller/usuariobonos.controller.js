import { conexion } from "../database/database.js";



const getUsuarioBonoId = async(req,res) => {
    const {id} = await req.params
    const con = await conexion
    const userDate = await con.query("SELECT * FROM usuarios where id = ?",id)
    const bonosUsuario = await con.query("SELECT * FROM usuariobonos where idUsuario = ?", id)

    res.json({userDate,bonosUsuario})
}


export const methods = {
    getUsuarioBonoId
}