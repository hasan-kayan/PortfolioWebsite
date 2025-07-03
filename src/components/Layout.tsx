import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = () => {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');      // true → gizle

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {!isAdmin && <Navbar />}

      <motion.main
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>

      {!isAdmin && <Footer />}
    </div>
  );
};

export default Layout;
