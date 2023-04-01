import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/images/watch-logo.jpg"
import { Image } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <div className='d-flex justify-content-center text-center align-items-center'>
                    <Navbar.Brand href="#">
                        <Image src={logo} style={{ height: '40px' }} alt="My Website Logo" className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <div><h3 className='mx-0 my-0 text-yellow-hover'>Watchiya Human</h3></div>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 rounded-0"
                            aria-label="Search"
                        />
                        <Button variant="dark" className='w-100 text-white border-0 custom-btn rounded-0'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;