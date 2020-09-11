import styled from 'styled-components';

import bg from '../../assets/bg.svg';

export const Wrapper = styled.div`

  height: 100vh;
  background-color: #f8f5f5;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Container = styled.div`
  
  width: 700px;
  height: 500px;
  background-color: white;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  border-radius: 20px;

`;