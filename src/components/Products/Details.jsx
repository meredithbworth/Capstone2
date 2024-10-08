import { Link } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../../api/productDetailsApi'


function Details () {

    const { data={}, error, isLoading } = useGetProductDetailsQuery();
  
    if (isLoading) {
      return <p className="loading">Loading item details. One moment please...</p>
    }
  
    if (error) {
      return <p>error.data.error.message</p>
    }
    return(
        <div className="details">
      {data.map((product) => (
          <div key={product.id} className="details-card">
          {/* <div className="details-categories"> */}
                <img className="details-image"  src={product.image} />
                <div>
                <h3>{product.title}</h3>
                </div>
                <p className="details-price">${product.price.toFixed(2)}</p>
                <p>{product.description}</p>
            {/* </div> */}
            <div>
                <Link to="/products">
                    <button className="back-button">Back</button>
                </Link>
              </div>
          </div>
          
      ))}
    </div>
    )
}
export default Details;


//     return (
//       <div className="products">
//         {data.map((product) => (
          
//           <div key={product.id} className="product-card">        
//             <div className="product-details">
//               <h2>{product.title}</h2>  
  
//             </div>
//               <div className="product-image-container">
//                   <img className="product-image"  src={product.image} />
  
//                   <div>
//                   <p className="price">{product.price}</p>
//               {/* <Link to="/products/:productsID">
//                   <button className="button-productsID">Details</button>
//               </Link> */}
//               </div>
//               </div>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default Products;