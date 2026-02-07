import "./Header.css";
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import logo from "../images/tabLogo.png";


function Header({ storeName, cart, removeFromCart, cartTotal }) { // <-- added cartTotal prop
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const toggleCart = () => {
    setIsCartOpen((v) => !v);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setIsCartOpen(false);
      }
    }

    function handleKeyDown(e) {
      if (e.key === 'Escape') setIsCartOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className="header" >
      <h1 className="store-name"><img className = "header-logo" src={logo} alt="Front Porch Tea Logo" /></h1>

      <nav>
        <ul className="nav-links">
          {/* React Router Links */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Teas</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          {/* <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li> */}

          {/* Cart Dropdown */}
          <li>
            <div className="cart-container" ref={cartRef}>
              <div className="cart-icon" onClick={toggleCart}>
                <FontAwesomeIcon icon={faCartShopping} color="white" size="lg" />
                <span className="cart-count">{cart.length}</span>
              </div>

              {isCartOpen && (
                <div className="cart-dropdown">
                  {cart.length === 0 ? (
                    <p className="empty-cart">Your cart is empty</p>
                  ) : (
                    <>
                      {cart.map(item => (
                        <CartItem
                          key={item.cartId}
                          item={item}
                          removeFromCart={removeFromCart}
                        />
                      ))}

                      <div className="cart-total">
                        <strong>Total: </strong>${cartTotal.toFixed(2)}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
