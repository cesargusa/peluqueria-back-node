import { Router } from "express";
const router = Router()
import {methods} from '../controller/usuarios.controller.js'

router.get('/',methods.getAllUsuarios)
router.get('/:id',methods.getUsuarioId)
router.post('/create',methods.createUsuario)
router.put('/update/:id',methods.updateUsuario)
router.delete('/delete/:id',methods.deleteUsuario)

export default router