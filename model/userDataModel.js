import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
    profileImage : {
        type : [String]
    },
    name : {
        type : String,
        required : true
    },
    roll : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const userDataModel = mongoose.model("userdata", userDataSchema)
export default userDataModel