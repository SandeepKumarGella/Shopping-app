import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const placeOrder = () => {
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Checkout</h2>
      {cartItems.length === 0 ? (
        <p>No items to checkout.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                <span>{item.title} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between fw-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </li>
          </ul>
          <button className="btn btn-success" onClick={placeOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
