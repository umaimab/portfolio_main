import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/navbar'
import './home.css';
import '../../styles/global.css';

const Home = () => {
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
          <div className='firstImg'>First Image</div>
          <div className='firstHeading'>First Heading</div>
        </div>

        <div className='secondPanel'>
          <div className='secondHeading'>Second Heading</div>
          <div className='secondImg' id='secondImgContainer'>
            <div className='imageRow'>Image 1</div>
            <div className='imageRow'>Image 2</div>
            <div className='imageRow'>Image 3</div>
            <div className='imageRow'>Image 4</div>
            <div className='imageRow'>Image 5</div>
          </div>
        </div>

        <div className='thirdPanel'>
          <div className='thirdHeading'>Third Heading</div>
          <div className='thirdText' >
            <ul className='designList'>
              <li>Bullet 1</li>
              <li>Bullet 2</li>
              <li>Bullet 3</li>
              <li>Bullet 4</li>
              <li>Bullet 5</li>
              <li>Bullet 6</li>
            </ul>
          </div>
        </div>

        <div className='fourthPanel'>
          <div className='fourthImg' id='fourthImgContainer'>
            <div className='imageGrid'>Image 1</div>
            <div className='imageGrid'>Image 2</div>
            <div className='imageGrid'>Image 3</div>
            <div className='imageGrid'>Image 4</div>
          </div>
          <div className='fourthHeading'>FourthHeading</div>
        </div>

        <div className='fifthPanel'>
          <div className='fifthHeading'>Fifth Heading</div>
          <div className='fifthImg'>Fifth Image</div>
        </div>
      
      <div className='footer'>
        Footer
      </div>
      </div>
      
    )
  }


export default Home