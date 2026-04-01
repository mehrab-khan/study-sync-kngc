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
    try{
        const [images, subject, topic, date, postBy, deadline, pdf] = req.body
         const newData = new homeworkModel({
            images : images,
            subject : subject,
            topic : topic,
            date : date,
            postBy : postBy,
            deadline : deadline,
            pdf : pdf
         })
         if(newData){
            await newData.save()
            console.log("New Data Created")
        }
        res.status(201).json(newData)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
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