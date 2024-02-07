import React from 'react'
import './Heading.css';

const Heading = ({children}) => {
    return (
        <h1 className='section__heading'>{children}</h1>
    );
  };

  export default Heading;