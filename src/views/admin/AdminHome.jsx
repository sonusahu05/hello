import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "./AuthContext.jsx";
import AdminNavbar from './AdminNavbar.jsx';
import BottomNavbar from './AdminBottomNavBar.jsx';
const AdminHome = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (!currentUser) {
      navigate('/admin/login'); // Redirect to admin/home if user is already logged in
    }
  }, [currentUser, navigate]);

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <div className="container mx-auto p-6">
        <p className='text-center text-4xl font-semibold text-red-500 mt-10'>Welcome to Admin Home Page</p>
        {currentUser && (
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600">You are logged in as:</p>
            <p className="text-xl font-semibold text-red-500">{currentUser.email}</p>
            <p className="mt-4 text-lg text-gray-600">You have access to the admin dashboard.</p>
          </div>
        )}
      </div>
      <BottomNavbar />
    </div>
  );
};

export default AdminHome;
