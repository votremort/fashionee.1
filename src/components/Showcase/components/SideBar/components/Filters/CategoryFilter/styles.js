import styled from "styled-components";

export const Category = styled.li`
  color: ${(props) => props.isActive ? '#FF8E8E' : '#444444'};
  list-style-type: ${(props) => props.isActive ? 'circle' : 'square'}; 
`
export const Categories = styled.section`
  display: flex;
  flex-direction: column;
`
export const Title = styled.div`
  font: 400 24px/180% Josefin Sans;
  border-bottom: 2px solid black;
  text-align: left;
`
export const CtgList = styled.ul`
  list-style-position: inside;
  padding: 15px;
  text-align: left;
`
export const CtgLink = styled.p`
  font: 400 16px/170% Raleway;
  display: contents;
`