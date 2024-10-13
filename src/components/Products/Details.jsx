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
        <div className="product-details-individual">
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