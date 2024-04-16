import { Link } from 'react-router-dom'

function Details () {
    return(
        <div className='details-wrapper'>
            <Link to="/products/:productsId"/>
        </div>
    )
}
export default Details;