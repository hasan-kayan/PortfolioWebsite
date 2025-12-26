import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogsPage from './pages/BlogsPage';
import PortfolioPage from './pages/PortfolioPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import AdminPage from './pages/admin/AdminPage';
import ProjectManager from './pages/admin/WebsiteManager/ProjectManager';
import BlogManager from './pages/admin/WebsiteManager/BlogManager';
import PortfolioManager from './pages/admin/WebsiteManager/PortfolioManager';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="login" element={<LoginPage />} />
          
          {/* Admin Routes */}
          <Route path="admin" element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }>
            <Route path="projects" element={<ProjectManager />} />
            <Route path="blogs" element={<BlogManager />} />
            <Route path="portfolio" element={<PortfolioManager />} />
          </Route>
          
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;