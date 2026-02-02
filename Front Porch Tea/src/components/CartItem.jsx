import "./CartItem.css";

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <img src={item.image} alt={item.name} className="cart-item-thumb" />
        <div className="cart-item-info">
          <h4>{item.name}</h4>
          <p className="cart-item-price-mobile">${item.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="cart-item-price">
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
