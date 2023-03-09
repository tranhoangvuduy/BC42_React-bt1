import React from 'react'
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import ProductsList from './ProductsList'

function Shop() {
  return (
    <div>
        <Header/>
        <Banner/>
        <ProductsList/>
        <Footer/>
    </div>
  );
}

export default Shop