import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NavItem = () => {
  const [menuToggle,setMenuToggle] = useState(false);
  const [socialToggle,setSocialToggle] = useState(false);
  const [headerFixed,setHeaderFixed] = useState(false);
  
  // addevent listener
  window.addEventListener("scroll", () => {
  
      if(window.scrollY > 200){
         setHeaderFixed(true);
      }
       else{
         setHeaderFixed(false);
      }
  });
  
  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
      {/* header top start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
         <div className="container">
           <div className='header-top-area'>
            <Link to="/signup" className='lab-btn me-3'><span>Create accout</span></Link>
            <Link to="/log in">Log In</Link>
           </div>
         </div>
      </div>

      {/* header botton */  }
      <div className="header-botton">
        <div className='container'>
          <div className='header-wrapper'>
            {/*logo*/}
            <div className='logo-search-acte'>
              <div className='logo'>
                <Link to={"/"}>
                  <img src="src\assets\images\logo\logonovo2.png" alt="" />
                </Link>
              </div>
            </div>

            {/* Menu area */}
            <div className='menu-area'>
                <div className='menu'>
                  <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>  
                     <li>
                      <Link to="/">Home</Link>
                      </li>
                     <li>
                      <Link to="/shop">Shop</Link>
                      </li>
                     <li>
                      <Link to="/about">About</Link>
                      </li>
                     <li>
                      <Link to="/contact">Contact</Link>
                      </li>
                  </ul>
                  
                </div>
                {/*Sign in & Log in*/}
                 <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                  Create Account
                  </Link>
                 <Link to="/login" className="d-none d-md-block">
                  Log in
                  </Link>

                  {/* Menu toggle*/}
                <div onClick={() => setMenuToggle (!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>

                {/* social toggler */}
                <div className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
                >
                <i className="icofont-info-square"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavItem