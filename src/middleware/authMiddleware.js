/**
 * @file authMiddleware.js
 * @description Middleware to authenticate a JWT token from the request headers.
 * @module middleware/authMiddleware
 */

const jwt = require('jsonwebtoken');
const config = require('../config/envConfig');

/**
 * Middleware to authenticate a JWT token from the request headers.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * 
 * @returns {Object} - Returns a 403 status with a message if no token is provided.
 *                     Returns a 401 status with a message if the token is invalid or expired.
 *                     Calls the next middleware or route handler if the token is valid.
 */
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Extract token from "Bearer <token>"

    if (!token) {
        return res.status(403).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, config.secretKey);
        req.user = decoded; // Attach decoded user data to request
        next(); // Continue to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = authenticateToken;
