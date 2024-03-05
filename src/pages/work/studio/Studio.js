import React from 'react';
import Navbar from 'src/components/navbar/Navbar';
import Footer from 'src/components/footer/Footer';
import Heading from 'src/components/heading/Heading';
import Text from 'src/components/text/Text';
import './Studio.css';
import 'src/styles/global.css';

const Studio = () => {

    return (
      <>
        <Navbar />
        <div className='section'>
          <div className='section__image'></div>
          <div className='section__body'>
            <Heading>Studio</Heading>
            <Text>
            Welcome to Umaima’s Portfolio—a concise showcase of my expertise in UX/UI, <br />
            branding, posters, and marketing design. As a seasoned graphic designer, I <br />
            seamlessly blend creativity with strategic insight to deliver impactful visual <br />
            solutions. Dive into user-centric UX/UI, compelling branding, and impactful <br />
            posters.<br />
            <br />
            Explore designs that translate strategic goals into visually compelling <br />
            marketing assets. Each project reflects a commitment to precision, innovation, <br />
            and simplistic design. Explore the potential for collaboration, and let’s discuss <br />
            how my skills can contribute to your team’s success.
            </Text>
          </div>
        </div>
        
        <Footer />
      </>
      
    )
  }


export default Studio
