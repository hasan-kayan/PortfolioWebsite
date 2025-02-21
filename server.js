
/**
 * @file server.js
 * @description Entry point for the Authentication Service. This file sets up and starts the server.
 */

 /**
    * @requires ./src/app - The main application module.
    * @requires ./src/config/envConfig - The configuration module for environment variables.
    */

 /**
    * @constant {number} PORT - The port number on which the server will listen.
    * @constant {string} HOST - The host address on which the server will listen.
    */

 /**
    * Starts the server and listens on the specified port and host.
    * @callback listenCallback
    * @returns {void}
    */
const app = require('./src/app');
const config = require('./src/config/envConfig');

const PORT = config.port; // get configuration port 
const HOST = config.host; // gets configuration host 
// start application on the based port 
app.listen(PORT, HOST, () => {
    console.log(`✅ Authentication microservice is running on http://localhost:${PORT}`);
});
