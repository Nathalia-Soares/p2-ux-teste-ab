import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import Menu from './components/menu/menu';

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Banner />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
