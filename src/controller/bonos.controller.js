import { conexion } from "../database/database.js";
import {methods2} from './../storage.js'

const getAllBonos = async (req,res) => {
const con = await conexion

const result = await con.query("SELECT * FROM bonos")

res.json(result)

}
const sendBonos= ({data},file)=>{
    const form = new FormData()
    form.append('file',file,'form-data')
    
    return fetch(`localhost:2222/bonos/create`,form,{
        methods:"POST"
    })
}

const getBonoId = async (req, res) => {
    const con = await conexion
    const { id } = await req.params
    const [result] = await con.query("SELECT * FROM bonos WHERE idCategoria = ? ", id)
    res.json(result)
}

const createBono = async (req, res) => {
    try {

        const { idCategoria, nombreBono, descripcion, numeroBonos, precio, creationDate } = req.body
        const bono = {
            idCategoria, nombreBono, descripcion, numeroBonos, precio,urlFoto:req.file.filename, creationDate
        }
        const con = await conexion
        const result = await con.query("INSERT INTO bonos SET ?", bono)
        res.json({ message: "Bono añadido" })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

    console.log(req.file)
}


const updateBono = async (req, res) => {
    try {
        const { id } = req.params
        const { idCategoria, nombreBono, descripcion, numeroBonos, precio,urlFoto, creationDate } = req.body
        const bono = {
            idCategoria, nombreBono, descripcion, numeroBonos, precio, urlFoto,creationDate
        }
        const con = await conexion
        const result = await con.query("UPDATE bonos SET ? WHERE idCategoria = ?", [bono, id])
        res.json({ message: "Bono actualizado" })
    } catch (error) {

        res.status(500)
        res.send(error.message)
    }
}





const deleteBono = async (req, res) => {
    try {

        const { id } = req.params
        const con = await conexion
        const result = await con.query("DELETE from bonos WHERE idCategoria = ?", id)
        res.json({ message: `El bono ${id} ha sido borrado correctamente` })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
export const methods = {
    getAllBonos,
    getBonoId,
    createBono,
    updateBono,
    deleteBono,
    sendBonos
}