import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;

const Image = styled.img`
  max-width: 100px;
  position: absolute;
  left: 20px;
  @media only screen and (max-width: 1000px) {
      display: none;
  }
`;

const Link = styled.div`
  color: white;
  font-size: 40px;
  float: right;
  margin: 0px 20px;
  @media only screen and (max-width: 1000px) {
    font-size: 20px;
}
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Image src="./logo.png"></Image>
        <Link> Link 2</Link>
        <Link> Link 1</Link>
      </Container>
    </>
  );
};

export default Navbar;
