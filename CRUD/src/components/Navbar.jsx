import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUser, FaSignOutAlt, FaPlus, FaSignInAlt, FaUserPlus, FaTasks } from 'react-icons/fa';

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-lg my-3 flex justify-between items-center py-4 px-10 rounded-lg">
      <Link to="/">
        <h1 className="text-3xl font-extrabold text-white">Task Manage</h1>
      </Link>
      <ul className="flex gap-x-4">
        {isAuthenticated ? (
          <div className="flex items-center gap-x-4">
            <span className="text-white font-semibold">Welcome, {user.username}</span>
            <li>
              <Link to="/profile" className="text-white hover:text-yellow-400 flex items-center gap-x-2">
                <FaUser /> Profile
              </Link>
            </li>
            <li>
              <Link to="/add-task" className="text-white hover:text-yellow-400 flex items-center gap-x-2">
                <FaPlus /> Add Task
              </Link>
            </li>
            <li>
              <Link to="/Tasks" className="text-white hover:text-yellow-400 flex items-center gap-x-2">
                <FaTasks /> Tasks
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => { logout() }} className="text-white hover:text-yellow-400 flex items-center gap-x-2">
                <FaSignOutAlt /> Logout
              </Link>
            </li>
          </div>
        ) : (
          <div className="flex items-center gap-x-4">
            <li>
              <Link to="/login" className="text-white hover:text-yellow-400 flex items-center gap-x-2">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="text-white hover:text-yellow-400 flex items-center gap-x-2">
                <FaUserPlus /> Register
              </Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
