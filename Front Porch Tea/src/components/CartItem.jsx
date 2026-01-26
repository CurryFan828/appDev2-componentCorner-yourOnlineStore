import "./CartItem.css";

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <button
        className="remove-btn"
        onClick={() => removeFromCart(item.cartId)}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
