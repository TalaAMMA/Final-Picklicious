import React, { useState } from "react";



INITIAL_STATE = {
  products: "products",
  shoppingCart: "shoppingCart",
};

export const LogIn = ({ setIsLogged }) => {
  const handleButtonClick = () => {
    setpopUp(true);
  

  };
  const closePopUp = () => {
    setpopUp(false);
  };

  const logout = () => {
    setIsLogged(false);
    window.localStorage.clear();
  };

  const [popUp, setpopUp] = useState(false);

  return (
    <div className="Account">
      <div className="accountHeader">
        <div className="loggedIn">
          <a href="index.html" className="logo">
            <img src="../images/logo.jpg" alt="Logo for Pickilicious" />
          </a>

          <button type="button" className="logOutBtn" onClick={logout}>
            sign-out
          </button>
        </div>
        <p className="welcome">`Welcome ! Successfully Logged In`</p>
        {popUp && (
          <div className="popUpAccount">
            <button type="button" onClick={closePopUp}>
              {" "}
              <img src="../images/cross.png" alt="cross" className="closePopUpAccount" />
            </button>
            <p>
              A thank you message from us to you! On behalf of the Picklicious
              family, we wanted to say thank you. We’re so lucky to have
              customers like you! Thank you for your support! Thank you for your
              confidence in us, we value your trust and sincerely appreciate
              you! Much love, the Picklicious family !
            </p>
          </div>
        )}
      </div>
      <div className="mainAccount">
        <div className="titlesAccount">
          <a href="About.html">Our Story</a>

          <a href="products.html"> Take a look at our Products</a>

          <a href="About.html#sectionVideos">News Coverage</a>
          <a href="mailto:picklicious.food@gmail.com" >Contact Us</a>
          <video
            src="../videos/loginVideo.mp4"
            controls="controls"
            autoPlay={false}
          />
           <div className="letter-image" onClick={handleButtonClick}>
        <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
            <div className="letter-border"></div>
            <div className="letter-title"></div>
            <div className="letter-context"></div>
            <div className="letter-stamp"></div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
        </div>
       
      </div>
        </div>
        
       
      </div>
      
    </div>
  );
};
