import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header5 = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand><Link className='text-decoration-none text-muted' to={"/"}>React</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link className='text-decoration-none text-muted' to={"/"}>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none text-muted' to={"/about"}>About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none text-muted' to={"/quizzes"}>Quizzes</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none text-muted' to={"/newspage"}>News</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none text-muted' to={"/contact"}>Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header5