import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../redux/ProductReducer'

const CrudProduct = () => {
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
    }

    return (
        <div className='container-xxl'>
            <div className='d-flex justify-content-end mx-5 mt-3'>

                <Link to={'/create'} className='btn btn-success'>Create new product</Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col-lg-1">#</th>
                        <th scope="col-lg-2">Name</th>
                        <th scope="col-lg-3">Description</th>
                        <th scope="col-lg-2">Price</th>
                        <th scope="col-lg-2">Current Price</th>
                        <th scope="col-lg-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.currentPrice}</td>
                                <td>
                                    <Link to={`/update/${product.id}`} className='btn btn-primary'>Edit</Link>
                                    <button onClick={() => handleDelete(product.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CrudProduct