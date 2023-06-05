import React from 'react'
import './Box.css';

function Box({e,p}) {
  return (
    <>
    <div className="app__gallery-images_card flex__center">
              <img src={e} className='onhover' alt="gallery_image" />
              <p>{p}</p>
            </div>
    </>
  )
}
export default Box;
