import bcrypt from "bcrypt";
import { User } from "../Models/User.js";
import jwt from 'jsonwebtoken'



export const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Validate required fields
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
      success: false,
    });
  }

  // Check if user already exists
  let user = await User.findOne({ email });
  if (user) {
    return res.json({
      message: "User already exists",
      success: false,
    });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    message: "User created successfully",
    success: true,
    user,
  });
};







export const login = async (req, res) => {
  const { email, password } = req.body;
  // Validate required fields
  if (email == "" || password == "") {
    return res.json({ message: "all feild are required" });
  }
  const user = await User.findOne({ email });

  if (!user) return res.json({ message: "User not exist", success: false });
  const validPass = await bcrypt.compare(password, user.password);

  if (!validPass)
    return res.json({ message: "Invalid password", success: false });
  //giving token to give each user a unique token
  const token=jwt.sign({userId:user._id},process.env.JWT,{
    expiresIn:'1d'
  })

  res.json({ message: `welcome ${user.name}`,token, success: true });
};
