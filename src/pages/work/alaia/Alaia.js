import React from 'react';
import Navbar from 'src/components/navbar/Navbar'
import Footer from 'src/components/footer/Footer'
import Heading from 'src/components/heading/Heading';
import Text from 'src/components/text/Text';
import './Alaia.css';
import 'src/styles/global.css';

const Studio = () => {

    return (
      <>
        <Navbar />
        <div className='section'>
          <div className='section__body'>
            <Heading>ALAIA</Heading>
            <Text>
              PROJECT OVERVIEW <br /> <br />
              Our challenge was to design and develop an environmentally conscious 
              brand, creating a product that is either reusable or recyclable. Additionally, we 
              formulated a strategic marketing plan for a dual launch online and in 
              Vancouver, demanding a blend of innovative design and eco-friendly.
              <br />
            </Text>
          </div>
          <div className='section__image'></div>
        </div>

        <div className='section'>
          <div className='section__body'></div>
          <div className='section__body'>
            <Text>
              CHALLENGE + SOLUTION <br /> <br />
              The Alaia package design project presented the challenge of creating an 
              eco-friendly and eye-catching solution distinct from current products in 
              the market. This involved using innovative materials for visual appeal while 
              ensuring environmental sustainability. Simultaneously, crafting an effective 
              marketing plan for the launch of the product added complexity.  
              <br /> <br />
              Despite these challenges, meticulous ideation resulted in a unique, eco-
              friendly design. The marketing plan highlighted distinctive features, 
              generating anticipation and successfully addressing design and 
              promotional aspects.
            </Text>
          </div>
        </div>

        <div className='section'>
          <div className='section__body'>
            <Text>
              THE DESIGN PROCESS <br /> <br />
              No. 01 Define the Purpose and Goals <br /> <br />
              No. 02 Research and Analysis <br /> <br />
              No. 03 Conceptualization <br /> <br />
              No. 04 Brand Integration <br /> <br />
              No. 05 Prototyping <br /> <br />
              No. 06 Marketing Plan <br /> <br />
              No. 07 Launch and Promote
            </Text>
          </div>
          <div className='section__services-image-container'>
            <div className='section__services-image-grid'></div>
            <div className='section__services-image-grid'></div>
            <div className='section__services-image-grid'></div>
            <div className='section__services-image-grid'></div>
          </div>
        </div>

        <div className='section'>
          <div className='section__image'></div>
          <div className='section__body'>
            <Heading></Heading>
            <Text>
            Alaïa is committed to delivering top-quality, 100% sustainable soy candles 
            that double as reusable planters. Our mission revolves around promoting 
            sustainability by educating consumers about the benefits of choosing long-
            lasting and renewable products. We aspire to shift away from the prevailing 
            single-use culture, encouraging a more sustainable and mindful approach to 
            consumption.
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
              MARKETING <br /> <br />
              Alaïa is committed to delivering top-quality, 100% sustainable soy candles 
              that double as reusable planters. Our mission revolves around promoting 
              sustainability by educating consumers about the benefits of choosing long-
              lasting and renewable products. We aspire to shift away from the prevailing 
              single-use culture, encouraging a more sustainable and mindful approach to 
              consumption.
            </Text>
          </div>
          <div className='section__image'></div>
        </div>

        <div className='section'>
        <div className='section__image'></div>
          <div className='section__body'>
            <Heading></Heading>
            <Text>
              WEBSITE <br /> <br />
              Alongside, the product launch, Alaïa required the development of a website 
              that effectively conveyed the brand’s message and aesthetic. This online 
              platform serves as an accessible hub for consumers to explore the ethos 
              behind Alaïa’s sustainable soy candles, offering easy access to the product. 
              Launched concurrently with the product, the website not only enhances user 
              experience but also serves as a strategic tool to expand outreach, building a 
              digital presence that resonates with Alaïa’s values and design aesthetics. 
              <br /> <br />
              Alaïa’s website communicates the brand’s message and aesthetic, and also 
              promotes the new store location. This seamless connection between the 
              online platform and physical store enhances the overall omni-channel 
              experience. Through enticing visuals and product details, the website serves as 
              a gateway, encouraging customers to transition effortlessly from the digital 
              space to an immersive in-store encounter.
            </Text>
          </div>

        </div>

        <Footer />
      </>
      
    )
  }


export default Studio
