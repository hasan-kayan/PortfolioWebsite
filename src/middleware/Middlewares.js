/**
 * Middleware module.
 * 
 * @module middleware/Middlewares
 */

 /**
    * Authentication middleware.
    * 
    * @type {Function}
    * @requires module:middleware/authMiddlewares/authMiddleware
    */
const authMiddleware = require('./authMiddlewares/authMiddleware')


module.exports = {
    authMiddleware,

}