import React, { useEffect } from 'react'
import './Text.css';

const Text = ({children}) => {
  useEffect(() => {
    function checkForVisibility() {
        var headers = document.querySelectorAll(".text, .section__design-text");
        headers.forEach(function(header) {
          if (isElementInViewport(header)) {
            header.classList.add("text-visible");
          }
        });
    }
      
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
      
        /* Element is in viewport if its any point below 80% of the screen */
        return rect.top <= window.innerHeight * 0.8;
    }
      
    checkForVisibility();

    window.addEventListener("DOMContentLoaded", checkForVisibility, false);
    window.addEventListener("load", checkForVisibility, false);
    window.addEventListener("scroll", checkForVisibility, false);

    return () => {
    window.removeEventListener("DOMContentLoaded", checkForVisibility, false);
    window.removeEventListener("load", checkForVisibility, false);
    window.removeEventListener("scroll", checkForVisibility, false);
    };

  }, []);
  
    return (
      <div className='text'>{children}</div>
    );

};

  export default Text;