import React from 'react'
import { useGetProductsListQuery } from '../../api/productsListApi'
import { useNavigate } from 'react-router-dom'


const Products = () => {

  const { data={}, error, isLoading } = useGetProductsListQuery();
  const navigate = useNavigate();
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
          <button className="on-product-click" onClick={() => {navigate(
            `/products/${product.id}`)}}> 
            <img className="product-image"  src={product.image} alt={product.title} />
            <p className="product-title">{product.title}</p>
          </button>
            <p className="price">${product.price.toFixed(2)}</p>
        </div> 
      ))}
    </div>
  );
};

export default Products;