import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`
export const ContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 200px;
`
export const Content = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Raleway", sans-serif;
`
export const ContentTitle = styled.h1`
 font: 400 80px/100% Josefin Sans;
`
export const ContentNav = styled.div`
  display: flex;
  border-left: 2px solid black;
`
export const ContentImg = styled.img`
  width: 600px;
  height: 350px;
  background-color: rgb(241, 242, 243);
`