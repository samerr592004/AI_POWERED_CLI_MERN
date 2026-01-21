import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/health',(req,res)=>{
    res.send('Server is healthy');
})

app.listen(process.env.PORT,()=>{
    console.log(`Your application is running in http://localhost:${process.env.PORT}`)
})