import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
    context : {
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
})

const noticeModel = mongoose.model("notice", noticeSchema)
export default noticeModel