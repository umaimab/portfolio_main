import '../../styles/global.css';
import { useCallback, useState } from 'react';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { pdfjs, Document, Page } from 'react-pdf'
import Heading from '../../components/heading/Heading';
import Text from '../../components/text/Text'
import './Portfolio.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

import { PDFDocumentProxy } from 'pdfjs-dist';



pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const resizeObserverOptions = {};

const maxWidth = '900';

let PDFFile = null;


const Portfolio = () => {  
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState('Portfolio_Umaima.pdf');
  const [numPages, setNumPages] = useState();
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

    return (
      <>
        <Navbar />
        {/*FIRST SECTION: EXPRESSING CREATIVITY */}

            <div className='section__document'>
              <Document file='Portfolio_Umaima.pdf' onLoadSuccess={onDocumentLoadSuccess} >
              {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                />
              ))}
                <Page pageNumber={1} renderTextLayer={false}></Page>
              </Document>

              {/* <Document
                file="Portfolio_Umaima.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>Page {pageNumber} of {numPages}</p>
            </div> */}
          </div>
          
          {/* <embed src='Portfolio_Umaima.pdf' width="800px" height="1000px" /> */}
          
            {/* <Heading>EXPRESSING CREATIVITY <br/>IN PIXELS AND PRINT</Heading>
            <Text>Explore a design approach that embraces clean lines, innovation, and 
                simplicity, complemented by striking colors. This portfolio reflects a 
                commitment to thoughtful craftsmanship and a preference for elegance in 
                every detail. With a focus on simplicity, our designs communicate with a quiet 
                yet impactful presence. Experience a design journey where clarity and creativity
            </Text> */}

        {/* <Footer /> */}
      </>
      
    )
  }


export default Portfolio