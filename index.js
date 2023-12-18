import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

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
app.post("laptop/add", upload.array("photos", 3), async (req, res) => {
  const { name, price, desc, productQuantity, ramSize, type, brand } = req.body;
  console.log(req.body);
  console.log(req.files);

  // Extract uploaded file information
  const images = req.files.map((file) => ({
    data: file.buffer,
    contentType: file.mimetype,
  }));

  // Parse the features field
  const features = JSON.parse(req.body.features);

  // Create a new laptop instance
  const newLaptop = new Laptop({
    name,
    price,
    desc,
    productQuantity,
    ramSize,
    type,
    brand,
    images,
    features,
  });

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", (req, res) => {
  res.send("thiis response");
});
