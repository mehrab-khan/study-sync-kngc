import express from express
import { createNewData, getData, deleteDataById, modifyDataById, readDataById } from '../controllers/homeworkController.js'
import upload from '../middleware/upload.js'
const router = express.Router()

router.get('/', getData)
router.post('/new', upload.fields([
    { name: "images", maxCount: 5 },
    { name: "pdf", maxCount: 1 }
]), createNewData)
router.delete('/delete', deleteDataById)
router.put('/put', modifyDataById)
router.get('read', readDataById)

export default router


