import React from 'react';
import './Css/Footer.css';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="icons">
            <a target="_blank" rel = "noopener noreferrer" href="https://www.facebook.com">
                <img id ="facebook" src={`${process.env.PUBLIC_URL}/Pictures/facebook.png`} alt='facebook'/>
              </a>
              <a target="_blank" rel = "noopener noreferrer" href="https://www.instagram.com/">
                <img id ="instagram" src={`${process.env.PUBLIC_URL}/Pictures/instagram.png`} alt='instagram'/>
              </a> 
          </div>
        </div>
        <div className="bottom">
          <p>Wild Circus made with <span className='heart'>❤</span> by Alexis BARBIER</p>
        </div>
        
      </div>
      
    </>
  );
}

export default Footer;