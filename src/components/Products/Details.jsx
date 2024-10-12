import { Link, useParams } from 'react-router-dom'
import { useGetProductsListQuery } from '../../api/productsListApi';

function Details () {
      const {productsId} = useParams()

      const { data={}, error, isLoading } = useGetProductsListQuery();
  
    if (isLoading) {
      return <p className="loading">Loading item details. One moment please...</p>
    }
  
    if (error) {
      return <p>error.data.error.message</p>
    }

    const product = data.find(productsListGet => 
      productsListGet.id === parseInt(productsId))

    return(
        <div className="product-details">
          <div key={product.id}>
                <h3  className="details-title">{product.title}</h3>
                <img className="details-image"  src={product.image} />
                <p className="details-price">${product.price.toFixed(2)}</p>
                <p  className="details-description">{product.description}</p>
            <div>
                <Link to="/products">
                    <button className="back-button">Back</button>
                </Link>
            </div>
          </div>
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