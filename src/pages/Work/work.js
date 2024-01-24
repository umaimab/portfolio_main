import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import './work.css';
import '../../styles/global.css';

const Work = () => {
  useEffect(() => {
    const container = document.getElementById('secondImgContainer');
    
    const handleWheelScroll = (event) => {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    };

    container.addEventListener('wheel', handleWheelScroll);

    return () => {
      container.removeEventListener('wheel', handleWheelScroll);
    };
  }, []);
  
    return (
      <div className='firstContainer'>
        <Navbar />
        <div className='firstPanel'>
          <div className='firstImg'></div>
          <div className='firstHeading'>
            <h1 className='firstHeadingText'>EXPRESSING CREATIVITY <br/>IN PIXELS AND PRINT</h1>
            <p className='firstText'>Explore a design approach that embraces clean lines, innovation, and <br />
                simplicity, complemented by striking colors. This portfolio reflects a <br />
                commitment to thoughtful craftsmanship and a preference for elegance in <br />
                every detail. With a focus on simplicity, our designs communicate with a quiet <br />
                yet impactful presence. Experience a design journey where clarity and creativity
            </p>
          </div>
        </div>

        <div className='secondPanel'>
          <div className='secondHeading'>
          <h1 className='secondHeadingText'>WORK</h1>
          <p className='secondText'>Explore my portfolio — a blend of <br />
            freelance projects and personal <br />
            creations. The visual stories highlight <br />
            flexibility, demonstrating experience <br />
            across different realms of graphic <br />
            design. Each piece reflects clean <br />
            design principles and bold choices.
          </p>
          </div>
          <div className='secondImg' id='secondImgContainer'>
            <div className='imageRow'></div>
            <div className='imageRow'></div>
            <div className='imageRow'></div>
            <div className='imageRow'></div>
            <div className='imageRow'></div>
          </div>
        </div>

        <div className='thirdPanel'>
          <div className='thirdHeading'>
            <h1 className='thirdHeadingText'>DESIGN PROCESS</h1>
          </div>
          <div className='thirdText' >
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

        <div className='fourthPanel'>
          <div className='fourthImg' id='fourthImgContainer'>
            <div className='imageGrid'></div>
            <div className='imageGrid'></div>
            <div className='imageGrid'></div>
            <div className='imageGrid'></div>
          </div>
          <div className='fourthHeading'>
          <h1 className='fourthHeadingText'>SERVICES</h1>
          <p className='fourthText'>Welcome to my services! I’m passionate about crafting impactful graphic designs
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
          </p>
          </div>
        </div>

        <div className='fifthPanel'>
          <div className='fifthHeading'>
            <h1 className='fifthHeadingText'>ABOUT</h1>
            <p className='fifthText'>Art, for me, isn’t confined to canvases; it’s a pervasive force, inspiring everything <br />
            from the mundane to the extraordinary. Through formal education and personal <br />
            exploration, I’ve honed my skills to transform ideas into visual masterpieces. Join <br />
            me on a professional voyage where creativity meets purpose, and art serves as <br />
            the guiding force in every endeavor. Let’s bring imagination to life and discover
            </p>
          </div>
          <div className='fifthImg'></div>
        </div>
        <Footer />
      </div>
      
    )
  }


export default Work