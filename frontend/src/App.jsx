import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from './Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {

  const [showLogin, setShowLogin] = useState(false) // true means it asks login first when webpage loaded.

  return (
    <>
    {showLogin? <LoginPopUp setShowLogin = { setShowLogin }/> : <></>}
      <div className='app'>
        <Navbar setShowLogin = {setShowLogin}/>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/cart' element = {<Cart/>} />
          <Route path = '/order' element = {<PlaceOrder/>} />
          <Route path='/verify' element = {<Verify/>} />
          <Route path = '/myorders' element = {<MyOrders/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
