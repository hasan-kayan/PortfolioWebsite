import { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, FileText, FolderOpen, LogOut, ChevronDown, ChevronUp, LayoutDashboard } from 'lucide-react';

const AdminPage = () => {
  const navigate = useNavigate();
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    document.title = 'Admin Dashboard | Hasan Kayan';
    return () => {
      document.title = 'Hasan Kayan - Developer Portfolio';
    };
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex flex-col space-y-2">
                
                {/* Portfolio Website Manager Dropdown */}
                <button
                  onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                  className="flex items-center justify-between gap-3 p-3 rounded-lg hover:bg-gray-700 text-gray-300 transition-colors w-full"
                >
                  <span className="flex items-center gap-3">
                    <LayoutDashboard size={20} />
                    <span>Portfolio Website Manager</span>
                  </span>
                  {isPortfolioOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {/* Dropdown Items */}
                {isPortfolioOpen && (
                  <div className="pl-6 flex flex-col space-y-2">
                    <NavLink 
                      to="/admin/projects"
                      className={({ isActive }) => 
                        `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-indigo-900/50 text-indigo-300' 
                            : 'hover:bg-gray-700 text-gray-300'
                        }`
                      }
                    >
                      <FolderOpen size={18} />
                      <span>Projects</span>
                    </NavLink>
                    
                    <NavLink 
                      to="/admin/blogs"
                      className={({ isActive }) => 
                        `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-indigo-900/50 text-indigo-300' 
                            : 'hover:bg-gray-700 text-gray-300'
                        }`
                      }
                    >
                      <FileText size={18} />
                      <span>Blogs</span>
                    </NavLink>
                    
                    <NavLink 
                      to="/admin/portfolio"
                      className={({ isActive }) => 
                        `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-indigo-900/50 text-indigo-300' 
                            : 'hover:bg-gray-700 text-gray-300'
                        }`
                      }
                    >
                      <Cpu size={18} />
                      <span>Portfolio</span>
                    </NavLink>
                  </div>
                )}

                {/* Logout */}
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-3 p-3 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors mt-4"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Content Area */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <Outlet />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

