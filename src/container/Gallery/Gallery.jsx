import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';
import Box from './box/Box';

const Gallery = () => {
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit  sce lerisque egestas mu.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
      <br />
      <br />
      <div className="app__gallery-images">
        <Box e={images.gallery01} p="Custured "/>
        <Box e={images.gallery02}  p="Omlet "/>
        <Box e={images.gallery03}  p="Drinks "/>
        <Box e={images.gallery04}  p="Noodele with Omlet "/>
      
        
      </div>
      
    </div>
  );
};

export default Gallery;