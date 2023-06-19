import React from "react";
import styled from "styled-components";

interface iBtn {
  text?: string;
  w?: string
}

const GlobalButton: React.FC<iBtn> = ({ text, w }) => {
return <Container w={`${w}`}>{text}</Container>;
};

export default GlobalButton;

const Container = styled.div<{w: string}>`
height: 50px;
width: ${({w}) => w};
  display: flex;
  color: white;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  justify-content: center;
  background-color: rgb(245,105,98);
  transition: all 350ms;

  :hover{
    transform: translate(0, 1px);
    box-shadow: -2px 5px 14px -1px rgba(245,105,98,0.83);
-webkit-box-shadow: -2px 5px 14px -1px rgba(245,105,98,0.83);
-moz-box-shadow: -2px 5px 14px -1px rgba(245,105,98,0.83);
  }
`;
