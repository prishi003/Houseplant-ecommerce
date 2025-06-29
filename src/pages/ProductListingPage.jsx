import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'
import Header from '../components/Header'
import './ProductListingPage.css'

const ProductListingPage = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  const categories = useSelector(state => state.products.categories)
  const cartItems = useSelector(state => state.cart.items)
  
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory)
  
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId)
  }
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div className="product-listing-page">
      <Header />
      
      <div className="page-content">
        <div className="page-header">
          <h1>Our Beautiful Houseplants</h1>
          <p>Transform your home with our carefully selected collection of plants</p>
        </div>
        
        <div className="category-filter">
          <button 
            className={selectedCategory === 'All' ? 'active' : ''}
            onClick={() => setSelectedCategory('All')}
          >
            All Plants
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button 
                  className={`add-to-cart-btn ${isInCart(product.id) ? 'disabled' : ''}`}
                  onClick={() => handleAddToCart(product)}
                  disabled={isInCart(product.id)}
                >
                  {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductListingPage 