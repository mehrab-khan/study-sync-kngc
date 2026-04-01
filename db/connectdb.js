import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    const DATABASE_OPTION = {
        dbName : "studysync"
    }
    await mongoose.connect(DATABASE_URL, DATABASE_OPTION)
    console.log("Database Connected Successfully...")
}

export default connectDB