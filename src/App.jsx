import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/cart'
import Homepage from './pages/homepage'
import Products from './pages/products'
import Footer from './components/footer'
import Header from './components/header'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )

}

export default App