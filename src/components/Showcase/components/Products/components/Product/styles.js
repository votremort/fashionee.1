import styled from "styled-components";

export const Favorite = styled.div`
  position: absolute;
  top: 17px;
  right: 21px;
  cursor: pointer;

  > svg {
    fill: ${(props) => props.inFavorites ? 'red' : 'black'}
  }
  
  &:hover {
    >svg{
      fill: ${(props) => props.inFavorites ? 'black' : 'red'}
    }
  }
  `

export const Counter = styled.div`
  display: flex;
  align-items: center;
`
export const CounterBtn = styled.button`
  border: none;
  font: 500 20px/100% Josefin Sans;
  color: rgb(153, 153, 153);
  background-color: white;
  cursor: pointer;
  padding: 5px 10px;
`
export const Count = styled.input`
  border: none;
  max-width: 30px;
  text-align: center;
  font: 400 16px/100% Josefin Sans;
`
export const BuyWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`