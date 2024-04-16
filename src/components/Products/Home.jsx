import { Link } from 'react-router-dom'

function Home () {
    return(
        <div className='home-wrapper'>
            <img 
            className="home-image"
            src="https://www.solopress.com/blog/wp-content/uploads/2020/11/Lorem-Ipsum.jpg"
            alt="store front"
            />
            <Link to="/products">
                <button className="button">Enter</button>
            </Link>

        </div>
    )
}
export default Home;