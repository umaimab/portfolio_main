import React from 'react'
import './Panel.css';
import Text from '../text/Text';
import Heading from '../heading/Heading';

const Panel = ({image, heading, subheading, tagline, description}) => {
    return (
      <div className='section'>
        <img src={image} alt={heading} className='section__image-padding'/>
          <div className='panel'>
            <Heading>{heading}</Heading>
            <div>
              <p className='panel__subheading'>{subheading}</p>
              <p className='panel__tag'>{tagline}</p>
              <Text>{description}</Text>
          </div>
          </div>      

      </div>
    );
  };

  export default Panel;