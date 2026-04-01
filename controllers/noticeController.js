import noticeModel from "../model/noticeModel.js";

const getData = async (req, res) => {
    try{
        const data = await noticeModel.find({})
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}

const createNewData = async (req, res) => {
    try{
        const {context, date, postBy} = req.body
         const newData = new noticeModel({
            context : context,
            date : date,
            postBy : postBy
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
        const data = await noticeModel.findById(req.params.id)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}

const deleteDataById = async (req, res) => {
    try{
        const data = await noticeModel.findByIdAndDelete(req.params.id)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}

const modifyDataById = async (req, res) => {
    try{
        const data = await noticeModel.findByIdAndUpdate(req.params.id. req.body)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}

export {getData, createNewData, deleteDataById, readDataById, modifyDataById}