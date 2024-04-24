import React from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'

const Main = () => {
    return (
        <>
            <section style={{ backgroundColor: '#252327' }}>
                <div className="w-100 mt-5">
                    <div className="w-100">
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

                </div>

                <div className="container mt-5">
                    <h2 className="text-white">Our Menu</h2>
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
                </div>

                <hr />

                <footer className="footer" style={{ marginTop: '40px' }}>
                    <div className="container">
                        <h1 className="text-light text-center ">Book Your Table</h1>
                        <div className="row align-items-stretch">
                            <div className="col-md-4">
                                <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" />
                            </div>
                            <div className="col-md-4">
                                <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" />
                            </div>
                            <div className="col-md-4">
                                <select className="form-select w-100 h-100" id="serviceSelect">
                                    <option selected>Select a service</option>
                                    <option value="service1">Service 1</option>
                                    <option value="service2">Service 2</option>
                                    <option value="service3">Service 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <textarea className="form-control" id="commentTextarea" rows="5" placeholder="Write your comment here"></textarea>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3">
                                <button type="submit" className="btn btn-primary bg-warning text-white w-90">Send Message</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Main