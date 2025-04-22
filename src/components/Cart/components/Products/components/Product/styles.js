import styled from "styled-components";


export const Product = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
`

export const ProductInfo = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`

export const Photo = styled.img`
  max-width: 130px;
  max-height: 140px;
  width: 100%;
`

export const Name = styled.div`
  font: 400 20px/120% Josefin Sans;
  text-transform: capitalize;
  text-align: left;
`
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const PricesWrap = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
`

export const Prices = styled.div`
  display: flex;
  gap: 10px;
`
export const OldPrice = styled.div`
  font: 300 16px/100% Josefin Sans;
  color: rgb(68, 68, 68);
  text-align: left;
  text-decoration-line: line-through;
  text-transform: capitalize;
`
export const Price = styled.div`
  font: 400 16px/100% Josefin Sans;
  text-align: left;
  text-transform: capitalize;
`

export const Sum = styled.div`
  font: 400 20px/100% Josefin Sans;
  text-align: left;
  text-transform: capitalize;
  align-self: flex-end;
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