import React from 'react';
import Checkbox from '../../shared/Checkbox/Checkbox';

import { Array, Title, Wrapper } from './ShoppingList.style';

function ShoppingList({ title, products, onToggle }) {
  return <Wrapper>
    <Title>{title}:</Title>
    <Array>
      {products.map((product) => <Checkbox key={product.id} value={product.checked} title={product.name} onClick={() => onToggle(product.id)} />)}
    </Array>
  </Wrapper>
}

export default ShoppingList;
