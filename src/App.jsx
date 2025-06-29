import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductListingPage from './pages/ProductListingPage'
import ShoppingCartPage from './pages/ShoppingCartPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </div>
  )
}

export default App
