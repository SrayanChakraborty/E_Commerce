import React from 'react';
import Announcement from '../components/announcements.jsx';
import Navbar from '../components/navbar.jsx';
import Slider from '../components/slider.jsx';
import Category from '../components/category.jsx';
import Products from '../components/products.jsx';
import Newsletter from '../components/newsletter.jsx';
import Footer from '../components/footer.jsx';


function Home() {
    return (
        <div>
            <Announcement />
            <Navbar></Navbar>
            <Slider></Slider>
            <Category/>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
};

export default Home;