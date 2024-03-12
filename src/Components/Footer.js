import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-5 bg-dark text-light footer-cls">
      <Container className="d-flex flex-column min-vh-95">
        <Row className="flex-grow-1">
          <Col lg={4} md={6}>
            <h5>Social Media</h5>
            <div className='d-flex align-items-center t'> 
              <a href="#" className="social-icon p-2 mb-2 text-decoration-none align-items-center"><FaInstagram size={30} /></a>
              <a href="#" className="social-icon p-2 mb-2 text-decoration-none text-center"><FaFacebook size={30} /></a>
              <a href="#" className="social-icon p-2 mb-2 text-decoration-none text-center"><FaTwitter size={30} /></a>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <h5 className='text-center'>Quick Links</h5>
            <ul className="list-unstyled text-center">
              <li><a href="#" className='text-light fs-5 text-decoration-none'>Contact Us</a></li>
              <li><a href="#" className='text-light fs-5 text-decoration-none'>About Us</a></li>
            </ul>
          </Col>
          <Col lg={4} md={12}>
            <h5 className='mb-4 text-center'>Contact Information</h5>
            <p className='fs-5 text-center'>
              Your Company Name<br />
              123 Main Street, City<br />
              Country<br />
              Email: info@example.com<br />
              Phone: +123 456 789
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
