import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const SystemCard = ({ title, subtitle, icon, onClick, titles = [] }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      m="0 30px"
      p="20px"
      bgcolor="#118ab2" // Background color
      borderRadius="10px" // Rounded corners
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        transition: "0.3s",
        cursor: "pointer", // Makes it clickable
        "&:hover": {
          bgcolor: "#0f799e", // Darker shade on hover
        },
      }}
      onClick={onClick} // Click handler
    >
      {/* Left Side: Title & Icon */}
      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center">
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#ffffff", ml: 1 }} // White text with margin-left
          >
            {title}
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ color: "#cceeff", mt: 1 }}>
          {subtitle}
        </Typography>
      </Box>

      {/* Right Side: List of Titles */}
      <Box textAlign="right">
        {titles.map((item, index) => (
          <Typography key={index} variant="h6" sx={{ color: "#ffffff" }}>
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default SystemCard;
