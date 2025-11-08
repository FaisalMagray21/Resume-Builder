import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import Login from './Login';

const Layout = () => {
  const { user, loading } = useSelector((state) => state.auth);

  // Show loader while checking authentication
  if (loading) {
    return <Loader />;
  }

  // If user not logged in, redirect to login page
  if (!user) {
    return <Login />;
  }

  // Otherwise, show main app layout
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
