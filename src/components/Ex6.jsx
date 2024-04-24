import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Card, Button } from 'react-bootstrap';

const Ex6 = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#1">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#1">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#1">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#1" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#1">Action</a>
                                <a className="dropdown-item" href="#1">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#1">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#1">Disabled</a>
                        </li>
                    </ul>

                </div>
                <form className="form-inline my-2 my-lg-0 d-flex">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            <div className="">
                <Carousel>
                    <Carousel.Item>
                        <img className='w-100' src="https://vcdn-vnexpress.vnecdn.net/2021/01/31/DH-FPT-4359-1612093890.jpg" alt="" height={500} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='w-100' src="https://vcdn-vnexpress.vnecdn.net/2021/01/31/DH-FPT-4359-1612093890.jpg" alt="" height={500} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='w-100' src="https://vcdn-vnexpress.vnecdn.net/2021/01/31/DH-FPT-4359-1612093890.jpg" alt="" height={500} />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="container mt-3">
                <h2>New Product</h2>
                <p>List product description</p>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src="https://vcdn-vnexpress.vnecdn.net/2021/01/31/DH-FPT-4359-1612093890.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src="https://vcdn-vnexpress.vnecdn.net/2021/01/31/DH-FPT-4359-1612093890.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src="https://vcdn-vnexpress.vnecdn.net/2021/01/31/DH-FPT-4359-1612093890.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src="https://vcdn-vnexpress.vnecdn.net/2021/01/31/DH-FPT-4359-1612093890.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <h2>New Product</h2>
                <p>List product description</p>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ex6