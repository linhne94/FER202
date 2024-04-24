import React, { useState } from 'react'
import { updateProduct } from '../redux/ProductReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {
    const { id } = useParams()
    const products = useSelector((state) => state.products.products)
    const product = products.filter(p => p.id === id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [newP, setNewP] = useState(product[0])
    // console.log(newP[0].id)

    const handleChange = (e) => {
        setNewP({
            ...newP,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProduct(newP))
        navigate('/crud')
        // console.log(products)
    }

    return (
        <div>
            <h1 className='text-center'>Update Product</h1>
            <div className="container w-25">

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        Name:
                        <input type="text" className="form-control" id='name' value={newP.name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        Description:
                        <input type="text" className="form-control" id='description' value={newP.description} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        Price:
                        <input type="text" className="form-control" id='price' value={newP.price} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        Current Price:
                        <input type="text" className="form-control" id='currentPrice' value={newP.currentPrice} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default UpdateProduct