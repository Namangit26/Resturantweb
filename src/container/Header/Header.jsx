import React from 'react';
import { SubHeading } from '../../components';
import './Header.css';
import { images } from '../../constants'

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>we believe that the key to fine dining lies in attention to detail, exceptional ingredients, and impeccable service. Our world-class chefs are passionate about creating culinary masterpieces that delight the senses and leave a lasting impression on our guests.
        We source only the freshest and highest quality ingredients, using locally grown produce, sustainable seafood, and premium meats. Every dish is carefully crafted with precision and creativity, resulting in a menu that showcases the very best of local and international cuisine.
        Our dining experiences are designed to be more than just a meal - they are an immersive sensory journey that indulges all of your senses. </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
