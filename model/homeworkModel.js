import mongoose from "mongoose";

const homeWorkSchema = new mongoose.Schema({
    images : {
        type : [String]
    },
    subject : {
        type : String,
        required : true
    },
    topic : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    postBy : {
        type : String,
        required : true
    },
    deadline : {
        type : String
    },
    pdf : {
        type : String
    }
})

const homeworkModel = mongoose.model("homework", homeWorkSchema)
export default homeworkModel