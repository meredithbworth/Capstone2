import React from 'react'
import { useGetProductsListQuery } from '../../api/productsListApi'
import Details from './Details'

const Products = () => {

  const { data={}, error, isLoading } = useGetProductsListQuery();
  // console.log(data);

  // function itemCost() {
  //   return price.parseFloat().toFixed(2);
  // }

  if (isLoading) {
    return <p>'Loading Products...'</p>
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