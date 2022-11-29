import { Router } from "express";
const router = Router()
import {methods2} from './../storage.js'
import {methods} from '../controller/bonos.controller.js'

router.get('/',methods.getAllBonos)
router.get('/:id',methods.getBonoId)
router.post('/create',methods2.UploadImage(),methods.createBono)
router.put('/update/:id',methods.updateBono)
router.delete('/delete/:id',methods.deleteBono)

export default router