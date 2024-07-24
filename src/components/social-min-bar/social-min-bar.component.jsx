import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import "./social-min-bar.style.scss";

const SocialMinBar = () => {
  return (
    <Container fluid className="my-7 justify-content-center">
      <Row className="py-0 justify-content-center text-secondary text-center">
        <Col
          className="col-4 col-lg-2"        
        >
          <a 
            href="https://twitter.com/Desvelandorient" 
            className="lni lni-twitter-original rrss-link" 
            aria-label="Ir a la cuenta de Twitter">
            
          </a>
        </Col>

        <Col
          className="col-4 col-lg-2"       
        >
          <a
            href="https://www.facebook.com/desvelandooriente/"               
            className="lni lni-facebook-oval rrss-link" 
            aria-label="Ir a la cuenta de Twitter">
            
          </a>
        </Col>

        <Col
          className="col-4 col-lg-2"       
        >
          <a 
            href="https://www.youtube.com/channel/UCLYY8k20kZEVRfXGE2czJjg"
            className="lni lni-youtube nav-underline rrss-link" 
            aria-label="Ir a la cuenta de Twitter">
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMinBar;
