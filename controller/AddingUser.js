// // controllers/user.controller.js
// import UserModel from "../models/AddingUser.js";

// export const signUp = async (req, res) => {
//   const { username, email, password, firstName, lastName } = req.body.data;
//   try {
//     const newUser = new UserModel({ username, email, password, firstName, lastName });
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully', user: newUser });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong', error: error.message });
//   }
// };

// // export const getUserDetails = async (req, res) => {
// //   try {
// //     const username = req.user.username;
// //     const user = await UserModel.findOne({ username });
// //     if (!user) {
// //       return res.status(404).json({ message: 'User not found' });
// //     }
// //     res.status(200).json({ user });
// //   } catch (error) {
// //     console.error('Error in getUserDetails controller:', error);
// //     res.status(500).json({ message: 'Internal Server Error', error: error.message });
// //   }
// // };
// export const getUserDetails = async (req, res) => {
//   try {
//     const user = await User.findById(req.userId);
//     console.log('User object:', user);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
      
//     }
    
//     // Now, you can safely access properties of the user object
//     const userDetails = {
//       username: user.username,
//       email: user.email,
//       // ... other properties
//     };
    
//     res.status(200).json({ user: userDetails });
//   } catch (error) {
    
//     console.error('Error in getUserDetails controller:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
  

// };

// export const updateUserDetails = async (req, res) => {
//   const { username, email, password, firstName, lastName } = req.body;
//   try {
//     const updatedUser = await UserModel.findOneAndUpdate(
//       { username },
//       { email, password, firstName, lastName },
//       { new: true }
//     );
//     res.status(200).json({ message: 'User details updated successfully', user: updatedUser });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong', error: error.message });
//   }
// };

// export const deleteUser = async (req, res) => {
//   const { username } = req.params;
//   try {
//     await UserModel.findOneAndDelete({ username });
//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong', error: error.message });
//   }
// };
