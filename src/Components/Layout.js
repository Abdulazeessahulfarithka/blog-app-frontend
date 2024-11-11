import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
   <>
    <div className=''>
    <div className=" min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="p-6 md:p-8 lg:p-12 bg-white shadow-sm" >
        {children}
      </main>
      <Footer />
    </div>
    </div>
   </>
  );
};

export default Layout;
