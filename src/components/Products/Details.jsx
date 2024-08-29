import { Link } from 'react-router-dom'

function Details () {
    return(
        <div className="products">
      {data.map((product) => (
          
          <div className="product-details">
          {/* {
                    id:1,
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