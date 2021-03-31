import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

function Layout({children}) {
    return (
        <div>
            <Navbar/>
            {/* children is props object that wrapped all pages inside it */}
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;