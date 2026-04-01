import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
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
    pdf : {
        type : String
    }
})

const notesModel = mongoose.model("notes", notesSchema)
export default notesModel