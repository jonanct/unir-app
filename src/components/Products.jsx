import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  {
    id: 1,
    name: "Lienzo de Algodón",
    description: "Un lienzo de alta calidad para tus mejores obras.",
    price: 100,
    imageUrl: "./lienzos.jpg",
  },
  {
    id: 2,
    name: "Pinceles de Madera",
    description: "Pinceles de diferentes tamaños para todos tus proyectos.",
    price: 40,
    imageUrl: "./pinceles.jpg",
  },
  {
    id: 3,
    name: "Pintura Acrílica",
    description: "Pintura de colores vibrantes y duraderos.",
    price: 40,
    imageUrl: "./pinturas.jpg",
  },
];

export default function Products() {
  const { addToCart } = useContext(CartContext);

  function renderProduct(product) {
    return (
      <div key={product.id} className="col-md-4 mb-4">
        <div className="card">
          <img
            src={product.imageUrl}
            className="products__item-image"
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">${product.price} MXN</p>
            <button
              className="btn btn-primary"
              onClick={function () {
                addToCart(product);
              }}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="products">Productos</h2>
      <div className="row">
        {products.map(function (product) {
          return renderProduct(product);
        })}
      </div>
    </div>
  );
}
