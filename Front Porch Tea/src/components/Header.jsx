import "./Header.css";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartItem from "./CartItem";

function Header({ storeName, cart, removeFromCart, cartTotal }) { // <-- added cartTotal prop
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="header">
      <h1 className="store-name"><img className = "header-logo" src="./src/images/tabLogo.png" alt="Front Porch Tea Logo" /></h1>

      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Teas</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <div className="cart-container">
              <div className="cart-icon" onClick={toggleCart}>
                <FontAwesomeIcon icon={faCartShopping} color="white" size="lg" />
                <span className="cart-count">{cart.length}</span>
              </div>

              {/* Cart Dropdown */}
              {isCartOpen && (
                <div className="cart-dropdown">
                  {cart.length === 0 ? (
                    <p className="empty-cart">Your cart is empty</p>
                  ) : (
                    <>
                      {cart.map(item => (
                        <CartItem
                          key={item.cartId} // ensures duplicates are separate
                          item={item}
                          removeFromCart={removeFromCart}
                        />
                      ))}

                      {/* Cart Total */}
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
