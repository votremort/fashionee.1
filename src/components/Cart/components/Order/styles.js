import styled from "styled-components";

export const Order = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
 max-width: 270px;
 width: 100%;
 padding: 40px;

`
export const Title = styled.div`
  font: 400 32px/120% Josefin Sans;
  text-align: left;
  text-transform: capitalize;
`
export const Row = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
`
export const Text = styled.p`
  font: 400 16px/170% Raleway;
  color: rgb(68, 68, 68);
  text-align: left;
`
export const Values = styled.p`
  font: 400 20px/100% Josefin Sans;
  color: rgb(68, 68, 68);
  text-align: right;
`
export const CheckoutBtn = styled.button`
  background: rgb(0, 0, 0);
  max-width: 275px;
  font: 600 16px/100% Raleway;
  color: rgb(255, 255, 255);
  padding: 17px 100px;
`