import React from 'react'
import { useGetProductsListQuery } from '../../api/productsListApi'

const Products = () => {

  const { data, error, isLoading } = useGetProductsListQuery();
//   console.log(data)
  let message;

  if (isLoading) {
    message = 'Loading Products...'
  }

  if (error) {
    message = error.data.error.message
  }
  return (
    <div className="products">
      {isLoading && <p>{message}</p>}
      {error && <p>{message}</p>}
      {data?.data?.products && data.data.products.map((product) => (
        
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
            
            <p>{product.description}</p>
          </div>
            <div className="product-image-container">
                <img className="product-image"  src={product.image} />
            </div>
        </div>
      ))}
    </div>
  );
};

export default Products;