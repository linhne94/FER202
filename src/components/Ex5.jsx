import React from 'react'

const Ex5 = () => {
    return (
        <>
            <div className="p-5 mb-2 bg-secondary text-white text fs-2">
                Let's test grid!
            </div>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-6 bg-danger p-5">
                        First col
                    </div>
                    <div className="col-6 bg-warning text-dark p-5">
                        Second col
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col bg-warning p-5 ">
                        col
                    </div>
                    <div className="col bg-danger p-5">
                        col
                    </div>
                    <div className="col bg-warning p-5">
                        col
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col bg-warning p-5">
                        col
                    </div>
                    <div className="col bg-danger p-5">
                        col
                    </div>
                    <div className="col bg-warning p-5">
                        col
                    </div>
                    <div className="col bg-danger p-5">
                        col
                    </div>
                </div>
            </div>
            <div className=" bg-secondary text-white text-center fs-2 mb-4">
                Create by Lĩnh!
            </div>

            {/* EX5 BT 2 */}

            <div className="p-5 mb-2 bg-secondary text-white text-center fs-2">
                My First Bootstrap Page
            </div>

            <div className="container">

                <div className="row mb-3">
                    <div className="col-4">
                        <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFGvfXnNyB1HacT6EgBLYkRwBXnPa9GSYd_zjyWtDbzw&s" alt="Girl in a jacket" height="350" />
                    </div>
                    <div className="col-4">
                        <img className="w-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="Girl in a jacket" height="350" />

                    </div>
                    <div className="col-4">
                        <img className="w-100" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="Girl in a jacket" height="350" />
                    </div>
                </div>
            </div>
            {/* EX5 BT 4 */}
            <div className="p-5 mb-2 text-white text-center fs-2 bg-warning">
                <img className='w-50' src="https://hcmuni.fpt.edu.vn/Data/Sites/1/skins/default/img/og-image.png" alt="" />
                <div className="d-flex justify-content-center gap-3 mt-3">
                    <a href="#home" className='text-decoration-none text-white'>Home</a>
                    <a href="#about" className='text-decoration-none text-white'>About</a>
                    <a href="#cc" className='text-decoration-none text-white'>Contact</a>
                </div>
            </div>
            <div className="card mb-3 container" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://hcmuni.fpt.edu.vn/Data/Sites/1/skins/default/img/og-image.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">FPT</h5>
                            <p className="card-text">Dong song lời thề.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h2 className='fw-bold'>About</h2>
                <p>
                    This is about section of the website
                </p>
                <h2 className='fw-bold'>Contact</h2>
                <p>For any inquires, pls ...</p>
            </div>
            <div className="p-3 text-center fs-2 bg-warning-subtle text-dark">
                @2024 Website. All rights reserved
            </div>
        </>
    )
}

export default Ex5