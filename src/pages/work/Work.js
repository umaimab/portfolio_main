import React from 'react';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Heading from '../../components/heading/Heading';
import Text from '../../components/text/Text';
import './Work.css';
import '../../styles/global.css';
import Panel from '../../components/panel/Panel';

const Work = () => {
  const panelsData = [
    { 
      image:'https://placehold.co/325x325',
      heading:'STUDIO',
      link:'/work/studio',
      subheading:'APP PROTOTYPE',
      tagline:'XD | InDesign',
      description:'Created an app prototype using XD and InDesign'
    },

    { 
      image:'https://placehold.co/325x325',
      heading:'ALAIA',
      subheading:'ECO-FRIENDLY BRANDING',
      tagline:'InDesign | Photoshop',
      description:'Creted eco-friendly branding using InDesign and Photoshop.'
    },
    { 
      image:'https://placehold.co/325x325',
      heading:'CDPC: CANADIAN DRUG POLICY COALITION CAMPAIGN',
      subheading:'ADVERTISING CAMPAIGN',
      tagline:'InDesign | Photoshop | XD',
      description: 'This is a description'
    },
    { 
      image:'https://placehold.co/325x325',
      heading:'SHIFT MAGAZINE',
      subheading:'EDITORIAL DESIGN',
      tagline:'InDesign | Photoshop | After Effects',
      description:'This is a description.'
    },
    { 
      image:'https://placehold.co/325x325',
      heading:'BODYEASE THERAPIES',
      subheading:'BRANDING',
      tagline:'Illustrator | InDesign',
      description:'This is a description.'
    },
  ];

    return (
      <>
        <Navbar />
        <div className='section'>
          <div className='section__image'></div>
          <div className='section__body'>
            <Heading>PORTFOLIO HIGHLIGHTS</Heading>
            <Text className='firstText'>
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

        {panelsData.map((data, index) => (
          <Panel key={index} {...data} />  
        ))}

        <Footer />
      </>
      
    )
  }


export default Work