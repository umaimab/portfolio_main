import React, { useEffect } from 'react'
import './Text.css';

const Text = ({children}) => {
  useEffect(() => {
    function checkForVisibility() {
        var headers = document.querySelectorAll(".text");
        headers.forEach(function(header) {
          if (isElementInViewport(header)) {
            header.classList.add("text-visible");
          }
        });
    }
      
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
      
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
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