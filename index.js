 
import products from "./routes/AddingProducts.js";
// import userRoutes from './routes/AddingUser.js';
// index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const app = express();
// index.js (server)
const url = 'mongodb+srv://mhuzaifatariq7:luckynumber7@cluster0.mjqk6et.mongodb.net/your-database-name?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connected to the database'))
.catch(()=> console.log('not conncted'));

app.listen(5000);
app.use(cors(
    {
        origin:["https://midwork-frontend.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }

));
app.get("/",(req,res)=>{
    res.json("Hello");
})
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', products);
