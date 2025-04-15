import styled from "styled-components";

export const Category = styled.li`
  color: ${(props) => props.isActive ? '#FF8E8E' : '#444444'};
  list-style-type: ${(props) => props.isActive ? 'circle' : 'square'}; 
`