import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/cart'
import Homepage from './pages/homepage'
import Products from './pages/products'
import Product from './pages/product'
import Footer from './components/footer'
import Header from './components/header'
import { CartContextProvider } from './components/cartContext'

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  )

}

export default App