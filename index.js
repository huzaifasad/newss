import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import multer from 'multer';
import { Laptop } from './schemas/productschema/Laptop.js'; // Import using the exact same name
import Signup from './schemas/user.js';


const app = express();
const upload = multer();

const url = 'mongodb+srv://mhuzaifatariq7:luckynumber7@cluster0.mjqk6et.mongodb.net/your-database-name?retryWrites=true&w=majority';
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch(() => console.log('Not connected'));

app.listen(5000);

app.use(
  cors({
    origin: [''],
    methods: ['POST', 'GET', 'PUT', 'DELETE'], // Include PUT and DELETE methods
    credentials: true,
  })
);
 
app.get('/', (req, res) => {
  res.json('ALLAH HU AKBAR');
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/laptop/add', async (req, res) => {
  const { name, price, ramSize, type, brand, features, images } = req.body;

  const newLaptop = new Laptop({
    name,
    price,
    ramSize,
    type,
    brand,
    images, // Assuming images is an array of image URLs
    features,
  });

  try {
    const savedLaptop = await newLaptop.save();
    res.status(201).json({ message: 'Laptop added successfully', laptop: savedLaptop });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

 
app.get('/laptop/get', async (req, res) => {
  try {
    const laptops = await Laptop.find();

    

    res.send(laptops);
  } catch (error) {
    console.error('Error fetching laptops:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.delete('/laptop/delete/:id', async (req, res) => {
  let data = await Laptop.deleteOne({ _id: req.params.id });
  res.send(data);
});

app.get('/update/:id', async (req, res) => {
  let data = await Laptop.findOne({ _id: req.params.id });
  if (data) {
    res.send(data);
  } else {
    res.send('No Data');
  }
});

app.put('/update/:id', async (req, res) => {
  let data = await Laptop.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(data);
  console.log(data);
});
app.post('user/signup', async (req, res) => {
    try {
      const existingUser = await Signup.findOne({ email: req.body.email });
  
      if (existingUser) {
        return res.status(409).json({ message: 'Account with this email already exists' });
      }
  
      let data = new signup(req.body); 
      let result = await data.save();
      result = result.toObject();
      delete result.password;
  
      res.status(201).json(result); 
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
   
    app.post('user/login', async (req, res) => {
      try {
        const existingUser = await Signup.findOne({ _id: req.body.id });
  
         
      } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });
  
  
    app.put('user/update-account/:userId', async (req, res) => {
      try {
        const user = await Signup.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    
        if (user) {
          const sanitizedUser = { ...user.toObject(), password: undefined };
          res.json(sanitizedUser);
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      } catch (error) {
        console.error('Error during account update:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });
    
  app.delete('user/delete-account', async (req, res) => {
    try {
      const existingUser = await Signup.findOne({ email: req.body.email });
      console.log(req.body.email)
      if (existingUser) {
        await signup.deleteOne({ email: req.body.email });
        res.json({ message: 'Account deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error during account deletion:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


 
