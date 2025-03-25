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