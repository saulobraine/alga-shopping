import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox/Checkbox';
import LineChart from '../../shared/LineChart/LineChart';
import AppContainer from '../AppContainer/AppContainer';
import AppHeader from '../AppHeader/AppHeader';

import { Container, Wrapper } from './App.styles';

function App() {

  const [lettuce, setLettuce] = useState(false);

  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61'];

  return <Wrapper>
    <Container>
      <AppHeader />
      <AppContainer
        left={
          <div>produtos disponíveis
            <Checkbox title="Alface" value={lettuce} onClick={() => {
              setLettuce(!lettuce);
            }} />
          </div>
        }
        middle={
          <div>sua lista de compras</div>
        }
        right={
          <div>estatísticas
            <LineChart
              color={colors[0]}
              title="saudável"
              percentage={80}
            />
            <LineChart
              color={colors[1]}
              title="não tão saudável"
              percentage={25}
            />
            <LineChart
              color={colors[2]}
              title="limpeza"
              percentage={15}
            />
            <LineChart
              color={colors[3]}
              title="outros"
              percentage={35.6}
            />
          </div>

        }
      />
    </Container>
  </Wrapper>
}

export default App;