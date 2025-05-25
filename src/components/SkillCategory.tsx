import { motion } from 'framer-motion';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay?: number;
}

const SkillCategory = ({ title, skills, icon, delay = 0 }: SkillCategoryProps) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-indigo-500">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="bg-gray-700 hover:bg-indigo-900 transition-colors text-gray-200 px-3 py-1 rounded-full text-sm"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: delay * 0.1 + index * 0.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;