import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
  removeFromCart, 
  incrementQuantity, 
  decrementQuantity, 
  clearCart 
} from '../store/slices/cartSlice'
import Header from '../components/Header'
import './ShoppingCartPage.css'

const ShoppingCartPage = () => {
  const dispatch = useDispatch()
  const { items, totalItems, totalCost } = useSelector(state => state.cart)

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id))
  }

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id))
  }

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be available soon.')
  }

  if (items.length === 0) {
    return (
      <div className="shopping-cart-page">
        <Header />
        <div className="page-content">
          <div className="empty-cart">
            <h1>Your Cart is Empty</h1>
            <p>Add some beautiful plants to your cart to get started!</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="shopping-cart-page">
      <Header />
      
      <div className="page-content">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <div className="cart-summary">
            <p className="total-items">Total Items: <span>{totalItems}</span></p>
            <p className="total-cost">Total Cost: <span>${totalCost.toFixed(2)}</span></p>
          </div>
        </div>

        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">Unit Price: ${item.price.toFixed(2)}</p>
              </div>
              
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
              </div>
              
              <div className="item-total">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              
              <button 
                className="delete-btn"
                onClick={() => handleRemoveItem(item.id)}
                title="Remove item"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartPage 