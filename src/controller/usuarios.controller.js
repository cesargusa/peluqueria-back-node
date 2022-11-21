

import { conexion } from '../database/database.js'

const getAllUsuarios = async (req, res) => {
    const con = await conexion
    const result = await con.query("SELECT * FROM usuarios")
    res.json(result)
}

const getUsuarioId = async (req, res) => {
    const con = await conexion
    const { id } = await req.params
    const [result] = await con.query("SELECT * FROM usuarios WHERE id=? ", id)
    res.json(result)
}

const createUsuario = async (req, res) => {
    try {

        const { id, nombre, apellido1, apellido2, telefono, direccion, creationDate } = req.body
        const usuario = {
            nombre, apellido1, apellido2, telefono, direccion, creationDate
        }

        const con = await conexion
        const result = await con.query("INSERT INTO usuarios SET ?", usuario)
        res.json({ message: "Usuario añadido" })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, apellido1, apellido2, telefono, direccion, creationDate } = req.body
        const usuario = {
            id, nombre, apellido1, apellido2, telefono, direccion, creationDate
        }
        const con = await conexion
        const result = await con.query("UPDATE usuarios SET ? WHERE id = ?", [usuario, id])
        res.json({ message: "Usuario actualizado" })
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