import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import { scrollToSection } from '../../helper';

import images from '../../constants/images';

const Navbar = () => {
   const [togglemenu,settogglemenu]= useState(false);
   return(
      <nav className="app_navbar">
         <div className="applogo">
            <img src={images.gericht} alt="" />
         </div>
         <ul className="applink">
           <span className="p__opensans" onClick={() => scrollToSection("home")}>Home</span>
           <span className="p__opensans" onClick={() => scrollToSection("about")}>About</span>
           <span className="p__opensans" onClick={() => scrollToSection("menu")}>Menu</span>
           <span className="p__opensans" onClick={() => scrollToSection("contact")}>Contact</span>
           <span className="p__opensans" onClick={() => scrollToSection("awards")}>Awards</span>
         </ul>
         <div className="app__navbar-login">
            <a href="#login" className="p__opensans">Log In / Registration</a>
            <div />
            <a href="/" className="p__opensans">Book Table</a>
            </div>
            <div className="app__navbar-smallscreen">
               <GiHamburgerMenu color="#fff" fontsize={27} onClick={()=>settogglemenu(true)}/>
               {/* //when ever toggglemenu is true it will show this */}
               {togglemenu &&(
                  <div className="app__navbar-smallscreen_overlay flex slide-bottom">
                     <MdOutlineRestaurantMenu fontsize={27} className="overlay__close" onClick={()=>settogglemenu(false)}/>
                     <div className="cntr">
                        <ul className="appsmallscreenlink">
                           <li className="p__opensans">Home</li>
                           <li className="p__opensans">About</li>
                           <li className="p__opensans">Menu</li>
                           <li className="p__opensans">Contact</li>
                           <li className="p__opensans">Award</li>
                        </ul>

                     </div>
                  </div>
               )};

            </div>
      </nav>
   )
};

export default Navbar;
