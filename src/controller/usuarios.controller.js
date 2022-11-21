

import {conexion} from '../database/database.js'

export const getAllUsuarios = async(req,res) =>{
    const [result] = await conexion.query("SELECT * FROM usuarios")
    res.json(result)
}
