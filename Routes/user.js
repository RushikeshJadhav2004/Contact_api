import express from 'express'
import { login, register } from '../Controllers/user.js'

const router = express.Router();

// ==============================
// User Routes
// ==============================

// @route   POST /api/user/register
// @desc    Register a new user
// @access  Public

router.post("/register",register);



// ==============================
// User Routes
// ==============================

// @route   POST /api/user/register
// @desc    Register a new user
// @access  Public

router.post("/login",login)


export default router;