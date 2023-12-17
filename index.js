import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import laptoprouter = from './schemas/productrouter/laptop';
import userrouter = from './schemas/productrouter/user';
const app = express();
// index.js (server)
const url = 'mongodb+srv://huzaifa084567:12345@cluster0.wpihnwn.mongodb.net/your-database-name?retryWrites=true&w=majority';
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
    res.json("ALLAH HU AKBAR");
})
app.use("/laptop", laptoprouter);
app.use("/user", userrouter);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", (req, res) => {
  res.send("thiis response");
});
