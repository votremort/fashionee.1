import styled from "styled-components";

export const Title = styled.div`
  font: 400 24px/180% Josefin Sans;
  border-bottom: 2px solid black;
  text-align: left;
`
export const LastProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const ProductCard = styled.div`
  max-width: 240px;
  width: 100%;
  display: flex;
`
export const ProductImg = styled.img`
  width: 75px;
  height: 85px;
`
export const InfoWrap = styled.div`
  align-self: center;
` 
export const NameProduct = styled.div`
  font: 400 14px/140% Raleway;
  color: rgb(68, 68, 68);
`
export const PriceProduct = styled.div`
  font: 400 14px/100% Josefin Sans;
  color: black;
`
export const OldPriceProduct = styled.div`
  font: 300 12px/100% Josefin Sans;
  text-decoration: line-through;
  color: rgb(68, 68, 68) ;
`