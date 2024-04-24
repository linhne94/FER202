import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewProduct } from '../redux/ProductReducer'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function generateRandomId() {
        return Math.random().toString(36).substr(2, 8);
    }

    // Sử dụng hàm để lấy một ID ngẫu nhiên


    const [newP, setNewP] = useState({
        id: generateRandomId(),
        name: '',
        description: '',
        price: '',
        currentPrice: ''
    })

    const handleChange = (e) => {
        setNewP({
            ...newP,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewProduct(newP))
        navigate('/crud')
        // console.log(products)
    }



    return (
        <div>
            <h1 className='text-center'>Add Product</h1>
            <div className="container w-25">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        Name:
                        <input type="text" className="form-control" id='name' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        Description:
                        <input type="text" className="form-control" id='description' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        Price:
                        <input type="text" className="form-control" id='price' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        Current Price:
                        <input type="text" className="form-control" id='currentPrice' onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default CreateProduct