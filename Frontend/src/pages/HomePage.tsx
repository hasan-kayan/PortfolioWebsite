import { motion } from 'framer-motion';
import { 
  Code, Database, Server, Cloud, Cpu, 
  Layers, Github, Linkedin, Mail, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillCategory from '../components/SkillCategory';
import logo from '../logo.png';

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-indigo-500">Developer</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                A passionate software engineer specializing in full-stack development
                with expertise in cloud solutions and hardware integration.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/projects" 
                  className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors"
                >
                  View Projects
                  <ArrowRight size={18} />
                </Link>
                <Link 
                  to="/portfolio" 
                  className="border border-indigo-600 text-indigo-400 hover:bg-indigo-900/20 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Download CV
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <a href="https://github.com/hasan-kayan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/hasan-kayan-37a59319b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:hasankayanformal@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
           <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600">
                {/*  ✅  Use the imported asset here */}
                <img 
                  src={logo}
                  alt="Profile logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive collection of technologies and tools I've mastered throughout my journey.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCategory
              title="Languages"
              skills={["C/C++", "Python", "Golang", "C#", "JavaScript", "Java", "Rust"]}
              icon={<Code size={24} />}
              delay={0}
            />
            
            <SkillCategory
              title="Frontend"
              skills={["ReactJs", "ElectronJs", "React Native", "ThreeJs - R3F"]}
              icon={<Layers size={24} />}
              delay={1}
            />
            
            <SkillCategory
              title="Databases"
              skills={["PostgreSQL", "MySQL", "MongoDB"]}
              icon={<Database size={24} />}
              delay={2}
            />
            
            <SkillCategory
              title="Backend & DevOps"
              skills={["ExpressJs", ".NET - .NET Core", "Kafka", "Redis", "MQTT", "gRPC"]}
              icon={<Server size={24} />}
              delay={3}
            />
            
            <SkillCategory
              title="Cloud/Infra"
              skills={["Git", "Linux", "SVN", "AWS", "CI/CD", "Google Cloud"]}
              icon={<Cloud size={24} />}
              delay={4}
            />
            
            <SkillCategory
              title="Hardware"
              skills={["PCB Design", "Altium", "FreeCAD", "LoRa WAN", "KiCAD", "GSM"]}
              icon={<Cpu size={24} />}
              delay={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Whether you need a custom solution or have an exciting project in mind,
              I'm ready to help bring your ideas to life.
            </p>
            <a 
              href="mailto:hasankayanformal@gmail.com" 
              className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-3 rounded-md font-medium inline-block transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;