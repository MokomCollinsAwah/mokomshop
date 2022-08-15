import React, { Fragment } from 'react';
import Nav from '../components/Nav/Nav';
import Banner from '../components/Header/Banner';
import Annoucements from '../components/Header/Annoucements';

import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <Fragment>
      <Annoucements/>
      <Nav />
      <Banner />
      <Categories />
      <Products />
      <Newsletter />
      <Footer/>
    </Fragment>
  )
}

export default Home