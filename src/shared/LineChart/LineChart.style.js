import styled from 'styled-components';

export const Wrapper = styled.div`

  display:flex;
  flex-direction: column;
  margin-bottom: 12px;

  span {
    font-size: 12px;
    color: #004d61;
    margin-bottom: 4px;
  }

  &:first-of-type {
    margin-top: 20px;
  }

`;


export const ProgressBar = styled.div`

  height: 14px;
  border-radius: 4px;
  background-color: ${props => props.color ? props.color : '#004d61'};
  width: ${props => props.percentage ? props.percentage : '0'}%;
  transition: .4s ease;

`;