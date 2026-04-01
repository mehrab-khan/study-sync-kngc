import express from 'express'
import cors from 'cors'
import homeWorkRoutes from './routes/homeWorkRoutes.js'
import notesRoutes from './routes/notesRoutes.js'
import noticeRoutes from './routes/noticeRoutes.js'
import userDataRoutes from './routes/userDataRoutes.js'
import connectDB from './db/connectdb.js'

const app = express()
const port = 3000
const databaseURL = 'mongodb://localhost:27017'

//connect database
connectDB(databaseURL)

//cors activate 
app.use(cors())
//body parser
app.use(express.json())
//routes here
app.use('/api/userData', userDataRoutes)
app.use('/api/homework', homeWorkRoutes)
app.use('/api/notes', notesRoutes)
app.use('/api/notice', noticeRoutes)


//start server
app.listen(port, ()=>{
    console.log("Server is listening at port ", port)
})