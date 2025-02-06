// src/layouts/AdminLayout.tsx
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet
import { useAuth } from '../context/AuthContext';

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State for toggling sidebar
  const { user, signOutUser } = useAuth();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`bg-dark-blue text-white w-64 flex-shrink-0 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="p-4">
          <div className="font-bold text-xl mb-4">
            <img src="/images/logo.png" alt="CClient Logo" className="h-8" />
          </div>
          <nav>
            <ul>
              <li className="mb-2">
                <Link to="/admin/dashboard" className="block hover:text-light-blue">
                  Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/admin/invoices" className="block hover:text-light-blue">
                  Invoices
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/admin/learners" className="block hover:text-light-blue">
                  Learners
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/admin/courses" className="block hover:text-light-blue">
                  Courses
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/admin/reports" className="block hover:text-light-blue">
                  Reports
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-4 mt-auto">
          <button className="block hover:text-light-blue" onClick={signOutUser}>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <button
            className="md:hidden text-primary focus:outline-none"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <div className="font-semibold">{user?.displayName || 'Admin'}</div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet /> {/* Render nested routes here */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;