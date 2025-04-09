import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import axios from "axios";

const AUTH_URL = import.meta.env.VITE_AUTH_URL;

const Login = () => {
  const [username, setUsername] = useState(""); // use username instead of email
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(`${AUTH_URL}login`, {
        username,
        password,
      });

      const { token } = response.data;

      if (!token) {
        throw new Error("No token received");
      }

      localStorage.setItem("token", token);

      // Redirect to protected page or home
      navigate("/dashboard");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Invalid username or password";
      setError(errorMessage);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={3} sx={{ padding: "20px", width: "350px", textAlign: "center" }}>
        <Typography variant="h5" mb={2}>Login</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button fullWidth type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
