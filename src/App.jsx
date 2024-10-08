import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Products/Home'
import Products from './components/Products/ProductsList'
// import Details from './components/Products/Details'
import SignUp from './components/AuthSign/SignUp'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState(null);
  return (
    <div id="container">
      <div>
        <h1 className="header">Lorem's Bodega</h1>
        <nav>
          <Navbar token={token} setToken={setToken}/>
        </nav>
      </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      {/* <Route path='/products/:productsId' element={<Details/>}/> */}
      <Route path='/SignUp' element={<SignUp setToken={setToken}/>}/>
    </Routes>
    </div>
  );
}

export default App;
