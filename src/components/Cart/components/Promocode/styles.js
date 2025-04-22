import styled from "styled-components"

export const Promocode = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 375px;
  width: 100%;
`
export const PromoTitle = styled.div`
  font: 400 32px/120% Josefin Sans;
  text-transform: capitalize;
`
export const PromoText = styled.div`
  font: 400 16px/170% Raleway;
  text-align: left;
`
export const InputWrap = styled.div`
  display: flex;
  align-items: flex-start;
`
export const PromoInput = styled.input`
  border: none;
  border-bottom: 1px solid #444444;
  padding: 15px 15px 15px 5px;
  max-width: 315px;
  width: 100%;
  font: 400 16px/170% Raleway;
`
export const PromoBtn = styled.button`
  max-width: 50px;
  max-height: 50px;
  font-size: 18px;
  padding: 10px 15px;
  background-color: black;
  color: white;
  align-self: end;
`