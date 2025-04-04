import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin: 30px 0 0 0;
  font-size: 24px;
  justify-content: center;
`

export const Page = styled.div`
color: ${(props) => props.isCurrent ? 'red' : 'black'};

cursor: pointer;
  &:hover {
    color: ${(props) => props.isCurrent ? 'black' : 'red'};
  }
`