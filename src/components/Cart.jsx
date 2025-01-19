import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  function handlePurchase() {
    clearCart();
  }

  function renderCartItem(product, index) {
    return (
      <li key={index}>
        {product.name} - ${product.price}
      </li>
    );
  }

  return (
    <div className="cart">
      <h2 className="cart__text">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart.map(function (product, index) {
            return renderCartItem(product, index);
          })}
        </ul>
      )}
      <button onClick={handlePurchase} className="cart__purchase-button">
        Comprar
      </button>
    </div>
  );
}
