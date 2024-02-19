import React from 'react'
import { Link } from 'react-router-dom';
import './Panel.css';
import Text from '../text/Text';
import Heading from '../heading/Heading';

const Panel = ({image, heading, link, subheading, tagline, description}) => {
    return (
      <div className='section'>
        <img src={image} alt={heading} className='section__image-padding'/>
          <div className='panel'>
            <Heading>{heading}</Heading>
            <div>
              <p className='panel__subheading'>{subheading}</p>
              <p className='panel__tag'>{tagline}</p>
              <Text>{description}</Text>
              <Link activeclass='active' to={link} spy={true} smooth={true} offset={-50} duration={500} className ='nav__desktop-menu-item'>View more</Link>
          </div>
          </div>      

      </div>
    );
  };

  export default Panel;