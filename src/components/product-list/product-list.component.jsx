import React from 'react';
import { ProductListContainer } from './product-list.styles';
import ProductCard from '../product-card/product-card.component';

const ProductList = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
