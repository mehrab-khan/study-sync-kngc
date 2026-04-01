import userDataModel from "../model/userDataModel.js";

const getData = async (req, res) => {
    try{
        const data = await userDataModel.find({})
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}

const createNewData = async (req, res) => {
    try{
        const [profileImage, name, roll, password] = req.body
         const newData = new userDataModel({
            profileImage : profileImage,
            name : name,
            roll : roll,
            password : password
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
        const data = await userDataModel.findById(req.params.id)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}

const deleteDataById = async (req, res) => {
    try{
        const data = await userDataModel.findByIdAndDelete(req.params.id)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}

const modifyDataById = async (req, res) => {
    try{
        const data = await userDataModel.findByIdAndUpdate(req.params.id. req.body)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
}

export {getData, createNewData, deleteDataById, readDataById, modifyDataById}