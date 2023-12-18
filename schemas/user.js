import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  email: String,
  name: String,
  password: String
}, {
  collection: 'signup' // Specify the actual collection name
});

const Signup = mongoose.model('signup', productSchema);

export default Signup;
