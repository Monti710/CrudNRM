import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUser, FaSignOutAlt, FaPlus, FaSignInAlt, FaUserPlus, FaTasks } from 'react-icons/fa';

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-lg my-3 py-4 px-6 md:px-10 rounded-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to={isAuthenticated ? "/tasks" : "/"}>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">Task Manage</h1>
          </Link>
          <ul className="flex gap-x-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-x-4">
                <span className="text-white font-semibold hidden md:block">Welcome, {user.username}</span>
                <li>
                  <Link to="/profile" className="text-white hover:text-yellow-400 flex items-center gap-x-2">
                    <FaUser /> <span className="hidden md:block">Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="/add-task" className="text-white hover:text-yellow-400 flex items-center gap-x-2">
                    <FaPlus /> <span className="hidden md:block">Add Task</span>
                  </Link>
                </li>
                <li>
                  <Link to="/tasks" className="text-white hover:text-yellow-400 flex items-center gap-x-2">
                    <FaTasks /> <span className="hidden md:block">Tasks</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      logout();
                    }}
                    className="text-white hover:text-yellow-400 flex items-center gap-x-2"
                  >
                    <FaSignOutAlt /> <span className="hidden md:block">Logout</span>
                  </Link>
                </li>
              </div>
            ) : (
              <div className="flex items-center gap-x-4">
                <li>
                  <Link to="/login" className="text-white hover:text-yellow-400 flex items-center gap-x-2">
                    <FaSignInAlt /> <span className="hidden md:block">Login</span>
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-white hover:text-yellow-400 flex items-center gap-x-2">
                    <FaUserPlus /> <span className="hidden md:block">Register</span>
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
