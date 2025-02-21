

/**
 * @file envConfig.js
 * @description Configuration file for the authentication service.
 * This file contains the configuration settings for the authentication service,
 * including environment variables for username, password, secret key, port, and host.
 * 
 * @requires axios
 * @requires dotenv/config
 */

 /**
  * Configuration object for the authentication service.
  * 
  * @typedef {Object} Config
  * @property {string} userName - The username for authentication, default is "defaultUser".
  * @property {string} userPassword - The password for authentication, default is "defaultPassword".
  * @property {string} secretKey - The secret key used for encryption, default is "your_default_secret_key".
  * @property {number} port - The port number on which the service runs, default is 3123.
  * @property {string} host - Host IP address to make containers use external network or internal saved networks.
  */
const axios = require('axios');


require('dotenv').config();

/**
 * Configuration object for the authentication service.
 * 
 * @property {string} userName - The username for authentication, default is "defaultUser".
 * @property {string} userPassword - The password for authentication, default is "defaultPassword".
 * @property {string} secretKey - The secret key used for encryption, default is "your_default_secret_key".
 * @property {number} port - The port number on which the service runs, default is 3000.
 * @property {string} host - Host IP address to make containers use external network or internal saved networks
 */


const config = {
  userName: process.env.USER_NAME || "defaultUser",
  userPassword: process.env.USER_PASSWORD || "defaultPassword",
  secretKey: process.env.SECRET_KEY || "your_default_secret_key",
  port: process.env.PORT || 3123,
  host: process.env.HOST
};

module.exports = config;
