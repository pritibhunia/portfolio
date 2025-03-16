import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Navbar />
      <main className="container mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
