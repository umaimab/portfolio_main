import React, { useEffect } from 'react';
import '../../styles/global.css';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Heading from '../../components/heading/Heading';
import Text from '../../components/text/Text'
import './Home.css';

const Home = () => {
  useEffect(() => {
    const container = document.getElementsByClassName('section__image-works--scroll');
    
    const handleWheelScroll = (event) => {
      event.preventDefault();
      container[0].scrollLeft += event.deltaY;
    };

    container[0].addEventListener('wheel', handleWheelScroll);

    return () => {
      container[0].removeEventListener('wheel', handleWheelScroll);
    };
  }, []);
  
    return (
      <>
        <Navbar />
        {/*FIRST SECTION: EXPRESSING CREATIVITY */}
        <div className='section'>
          <div className='section__image' />
          <div className='section__body'>
            <Heading>EXPRESSING CREATIVITY <br/>IN PIXELS AND PRINT</Heading>
            <Text>Explore a design approach that embraces clean lines, innovation, and 
                simplicity, complemented by striking colors. This portfolio reflects a 
                commitment to thoughtful craftsmanship and a preference for elegance in 
                every detail. With a focus on simplicity, our designs communicate with a quiet 
                yet impactful presence. Experience a design journey where clarity and creativity
            </Text>
          </div>
        </div>

        {/*SECOND SECTION: WORK */}
        <div className='section'>
          <div className='section__body'>
          <Heading>WORK</Heading>
          <Text>Explore my portfolio — a blend of freelance projects and personal
            creations. The visual stories highlight flexibility, demonstrating experience
            across different realms of graphic design. Each piece reflects clean
            design principles and bold choices.
          </Text>
          </div>
          <div className='section__image-works section__image-works--scroll'>
            <div className='section__image-row'></div>
            <div className='section__image-row'></div>
            <div className='section__image-row'></div>
            <div className='section__image-row'></div>
            <div className='section__image-row'></div>
          </div>
        </div>

        {/*THIRD SECTION: DESIGN PROCESS */}
        <div className='section'>
          <div className='section__design-body'>
            <h1 className='section__design-heading'>DESIGN PROCESS</h1>
          </div>
          <div className='section__design-text' >
            <ul>
              <li>
                <b>Inspiration & Research:</b> I begin by immersing myself in the project’s context,
                drawing inspiration from various sources and conducting thorough research to
                inform the design direction.
              </li>
              <li>
                <b>Conceptualization:</b> Ideas take shape through brainstorming and sketching. I
                explore multiple concepts, refining them until the most compelling and effective
                solution emerges.
              </li>
              <li>
                <b>Design Development:</b> The chosen concept is brought to life digitally. Here,
                attention is paid to typography, color schemes, and visual elements, ensuring a
                harmonious and engaging design.
              </li>
              <li>
                <b>Feedback & Iteration:</b> Collaboration is key. I seek feedback, making necessary
                adjustments to refine the design further. This iterative process ensures the final
                product meets both the project’s objectives and aesthetic standards.
              </li>
              <li>
                <b>Finalization:</b> Once the design aligns with the vision and goals, it’s polished and
                finalized. High attention to detail is maintained to deliver a cohesive and visually
                striking end product.
              </li>
            </ul>
          </div>
        </div>

        {/*FOURTH SECTION: SERVICES */}
        <div className='section'>
          <div className='section__services-image-container'>
            <div className='section__services-image-grid'></div>
            <div className='section__services-image-grid'></div>
            <div className='section__services-image-grid'></div>
            <div className='section__services-image-grid'></div>
          </div>
          <div className='section__body'>
          <Heading>SERVICES</Heading>
          <Text>Welcome to my services! I’m passionate about crafting impactful graphic designs
          and user-focused olutions. Explore how I bring creativity and purpose to every
          project, tailoring designs to leave a lasting impact. Let’s collaborate and bring
          <br />
          <br />
          <b>Web Design (UI/UX):</b> Creating visually stunning and user-friendly websites for a
          seamless online presence.
          <br />
          <br />
          <b>Branding:</b> Developing comprehensive brands including packages, logos, color
          schemes, and visual guidelines.
          <br />
          <br />
          <b>Illustration:</b> Bringing concepts to life with vibrant visuals
          <br />
          <br />
          <b>Print Collateral:</b> Designing print materials such as brochures, business cards, and
          posters for effective offline marketing.
          <br />
          <br />
          <b>Social Media Graphics:</b> Crafting engaging visuals for social media platforms to
          boost online presence.
          </Text>
          </div>
        </div>

        {/*FIFTH SECTION: ABOUT */}
        <div className='section'>
          <div className='section__body'>
            <Heading>ABOUT</Heading>
            <Text>Art, for me, isn’t confined to canvases; it’s a pervasive force, inspiring everything 
            from the mundane to the extraordinary. Through formal education and personal 
            exploration, I’ve honed my skills to transform ideas into visual masterpieces. Join 
            me on a professional voyage where creativity meets purpose, and art serves as 
            the guiding force in every endeavor. Let’s bring imagination to life and discover
            </Text>
          </div>
          <div className='section__image'></div>
        </div>
        <Footer />
      </>
      
    )
  }


export default Home