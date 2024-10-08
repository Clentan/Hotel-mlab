import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link for navigation

const Admin = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-content">
        <h1>Admin Side</h1>
        <p>Welcome to the admin dashboard!</p>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/users">Manage Users</Link>
        </li>
        <li>
          <Link to="/admin/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Admin;
