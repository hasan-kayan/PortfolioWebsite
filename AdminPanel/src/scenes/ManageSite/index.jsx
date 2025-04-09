import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Header from "../../components/Header";
import { tokens } from "../../theme";
import PieChart from "../../components/PieChart";
import mock from "./mock"; // Importing mock data
import SystemCard from "../../components/SystemCard";
import BookIcon from "@mui/icons-material/Book";

const ManageWebsite = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate(); // Initialize navigation

  return (
    <Box m="20px">
      <Header title="Website Manager" subtitle="Manage Website sections." />
      
      {/* Pie Chart */}
      <Box display="flex" alignItems="center">
        <Box width="400px" height="300px">
          <PieChart data={mock} />
        </Box>
      </Box>

      {/* System Cards */}
      <Box display="flex" alignItems="center">
        {/* Blogs Card - Navigates to "/blogs" */}
        <SystemCard
          title="Blogs"
          subtitle="Manage Blogs"
          onClick={() => navigate("/manage-site/blogs")} // Navigate to Blogs page
          icon={<BookIcon sx={{ color: colors.greenAccent[600], fontSize: "30px" }} />}
          // titles={["Post 1", "Post 2", "Post 3"]} // Titles appear on the right side
        />

        {/* Portfolio Card */}
        <SystemCard
          title="Portfolio"
          subtitle="Manage Portfolio"
          onClick={() => navigate("/manage-site/portfolio")} 
          icon={<BookIcon sx={{ color: colors.greenAccent[600], fontSize: "30px" }} />}
        />

        {/* Projects Card */}
        <SystemCard
          title="Projects"
          subtitle="Manage Projects"
          onClick={() => navigate("/manage-site/projects")} 
          icon={<BookIcon sx={{ color: colors.greenAccent[600], fontSize: "30px" }} />}
        />
      </Box>
    </Box>
  );
};

export default ManageWebsite;
