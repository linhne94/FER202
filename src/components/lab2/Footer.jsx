import React from 'react'

const Footer = () => {
    return (
        <div class="container">
            <h1 class="text-light text-center ">Book Your Table</h1>
            <div class="row align-items-stretch">
                <div class="col-md-4">
                    <input type="text" class="form-control" id="nameInput" placeholder="Enter your name" />
                </div>
                <div class="col-md-4">
                    <input type="email" class="form-control" id="emailInput" placeholder="Enter your email" />
                </div>
                <div class="col-md-4">
                    <select class="form-select w-100 h-100" id="serviceSelect">
                        <option selected>Select a service</option>
                        <option value="service1">Service 1</option>
                        <option value="service2">Service 2</option>
                        <option value="service3">Service 3</option>
                    </select>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <textarea class="form-control" id="commentTextarea" rows="5"
                        placeholder="Write your comment here"></textarea>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-3">
                    <button type="submit" class="btn btn-primary bg-warning text-white w-90">Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Footer