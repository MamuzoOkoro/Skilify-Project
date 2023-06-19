import React from 'react'
import styled from 'styled-components'
import { GoSearch } from "react-icons/go"
import img1 from "../Asset/girl-img-study.webp"

const Homescreen = () => {
  return (
    <div>
      <Container>
        <Main>
          <Left>
            <Big>Learn more and make success the result of perfection.</Big>
            <Small>pick from over 100,000 online videos courses with new<br/> addition published every month</Small>
            <InputHolder>
            <Input placeholder='Search your favorite course'/>
            <Icon><GoSearch/></Icon>
            </InputHolder>
          </Left>
          <Right>
            <Border/>
            <Img1 src={img1}/>
          </Right>
        </Main>
      </Container>
    </div>
  )
}

export default Homescreen

const Border = styled.div`
width: 380px;
height: 500px;
border-radius: 20px;
position: relative;
border: 3px solid rgb(245,105,98);
`;

const Img1 = styled.img`
bottom: 10px;
right: 130px;
width: 400px;
height: 500px;
position: absolute;
`;

const Icon = styled.div`
height: 60px;
width: 70px;
font-size: 20px;
display: flex;
align-items: center;
border-radius: 0 5px 5px 0;
justify-content: center;
background-color: rgb(245,105,98);
transition: all 350ms;

:hover{
  transform: translate(0, 1px);
  box-shadow: 2px 41px 38px -2px rgba(249,205,202,0.81);
-webkit-box-shadow: 2px 41px 38px -2px rgba(249,205,202,0.81);
-moz-box-shadow: 2px 41px 38px -2px rgba(249,205,202,0.81);
}
`

const Input = styled.input`
height: 60px;
width: 480px;
outline: none;
border: none;
border-radius:  5px 0 0 5px;
padding: 0 10px;
font-size: 16px;
font-weight: 500;
`

const InputHolder = styled.div`
width: 550px;
margin: 30px 0;
display: flex;
align-items: center;
box-shadow: 2px 41px 38px -2px rgba(249,205,202,0.81);
-webkit-box-shadow: 2px 41px 38px -2px rgba(249,205,202,0.81);
-moz-box-shadow: 2px 41px 38px -2px rgba(249,205,202,0.81);
`

const Small = styled.div`
font-size: 20px;
font-weight: 600;
color: gray;
`

const Big = styled.div`
font-size: 50px;
font-weight: 700;
line-height: 1.1;
margin-bottom: 25px;
`

const Right = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: flex-end;
justify-content: flex-end;
/* background-color: aliceblue; */
`

const Left = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
`

const Main = styled.div`
width: 90%;
height: 600px;
display: flex;
align-items: center;
justify-content: center;
`

const Container = styled.div`
width: 100%;
height: 700px;
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(254,240,239);
`