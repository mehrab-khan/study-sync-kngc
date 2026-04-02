import homeworkModel from "../model/homeworkModel.js";

const getData = async (req, res) => {
    try{
        const data = await homeworkModel.find({})
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}

const createNewData = async (req, res) => {
    try {
        const images = req.files.images ? req.files.images.map(f => f.path) : []
        const pdf = req.files.pdf ? req.files.pdf[0].path : null
        const newData = new homeworkModel({
            images : images,
            subject : subject,
            topic : topic,
            date : date,
            postBy : postBy,
            deadline : deadline,
            pdf : pdf
         })
        await newData.save()
        res.status(201).json({ message: "Uploaded successfully", data: newData })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const readDataById = async (req, res) => {
    try{
        const data = await homeworkModel.findById(req.params.id)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}

const deleteDataById = async (req, res) => {
    try{
        const data = await homeworkModel.findByIdAndDelete(req.params.id)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}

const modifyDataById = async (req, res) => {
    try{
        const data = await homeworkModel.findByIdAndUpdate(req.params.id. req.body)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}

export {getData, createNewData, deleteDataById, readDataById, modifyDataById}