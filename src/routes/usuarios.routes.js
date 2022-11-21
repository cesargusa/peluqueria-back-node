import { Router } from "express";
const router = Router()
import {methods} from '../controller/usuarios.controller.js'

router.get('/usuarios',methods.getAllUsuarios)
router.get('/usuarios/:id',methods.getUsuarioId)
router.post('/usuarios/create',methods.createUsuario)
router.put('/usuarios/update/:id',methods.updateUsuario)
router.delete('/usuarios/delete/:id',methods.deleteUsuario)

export default router