import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd, onRemove,deleteProduct } = props;
  return (
    <main className="block col-2">
      <h2>Товары</h2>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} onRemove={onRemove} deleteProduct={deleteProduct}></Product>
        ))}
      </div>
    </main>
  );
}