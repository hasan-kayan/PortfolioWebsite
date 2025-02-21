# Authentication Service

## 📖 Overview

The Authentication Service is a Node.js-based backend service that provides authentication and authorization functionalities. It handles user authentication, token generation, and request validation.

## Project Structure

-AuthenticationService
├── Doc
│   └── Documentation.md
├── docker-compose.yml
├── Dockerfile
├── package.json
├── package-lock.json
├── README.md
├── server.js
└── src
    ├── app.js
    ├── config
    │   └── envConfig.js
    ├── controllers
    │   └── authController.js
    ├── middleware
    │   └── authMiddleware.js
    └── routes
        └── authRoutes.js

7 directories, 12 files

### 🚀 Features

    User Authentication: Handles login, logout, and registration.
    JWT Token Generation: Issues secure access tokens for authenticated users.
    Middleware for Authorization: Protects routes with authentication middleware.
    Environment-Based Configuration: Uses envConfig.js for configuration management.
    Docker Support: Can be deployed easily using Docker.

## 🛠️ Installation
### Prerequisites

    Node.js (v14+)
    npm or yarn
    Docker (optional)

Make sure these are installed on your system, you can install them from official Node website or directly by terminal according to your OS. 


## Steps   

--> Go into authentication service directory 
--> Install dependencies $ npm install
--> Test to start application --> node server.js 


## 📌 API Endpoints

| Method | Endpoint     | Description                      | Middleware         |
|--------|-------------|----------------------------------|--------------------|
| `POST` | `/auth/login`  | Authenticates user & returns JWT token | None |
| `GET`  | `/auth/verify` | Verifies JWT token validity (Protected) | `authenticateToken` |

You can test endpoints by a terminal tool or a basic browser if you want. 

## 🐳 Running with Docker
To run the service using Docker:

```sh
docker build -t authentication-service .
docker run -p 3000:3000 authentication-service


This will:
- **Build the Docker image** and tag it as `authentication-service`.
- **Run the container**, exposing port `3000`.


Here now test the container and now you are ready to deployment. 