import React, { useEffect } from 'react'
import './Heading.css';

const Heading = ({children}) => {
    useEffect(() => {
        function checkForVisibility() {
            var headers = document.querySelectorAll(".section__heading");
            headers.forEach(function(header) {
              if (isElementInViewport(header)) {
                header.classList.add("section__heading-visible");
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
        <h1 className='section__heading'>{children}</h1>
    );
  };

  export default Heading;

  