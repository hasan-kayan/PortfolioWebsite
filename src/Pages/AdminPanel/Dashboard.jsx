// src/Pages/Dashboard.jsx
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import { FaBlog, FaProjectDiagram, FaFilePdf } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Blog Manager",
      description: "View, edit, and publish blog posts.",
      icon: <FaBlog className="text-3xl text-blue-500" />,
      route: "/dashboard/blogs",
    },
    {
      title: "Project Manager",
      description: "Manage your projects and tech stack.",
      icon: <FaProjectDiagram className="text-3xl text-green-500" />,
      route: "/dashboard/projects",
    },
    {
      title: "Portfolio Manager",
      description: "Upload and maintain your portfolio PDF.",
      icon: <FaFilePdf className="text-3xl text-red-500" />,
      route: "/dashboard/portfolio",
    },
  ];

  return (
    <div className="text-white px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card
            key={card.title}
            className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => navigate(card.route)}
            sx={{
              backgroundColor: "#1e1e2f",
              color: "white",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            <CardContent>
              <div className="flex items-center gap-4 mb-3">
                {card.icon}
                <Typography variant="h6" fontWeight="bold">
                  {card.title}
                </Typography>
              </div>
              <Typography variant="body2" color="gray.300">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
