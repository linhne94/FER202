import React from 'react'
import { Carousel } from 'react-bootstrap'

const Home = () => {
    return (
        <>
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

                <h1 className='mt-3' style={{ color: "red" }}>This is Home Page</h1>
            </div>
        </>
    )
}

export default Home