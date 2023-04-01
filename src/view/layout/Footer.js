import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start">
            <Container className="p-4">
                <Row>
                    <Col lg={6} md={12} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">WATCHIYA HUMAN</h5>
                        <p>
                            We are a watch shop that offers a wide range of stylish and affordable timepieces for men and women. Our team is passionate about watches and committed to providing our customers with excellent service.
                        </p>
                    </Col>
                    <Col lg={3} md={6} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Address</h5>
                        <h6>Mota Varacha,Sudama Chowk</h6>
                        <h6>Surat,Gujrat, INDIA 395010</h6>
                        <h6>Phone: +918238800920</h6>
                        <h6>Email: info@watchiyahuman.com</h6>
                    </Col>
                    <Col lg={3} md={6} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-dark text-yellow-hover">Home</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark text-yellow-hover">Contact</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark text-yellow-hover">About</a>
                            </li>
                            {/* <li>
                                <a href="#!" className="text-dark">Link 4</a>
                            </li> */}
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Watchiya Human. All rights reserved.
            </div>
        </footer>


        // <footer className="bg-light text-center text-lg-start">
        //     <Container>
        //         <Row className='justify-content-center align-items-center pt-5'>
        //             <Col md={4}>
        //                 <div><h5>Navigation</h5></div>
        //                 <ul className="list-unstyled text-yellow">
        //                     <li><a href="/" className='text-yellow'>Home</a></li>
        //                     <li><a href="/products" className='text-yellow'>Products</a></li>
        //                     <li><a href="/about" className='text-yellow'>About Us</a></li>
        //                     <li><a href="/contact" className='text-yellow'>Contact Us</a></li>
        //                 </ul>
        //             </Col>
        //             <Col md={4}>
        //                 <div><h5>Contact Us</h5></div>
        //                 <h6>123 Main Street</h6>
        //                 <h6>Anytown, USA 12345</h6>
        //                 <h6>Phone: 555-555-5555</h6>
        //                 <h6>Email: info@watchshop.com</h6>
        //             </Col>
        //             {/* <Col md={4}>
        //                 <div><h5>Newsletter Sign-up</h5></div>
        //                 <Form>
        //                     <Form.Group controlId="formBasicEmail">
        //                         <Form.Label>Email address</Form.Label>
        //                         <Form.Control type="email" placeholder="Enter email" />
        //                         <Form.Text className="text-muted">
        //                             Sign up for our newsletter to receive updates on new products and promotions.
        //                         </Form.Text>
        //                     </Form.Group>
        //                     <Button variant="light" type="submit">
        //                         Submit
        //                     </Button>
        //                 </Form>
        //             </Col> */}
        //         </Row>
        //         <hr />
        //         <Row>
        //             <Col md={6}>
        //                 <p>&copy; 2023 Watch Shop. All Rights Reserved.</p>
        //             </Col>
        //             <Col md={6}>
        //                 <p className="float-end">Accepted Payment Methods:</p>
        //                 <img src="/images/payment-logos.png" alt="Accepted Payment Methods" className="float-end" />
        //             </Col>
        //         </Row>
        //     </Container>
        // </footer>
    );
}

export default Footer;
