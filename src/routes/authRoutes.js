
/**
 * @file authRoutes.js
 * @description This file contains the routes for authentication, including login and token verification.
 * @module routes/authRoutes
 */

 /**
    * Express router to mount authentication related functions on.
    * @const
    * @namespace authRoutes
    */

 /**
    * Route serving user login.
    * @name post/login
    * @function
    * @memberof module:routes/authRoutes~authRoutes
    * @inner
    * @param {string} path - Express path
    * @param {callback} middleware - Express middleware
    * @param {callback} login - Controller function to handle login
    */

 /**
    * Route serving token verification.
    * @name get/verify
    * @function
    * @memberof module:routes/authRoutes~authRoutes
    * @inner
    * @param {string} path - Express path
    * @param {callback} middleware - Express middleware to authenticate token
    * @param {callback} verifyToken - Controller function to handle token verification
    */
const express = require('express');
const { login, verifyToken } = require('../controllers/authController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Public route - Login
router.post('/login', login);

// Protected route - Verify JWT token
router.get('/verify', authenticateToken, verifyToken);

module.exports = router;
