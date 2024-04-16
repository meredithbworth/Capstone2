// import { useState, React } from 'react'
import Products from './components/Products/ProductsList'
// import SignUp from './components/AuthSign/SignUp'
// import Authenticate from './components/AuthSign/Authenticate'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Products/Home'
import Details from './components/Products/Details'

function App() {

  return (
    <div id="container">
      <div id="navbar">
        <nav>
          <h1 className="header">Mere's Post</h1>
          <Navbar />
        </nav>
      </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='products/:productsId' element={<Details/>}/>
    </Routes>
    </div>
  );
}

export default App;
