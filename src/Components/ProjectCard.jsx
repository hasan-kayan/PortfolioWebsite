import { Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="perspective-1000"
    >
      <Card className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-800 text-white">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <CardContent className="p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-300 text-sm mt-2">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
