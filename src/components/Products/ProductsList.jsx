import React from 'react'
import { useGetProductsListQuery } from '../../api/productsListApi'
import Details from './Details'
import { Link } from 'react-router-dom'

const Products = () => {

  const { data={}, error, isLoading } = useGetProductsListQuery();

  if (isLoading) {
    return <p>'Loading Products...'</p>
  }

  if (error) {
    return <p>error.data.error.message</p>
  }
  return (
    <div className="products">
      {data.map((product) => (
        
        <div key={product.id} className="product-card">

          
          <div className="product-details">
          {/* {
                    id:1,
                    title:'...',
                    price:'...',
                    category:'...',
                    description:'...',
                    image:'...'
                }, */}
            
            <h2>{product.title}</h2> 
            
            <p>{product.price}</p>

          </div>
            <div className="product-image-container">
                <img className="product-image"  src={product.image} />

            {/* <Link to="/products/:productsId">
                <button className="button">Click for more</button>
            </Link> */}
            </div>
        </div>
      ))}
    </div>
  );
};

export default Products;