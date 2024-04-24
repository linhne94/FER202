import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import ProductDetail from './ProductDetail'

const DetailProduct = () => {
    const { id } = useParams()
    const products = useSelector((state) => state.products.products)
    const product = products.filter(p => p.id === id)
    console.log(product)
    return (
        <div>
            {product && product.map(p => (
                <ProductDetail p={p} key={p.id} />
                // <div className='container' key={p.id}>
                //     <h1 className='text-center'>{p.name}</h1>
                //     <img className='d-flex m-auto' src={p.image} alt="..." />
                //     <p className='text-center fs-2'>{p.description}</p>
                //     <p className='text-center fs-2'>Price: {p.price}</p>
                //     <p className='text-center fs-2'>Current Price: {p.currentPrice}</p>
                //     <p className='text-center fs-2'>Discount: 20%</p>
                //     <div className='d-flex justify-content-center'>
                //         <Link to={"/"} className='btn btn-primary'>Back home</Link>
                //         <Link to={`/update/${p.id}`} className='btn btn-danger'>Edit</Link>
                //     </div>
                // </div>
            ))}
        </div>
    )
}

export default DetailProduct