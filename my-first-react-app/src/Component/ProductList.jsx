import React from 'react';


// Child Component (No 'export default' if in the same file)
import samsungImg from './images/samsung.jpg';
import iphoneImg from './images/iphone.webp';
// import './App.css'

function ProductCard({ product }) {
  const { name, price, image, isOnSale } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{price}</p>
      {isOnSale && <span className="badge">On Sale!</span>}
    </div>
  );
}

// Parent Component
function ProductList() {
  const products = [
    {
      id: 1,
      name: 'Samsung',
      price: 'RM 5,590.00',
      image: samsungImg,
      isOnSale: true,
    },
    {
      id: 2,
      name: 'iPhone',
      price: 'RM 7,990.00',
      image: iphoneImg,
      isOnSale: true,
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;