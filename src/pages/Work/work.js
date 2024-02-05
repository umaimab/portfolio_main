import React from 'react';
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import './work.css';
import '../../styles/global.css';
import Panel from '../../components/panel/panel'

const Work = () => {
  const panelsData = [
    { 
      image: 'https://placehold.co/325x325', 
      heading:'STUDIO', 
      subheading:'APP PROTOTYPE', 
      tagline:'XD | InDesign', 
      description:'Created an app prototype using XD and InDesign'
    },

    { 
      image: 'https://placehold.co/325x325', 
      heading:'ALAIA', 
      subheading:'ECO-FRIENDLY BRANDING', 
      tagline:'InDesign | Photoshop', 
      description:'Creted eco-friendly branding using InDesign and Photoshop.'
    },
    { 
      image: 'https://placehold.co/325x325', 
      heading:'CDPC: CANADIAN DRUG POLICY COALITION CAMPAIGN', 
      subheading:'ADVERTISING CAMPAIGN', 
      tagline:'InDesign | Photoshop | XD', 
      description: 'This is a description'
    },
    { 
      image: 'https://placehold.co/325x325', 
      heading:'SHIFT MAGAZINE', 
      subheading:'EDITORIAL DESIGN', 
      tagline:'InDesign | Photoshop | After Effects', 
      description:'This is a description.'
    },
    { 
      image: 'https://placehold.co/325x325', 
      heading:'BODYEASE THERAPIES', 
      subheading:'BRANDING', 
      tagline:'Illustrator | InDesign', 
      description:'This is a description.'
    },
  ];

    return (
      <>
        <Navbar />
        <div className='firstPanel'>
          <div className='firstImg'></div>
          <div className='firstHeading'>
            <h1 className='firstHeadingText'>PORTFOLIO HIGHLIGHTS</h1>
            <p className='firstText'>
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
            </p>
          </div>
        </div>

        {panelsData.map((data, index) => (
          <Panel key={index} {...data} />  
        ))}

        <Footer />
      </>
      
    )
  }


export default Work