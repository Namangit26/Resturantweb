import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G_overlay" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Welcome to our hotel - a place where luxury meets comfort and hospitality. Our hotel is dedicated to providing our guests with an unforgettable experience that surpasses their expectations.
            We pride ourselves on offering exceptional service to every guest, whether it's ensuring that our rooms are immaculately clean and well-stocked or providing personalized recommendations for local attractions and dining options. Our staff is friendly, professional, and always ready to assist with any need or request.</p>
          <button type="button" className="custom__button">Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Our hotel has a rich history that dates back to the early 1900s. Originally built as a small guesthouse for travelers passing through the area, it quickly gained a reputation for its warm hospitality and comfortable accommodations.
            Over the years, the property underwent several renovations and expansions, growing into the luxurious hotel you see today. Despite these changes, we have remained committed to preserving the historic charm and character that make our hotel unique.</p>
          <button type="button" className="custom__button">Know More</button>
        </div>
      </div>
    </div>
  )
};

export default AboutUs;
