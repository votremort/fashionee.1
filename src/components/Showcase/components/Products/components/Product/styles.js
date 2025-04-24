import styled from "styled-components";
export const Product = styled.div`
  max-width: 262px;
  width: 100%;
  box-sizing: border-box;
`
export const ProductWrap = styled.div`
  position: relative;
`

export const Label = styled.div`
  max-width: 45px;
  padding: 5px 10px;
  box-sizing: border-box;
  position: absolute;
  left: 20px;
  top: 17px;
  color: white;
  font: 800 10px Raleway;
`
export const SaleLabel = styled(Label)`
  background-color: rgb(255, 142, 142);
`
export const NewLabel = styled(Label)`
  background-color: rgb(149, 204, 181);
`

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

export const ProdImg = styled.img`
  max-width: 262px;
`
export const ProdName = styled.div`
  font: 400 16px/170% Raleway;
  letter-spacing: 0%;
  text-align: left;
  color: rgb(68, 68, 68);
`

export const PriceWrap = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 10px;
`
export const ProdPrice = styled.div`
  font: 400 20px/100% Josefin Sans;
  letter-spacing: 0%;
  text-align: left;
  text-transform: capitalize;
  color: rgb(0, 0, 0);
`
export const OldProdPrice = styled.div`
  font: 300 16px/100% Josefin Sans;
  letter-spacing: 0%;
  text-align: left;
  text-decoration-line: line-through;
  text-transform: capitalize;
`
export const BuyWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BuyBtn = styled.button`
  display: flex;
  border: none;
  padding: 10px 20px;
  background: black;
  color: white;
  margin-top: 10px;
  cursor: pointer;
  &:hover{
    background-color: rgb(40, 41, 42);
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
