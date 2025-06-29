import { Link } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="company-name">GreenLeaf Gardens</h1>
        <p className="company-description">
          Welcome to GreenLeaf Gardens, your premier destination for beautiful houseplants 
          that bring life and freshness to your home. We specialize in high-quality indoor 
          plants, succulents, and flowering varieties that are perfect for plant enthusiasts 
          of all levels. Transform your living space into a green oasis with our carefully 
          curated collection of plants that purify your air and brighten your day.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default LandingPage 