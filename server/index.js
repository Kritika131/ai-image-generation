import express from "express";
import * as dotenv from "dotenv";
import  cors from 'cors';
import connectDb from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"


dotenv.config(); // this line allow us to pool our environment variables from our DOTenv file which we created

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}));

app.use("/api/v1/post",postRoutes)  
app.use("/api/v1/dalle",dalleRoutes)


app.get('/',async(req,res)=>{
    res.send('Hello Worldhrtht!');
})

const startServer = async()=>{
    try{
        connectDb(process.env.MONGODB_URL);
        app.listen(5002,()=>console.log("app is running on Port no 5002")) 
    }catch (err){
        console.log("err mongodb not connected");
    }
} 
startServer(); 