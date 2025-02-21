
/**
 * @file authControllers.js
 * @description Controller functions to use in routes.
 * @module config/envConfig
 */
const jwt = require('jsonwebtoken');
const config = require('../config/envConfig');

/**
 * Handles user login by validating credentials and generating a JWT token.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body.username - The username provided by the user.
 * @param {string} req.body.password - The password provided by the user.
 * @param {Object} res - The response object.
 * @returns {Object} - Returns a JSON response with a message and a JWT token if successful, or an error message if credentials are invalid.
 */
const login = (req, res) => {
    const { username, password } = req.body;
    // Check credentials from environment variables
    if (username !== config.userName || password !== config.userPassword) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ username }, config.secretKey, { expiresIn: '1h' });

    res.json({ message: "Login successful", token });
};

/**
 * Middleware function to verify the JWT token from the request headers.
 * 
 * @param {Object} req - The request object.
 * @param {Object} req.headers - The headers of the request.
 * @param {string} req.headers.authorization - The authorization header containing the token.
 * @param {Object} res - The response object.
 * 
 * @returns {Object} - Returns a JSON response with a status code and message.
 * 
 * @throws {Error} - Throws an error if the token is invalid or expired.
 */
const verifyToken = (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, config.secretKey);
        res.json({ message: "Token is valid", user: decoded });
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = { login, verifyToken };
