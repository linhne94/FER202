import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


const ProductDetail = ({ p }) => {

    // console.log(p.description)
    return (
        <>
            <div className='container'>
                <h1 className='text-center'>{p.name}</h1>
                <img className='d-flex m-auto' src={p.image} alt="..." />
                <p className='text-center fs-2'>{p.description}</p>
                <p className='text-center fs-2'>Price: {p.price}</p>
                <p className='text-center fs-2'>Current Price: {p.currentPrice}</p>
                <p className='text-center fs-2'>Discount: 20%</p>
                <div className='d-flex justify-content-center'>
                    <Link to={"/"} className='btn btn-primary'>Back home</Link>
                    <Link to={`/update/${p.id}`} className='btn btn-danger'>Edit</Link>
                </div>
            </div>
        </>
    )
}

ProductDetail.propTypes = {
    p: PropTypes.shape,
    p: PropTypes.object,
};

export default ProductDetail