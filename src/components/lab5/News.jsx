import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { newLists } from './data'

const News = () => {

    const data = newLists;

    return (
        <div className="">
            <h2 className="" style={{ color: "red" }}>News Category</h2>
            <div className="">
                <div className="row justify-content-center">
                    {data && data.map(news => (
                        <div className="col-lg-3 col-md-6 mb-4">
                            <Card className='w-100'>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>{news.title}</Card.Title>
                                    <Card.Text>
                                        {news.description}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News