import { React} from "react";
import { Link } from 'react-router-dom';

import { Row, Col, Container } from 'react-bootstrap';
import parse from "html-react-parser";

import "./hero.style.scss"


const Hero = ({ title = "", text = "", bkg = "", slug=""}) => {

  return (    
      <Container fluid className='p-0 pt-4 bg-secondary container-parent'>
            <div className='d-flex text-white h-100 row-container'>
              <div className='m-5 p-3 d-flex flex-column justify-content-center'>
                <p className='display-6'>{title}</p>
                <div className='fs-6'>{parse(text)}</div>
                <Link 
                  to={`/posts/${slug}`} 
                  className='
                    fs-6 
                    link-info 
                    link-offset-2 
                    link-offset-2-hover 
                    link-underline 
                    link-underline-opacity-0 
                    link-underline-opacity-100-hover
                  '> Leer Mas...</Link>
              </div>
              <div className='d-none d-md-block col-md-7 image-holder' style={{"backgroundImage":`url(${bkg})`, 
    }}>
               
              </div>
            </div>

          


      

              

      </Container>
      

    
  );
};

export default Hero;
