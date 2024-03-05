import React from 'react';
import Navbar from 'src/components/navbar/Navbar'
import Footer from 'src/components/footer/Footer'
import Heading from 'src/components/heading/Heading';
import Text from 'src/components/text/Text';
import './Juk-Records.css';
import 'src/styles/global.css';

const JUKRecords = () => {

    return (
      <>
        <Navbar />
        <div className='section'>
          <div className='section__image'></div>
          <div className='section__body'>
            <Heading>JUK Records</Heading>
            <Text>
              PROJECT OVERVIEW <br /> <br />
              The task at hand involved creating a fully operational prototype for a mobile 
              application. Extensive market research, conducted through surveys and user 
              interviews, served as the foundation for the app’s development. The objective 
              was to design a functional and user-centric application that not only met the 
              client’s requirements but also aligned seamlessly with the preferences and 
              needs identified during the comprehensive market analysis.
              <br />
            </Text>
          </div>
        </div>

        <div className='section'>
          <div className='section__body'>
            <Heading></Heading>
            <Text>
              CHALLENGE + SOLUTION <br /> <br />
              The biggest challenge was to come up with an app that could thrive and was 
              relevant in the real world. Overcoming challenges like staying relevant in the 
              ever-evolving tech scene and addressing common app design issues. 
              <br /> <br />
              It is an app for creative individuals to inspire, showcase and connect with other 
              creators. It will help narrow their job search and be able to apply directly through 
              the app. Users can create more than one resume making it feasible to apply to 
              different jobs with different requirements
            </Text>
          </div>
          <div className='section__body'></div>
        </div>

        <div className='section'>
          <div className='section__body'>
            <Heading></Heading>
            <Text>
              THE DESIGN PROCESS <br /> <br />
              No. 01 Define the Purpose and Goals <br /> <br />
              No. 02 Domain Research <br /> <br />
              No. 03 Site Map <br /> <br />
              No. 04 User Flow and Customer Journey <br /> <br />
              No. 05 Branding <br /> <br />
              No. 06 Mid-Fidelity Wireframe <br /> <br />
              No. 07 High-Fidelity Wireframe <br /> <br />
              No. 08 User Testing <br /> <br />
              No. 09 Finalization 
            </Text>
          </div>
          <div className='section__image'></div>
        </div>

        <div className='section'>
          <div className='section__image'></div>
          <div className='section__body'>
            <Heading></Heading>
            <Text>
              In the initial phase, I conducted thorough research through surveys 
              and online sources, consolidating the gathered information into a 
              comprehensive report. Subsequently, I defined user personas, 
              identified key features, and mapped out the user flow in the second 
              phase.  
              <br /> <br />
              Following this, I translated the conceptual framework into a paper 
              wireframe, which was later digitized using XD. The wireframes 
              underwent three rounds of refinement, with each iteration 
              incorporating user testing sessions for constructive feedback.  
              <br /> <br />
              This iterative process ensured that the final app design aligned with 
              user expectations and effectively addressed any identified concerns 
              during testing.
            </Text>
          </div>
        </div>

        <div className='section'>
          <div className='section__image'></div>
          <div className='section__image'></div>
        </div>

        <div className='section'>
          <div className='section__body'>
            <Heading></Heading>
            <Text>
              Some text
            </Text>
          </div>
          <div className='section__image'></div>
        </div>

        <div className='section'>
          <div className='section__image'></div>
          <div className='section__image'></div>
        </div>


        <Footer />
      </>
      
    )
  }


export default JUKRecords
