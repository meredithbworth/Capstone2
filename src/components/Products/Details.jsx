import { Link } from 'react-router-dom'
// import { useGetProductDetailsQuery } from '../../api/productsListApi'


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
          
          <div className="details-categories">
          {/* {
                    // id:1,
                    title:'...',
                    price:'...',
                    category:'...',
                    description:'...',
                    image:'...'
          }, */}
            <h3>{product.title}</h3> 
            
            <p>{product.description}</p>
            <div className="product-image-container">
                <img className="product-image"  src={product.image} />
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