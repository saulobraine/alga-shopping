import React, { useEffect, useState } from 'react';
import LineChart from '../../shared/LineChart/LineChart';
import AppContainer from '../AppContainer/AppContainer';
import AppHeader from '../AppHeader/AppHeader';
import ShoppingList from '../ShoppingList/ShoppingList';

import productsList from '../../assets/productsList.json';

import { Container, Wrapper, Price } from './App.styles';
import { extractPercentage } from '../../utils/extractPercentage';

function App() {

  const [products, setProducts] = useState(productsList.products);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleToggle = (id) => {
    const newProducts = products.map(product => product.id === id
      ? {
        ...product,
        checked: !product.checked
      }
      : product
    );

    setProducts(newProducts);
  }

  useEffect(() => {
    const filteredProducts = products.filter(product => product.checked);
    setSelectedProducts(filteredProducts);

  }, [products]);

  useEffect(() => {
    const total = selectedProducts.map(product => product.price).reduce((a, b) => a + b, 0);

    setTotalPrice(total);

  }, [selectedProducts])

  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61'];

  return <Wrapper>
    <Container>
      <AppHeader />
      <AppContainer
        left={<ShoppingList
          title="Produtos disponíveis"
          products={products}
          onToggle={handleToggle}
        />
        }
        middle={<ShoppingList
          title="Sua lista de compras"
          products={selectedProducts}
          onToggle={handleToggle}
        />}
        right={
          <div>estatísticas
            <LineChart
              color={colors[0]}
              title="saudável"
              percentage={
                extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter(product => product.tags.includes("healthy")).length)}
            />
            <LineChart
              color={colors[1]}
              title="não tão saudável"
              percentage={
                extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter(product => product.tags.includes("junk")).length)}
            />
            <LineChart
              color={colors[2]}
              title="limpeza"
              percentage={
                extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter(product => product.tags.includes("cleaning")).length)}
            />
            <LineChart
              color={colors[3]}
              title="outros"
              percentage={
                extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter(product => product.tags.includes("others")).length)}
            />

            <Price>
              
              total aproximado:
                  
              <span>{totalPrice.toLocaleString('pt-br', {
                style: "currency",
                currency: "BRL"
              })}</span>

            </Price>

          </div>

        }
      />
    </Container>
  </Wrapper>
}

export default App;