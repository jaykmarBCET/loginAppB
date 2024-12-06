import express from 'express'
import cors from  'cors'
import cookieParser from 'cookie-parser'
import { router } from './src/routes/user.routes.js'



const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:false
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
// app.use(express.urlencoded())
app.use(express.static("public"))
app.use(cookieParser())

app.use("/api/v1/users",router)

app.get('/',(req,res)=>{
    return res.send({message:"Server runing successfully"})
})

export { app}
