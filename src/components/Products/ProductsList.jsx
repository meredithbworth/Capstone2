import React from 'react'
import { useGetProductsListQuery } from '../../api/productsListApi'
import Details from './Details'
import { Link } from 'react-router-dom'

const Products = () => {

  const { data={}, error, isLoading } = useGetProductsListQuery();

  if (isLoading) {
    return <p className="loading">Loading Products. One moment please...</p>
  }

  if (error) {
    return <p>error.data.error.message</p>
  }
  return (
    <div className="products">
      {data.map((product) => (
        
        <div key={product.id} className="product-card">        
          <div className="product-details">
            <h2>{product.title}</h2>  

          </div>
            <div className="product-image-container">
                <img className="product-image"  src={product.image} />

                <div>
                <p className="price">{product.price}</p>
            {/* <Link to="/products/:productsID">
                <button className="button-productsID">Details</button>
            </Link> */}
            </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Products;