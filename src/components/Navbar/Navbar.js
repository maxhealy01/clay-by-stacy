import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import { FaShoppingCart } from "react-icons/fa"
import { useShoppingCart } from "use-shopping-cart"
import "./Navbar.css"

const Navbar = () => {
  const [show, setShow] = useState(false)
  const { cartCount } = useShoppingCart()

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h2>Clay by Stacy</h2>
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Gallery
          </Link>
          <Link
            to="/products"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link
            to="/cart"
            className="cart-icon nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            <FaShoppingCart size={30}>
              {" "}
              <span>{cartCount}</span>{" "}
            </FaShoppingCart>
            <span>{cartCount}</span>
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
