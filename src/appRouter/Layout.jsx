import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="box p-0 w-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
