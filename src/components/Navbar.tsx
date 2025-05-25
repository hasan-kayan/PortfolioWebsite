import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Code, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  /* -------- Sticky / blurred header on scroll -------- */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* -------- Close mobile menu when route changes -------- */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo / name */}
        <Link to="/" className="flex items-center gap-2">
          <Code className="text-indigo-500" size={28} />
          <span className="font-bold text-xl">Hasan Kayan</span>
        </Link>

        {/* ---------- Desktop navigation ---------- */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { to: '/', label: 'Home' },
            { to: '/projects', label: 'Projects' },
            { to: '/blogs', label: 'Blogs' },
            { to: '/portfolio', label: 'Portfolio' }
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `hover:text-indigo-400 transition-colors ${
                  isActive ? 'text-indigo-500 font-medium' : 'text-gray-300'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Admin link (shown only when logged in) */}
          {isLoggedIn && (
            <NavLink
              to="/admin"
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
            >
              <User size={16} />
              Admin
            </NavLink>
          )}
        </nav>

        {/* ---------- Mobile hamburger ---------- */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden text-gray-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ---------- Mobile slide-down menu ---------- */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 absolute top-full left-0 w-full border-t border-gray-700 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {[
              { to: '/', label: 'Home' },
              { to: '/projects', label: 'Projects' },
              { to: '/blogs', label: 'Blogs' },
              { to: '/portfolio', label: 'Portfolio' }
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `py-2 hover:text-indigo-400 transition-colors ${
                    isActive ? 'text-indigo-500 font-medium' : 'text-gray-300'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Admin link (only when logged in) */}
            {isLoggedIn && (
              <NavLink
                to="/admin"
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md flex items-center gap-2 transition-colors w-full justify-center"
              >
                <User size={16} />
                Admin
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
