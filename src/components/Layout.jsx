import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './landing/Footer';

const Layout = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <main>
        <Outlet />
      </main>
      <Footer />
      <style jsx global>{`
        body {
          font-family: 'Inter', sans-serif;
          margin: 0; /* Add margin 0 to be safe */
        }
      `}</style>
    </>
  );
};

export default Layout;
