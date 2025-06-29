import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Header.css'

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems)

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h2>GreenLeaf Gardens</h2>
        </Link>
        
        <nav className="navigation">
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/cart" className="cart-link">
            <div className="cart-icon">
              🛒
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </div>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header 