import React from 'react'
import { useGetProductsListQuery } from '../../api/productsListApi'
import Details from './Details'
import { Link } from 'react-router-dom'

const Products = () => {

  const { data={}, error, isLoading } = useGetProductsListQuery();
  // console.log(data);

  // function itemCost() {
  //   return price.parseFloat().toFixed(2);
  // }

  if (isLoading) {
    return <p className="loading">Loading Products. One moment please...</p>
  }

  if (error) {
    return <p>error.data.error.message</p>
  }
  return (
    <div className="products">
      {/* {isLoading && <p>{message}</p>} */}
      {/* {error && <p>{message}</p>} */}
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
            
            {/* <p>{product.description}</p> */}

          </div>
            <div className="product-image-container">
                <img className="product-image"  src={product.image} />

                <div>
            <Link to="/products/:productsID">
                <button className="button-productsID">Details</button>
            </Link>
            </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Products;