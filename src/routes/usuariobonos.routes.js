import { Router } from "express";
const router = Router()
import {methods} from '../controller/usuariobonos.controller.js'

router.get('/:id',methods.getUsuarioBonoId)


export default router