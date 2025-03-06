import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Header from "../../components/Header";
import { tokens } from "../../theme";
// import PieChart from "../../components/PieChart";
// import mock from "./mock"; // Importing mock data
// import SystemCard from "../../components/SystemCard";
// import BookIcon from "@mui/icons-material/Book";
const ManageWebsite = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate(); // Initialize navigation

  return (
    <Box m="20px">
      <Header title="My Services" subtitle="Use services for daily operations." />

      {/* System Cards */}
      <Box display="flex" alignItems="center">
    
      </Box>
    </Box>
  );
};

export default ManageWebsite;
