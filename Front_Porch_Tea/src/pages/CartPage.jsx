// src/pages/CartPage.jsx
import CartItem from "../components/CartItem";
import './cart.css';

function CartPage({ cart, removeFromCart }) {
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page" style={{ paddingTop: "calc(80px + 24px)" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.cartId} item={item} removeFromCart={removeFromCart} />
            ))}
          </div>

          <aside className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-line">Items: {cart.length}</div>
            <div className="summary-total">Total: ${cartTotal.toFixed(2)}</div>
            <button className="checkout-btn">Checkout</button>
          </aside>
        </div>
      )}
    </div>
  );
}

export default CartPage;
