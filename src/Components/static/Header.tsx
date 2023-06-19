import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import GlobalButton from "../Reuse/Button";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const onShow = () => {
    if (window.scrollY >= 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", onShow);
  return (
    <div>
    {
      show ? (
        <Container  style={{backgroundColor: "white"}}>
        <Main>
          <Logo>Richard</Logo>
          <NavHolder>
            <Nav>Home</Nav>
            <Icon>
              <RiArrowDropDownLine />
            </Icon>
            <Nav>Pages</Nav>
            <Icon>
              <RiArrowDropDownLine />
            </Icon>
            <Nav>Course</Nav>
            <Icon>
              <RiArrowDropDownLine />
            </Icon>
            <Nav>Features</Nav>
            <Icon>
              <RiArrowDropDownLine />
            </Icon>
            <Nav>Blog</Nav>
            <Icon>
              <RiArrowDropDownLine />
            </Icon>
          </NavHolder>
          <ButtonHold>
            <IconB>
              {" "}
              <GoSearch />{" "}
            </IconB>
            <IconB>
              {" "}
              <BsCart2 />{" "}
            </IconB>
            <GlobalButton w="120px" text="Register" />
          </ButtonHold>
        </Main>
      </Container> 
      ) : (
        <Container style={{backgroundColor: "rgb(254,240,239)"}}>
        <Main>
          <Logo>Richard</Logo>
          <NavHolder>
            <Nav>Home</Nav>
            <Icon>
              <RiArrowDropDownLine />
            </Icon>
            <Nav>Pages</Nav>
            <Icon>
              <RiArrowDropDownLine />
            </Icon>
            <Nav>Course</Nav>
            <Icon>
              <RiArrowDropDownLine />
            </Icon>
            <Nav>Features</Nav>
            <Icon>
              <RiArrowDropDownLine />
            </Icon>
            <Nav>Blog</Nav>
            <Icon>
              <RiArrowDropDownLine />
            </Icon>
          </NavHolder>
          <ButtonHold>
            <IconB>
              {" "}
              <GoSearch />{" "}
            </IconB>
            <IconB>
              {" "}
              <BsCart2 />{" "}
            </IconB>
            <GlobalButton w="120px" text="Register" />
          </ButtonHold>
        </Main>
      </Container>
      )
    }
    </div>
  );
};

export default Header;

const IconB = styled.div`
font-size: 16px;
font-weight: 500;
  padding: 0 20px;
`;
const Icon = styled.div`
  display: flex;
  font-size: 20px;
  padding-right: 20px;
`;

const ButtonHold = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.div`
font-size: 16px;
  color: #3d3d3d;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    color:  rgb(245,105,98);
  }
`;

const NavHolder = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div``;

const Main = styled.div`
  width: 90%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
