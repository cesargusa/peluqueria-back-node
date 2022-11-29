

import { conexion } from '../database/database.js'
import path from 'path'
const getAllUsuarios = async (req, res) => {

 const con = await conexion
let nombre = req.query.nombre
let apellido1 = req.query.apellido1
let apellido2 = req.query.apellido2
   
    if (nombre === undefined) {
        const result = await con.query("SELECT * FROM usuarios")
        res.json(result)
        return
    }else{
        const result = await con.query(`SELECT * FROM usuarios WHERE nombre LIKE '%${nombre}%'`)
        res.json(result)
    }
        
    
   
    console.log(nombre)
}

const getUsuarioId = async (req, res) => {
    const con = await conexion
    const { id } = await req.params
    const [result] = await con.query("SELECT * FROM usuarios WHERE id = ? ", id)
    res.json(result)
    console.log(result)
}

const createUsuario = async (req, res) => {
    try {

        const { nombre, apellido1, apellido2, telefono, direccion, email, creationDate,updateDate, descripcion } = req.body
        const usuario = {
            nombre, apellido1, apellido2, telefono, direccion, email, creationDate, updateDate,descripcion
        }

        const con = await conexion
        const result = await con.query("INSERT INTO usuarios SET ?", usuario)
        res.json(usuario)
        console.log(usuario)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, apellido1, apellido2, telefono, direccion, email, creationDate, updateDate,descripcion } = req.body
        const usuario = {
            nombre, apellido1, apellido2, telefono, direccion, email, creationDate, updateDate,descripcion
        }
        const con = await conexion
        const result = await con.query("UPDATE usuarios SET ? WHERE id = ?", [usuario, id])
        res.json({ message: "Cambiado" })
    } catch (error) {

        res.status(500)
        res.send(error.message)
    }
}





const deleteUsuario = async (req, res) => {
    try {

        const { id } = req.params
        const con = await conexion
        const result = await con.query("DELETE from usuarios WHERE id = ?", id)
        res.json({ message: `El usuario ${id} ha sido borrado correctamente` })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
export const methods = {
    getAllUsuarios,
    getUsuarioId,
    createUsuario,
    updateUsuario,
    deleteUsuario
}