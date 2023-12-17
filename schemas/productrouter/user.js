const express = require('express');
const router = express.Router();
const signup = require('../user.js');


router.post('/signup', async (req, res) => {
  try {
    const existingUser = await signup.findOne({ email: req.body.email });

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

 
  router.post('/login', async (req, res) => {
    try {
      const existingUser = await signup.findOne({ _id: req.body.id });

       
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


  router.put('/update-account/:userId', async (req, res) => {
    try {
      const user = await signup.findByIdAndUpdate(req.params.userId, req.body, { new: true });
  
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
  
router.delete('/delete-account', async (req, res) => {
  try {
    const existingUser = await signup.findOne({ email: req.body.email });
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


module.exports = router;
