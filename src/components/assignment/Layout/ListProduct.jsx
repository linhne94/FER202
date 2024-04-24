import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import img from '../../../json-server/Images/laptop1.png'

const ListProduct = () => {
    const products = useSelector((state) => state.products.products)
    const status = useSelector((state) => state.products.status)

    // const [products, setProducts] = useState([]);
    // console.log('[product]', products)
    // console.log('[status]', status)


    return (
        <div className='container'>
            <h1 className='text-center'>Product List</h1>
            <div className="row d-flex justify-content-center gap-5">
                {status === 'loading' &&
                    <h1 className='text-center'>Loading ...</h1>
                }
                {products && products.map(product => (
                    <div className="card col-lg-3" style={{ width: '18rem' }} key={product.id}>
                        <img src={product.image} className="card-img-top" alt="..." />
                        <h2>{product.image}</h2>
                        <div className="card-body">
                            <h5 className="card-title text-red">{product.name}</h5>
                            <p className="card-text text-sm">{product.description}</p>
                            <h3 className='text-decoration-line-through text-center'>{product.price}</h3>
                            <h2 className='text-center'>{product.currentPrice}</h2>
                            <Link to={`/detail/${product.id}`} className="btn btn-danger position-relative bottom-0 start-50 translate-middle-x">Detail</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListProduct