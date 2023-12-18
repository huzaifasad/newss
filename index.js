import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import multer from 'multer';
import Laptop from './schemas/productschema/Laptop.js';
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


