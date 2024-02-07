import React from 'react'
import './Panel.css';
import Text from '../text/Text';

const Panel = ({image, heading, subheading, tagline, description}) => {
    return (
      <div className='panel'>
        <img src={image} alt={heading} className='panelImage'/>
          <div className='panelContent'>
            <h1 className='panelHeadingText'>{heading}</h1>
            <div className='panelBody'>
              <p className='panelSubHeading'>{subheading}</p>
              <p className='panelTagline'>{tagline}</p>
              <Text>{description}</Text>
          </div>
          </div>      

      </div>
    );
  };

  export default Panel;