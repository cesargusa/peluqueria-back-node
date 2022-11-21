import { Router } from "express";
const router = Router()
import {getAllUsuarios} from '../controller/usuarios.controller.js'

router.get('/usuarios',getAllUsuarios)

export default router