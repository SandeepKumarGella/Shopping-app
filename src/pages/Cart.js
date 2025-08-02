import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container my-4">
      <h2 className="mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="list-group">
          {cartItems.map((item) => (
            <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={item.image} alt={item.title} style={{ height: 60, width: 60, objectFit: 'contain' }} className="me-3" />
                <div>
                  <h6 className="mb-1">{item.title}</h6>
                  <p className="mb-1">${item.price}</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button className="btn btn-outline-secondary btn-sm ms-2" onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button className="btn btn-danger btn-sm ms-3" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="mt-4 fw-bold">Total: ${total.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;