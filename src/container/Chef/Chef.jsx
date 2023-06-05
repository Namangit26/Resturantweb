import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className=" chef app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Experience luxury and comfort like never before: your home away from home.</p>
        </div>
        <p className="p__opensans"> As a chef, I believe in using fresh and high-quality ingredients to create delicious and nutritious meals. I am dedicated to constantly improving my culinary skills and experimenting with new flavors and techniques. I also believe in the importance of sustainability and responsible sourcing of ingredients, as well as minimizing food waste. Ultimately, my goal is to provide an exceptional dining experience that delights the senses and brings people together around the table. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef</p>
        <p className="naman">Naman Singh</p>
        <p className="p__opensans">Founder</p>
        
      </div>
    </div>
  </div>
);

export default Chef;