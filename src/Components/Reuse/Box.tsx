import React from 'react'
import styled from 'styled-components';

interface Ibox {
  bg?: string;
  bgs?: string;
  bsg?: string;
Bt?: string;
St?:string
Img?: string
}
const IBOX:React.FC<Ibox> = ({bg,Bt,St,bgs,Img,bsg}) => {
  return (
    <div>
         <Box bg={`${bg}`} bgs={`${bgs}`}>
                        <SmallBox bsg={`${bsg}`}>
                          <img src=
                          {Img} alt="" />
                        </SmallBox>
                        <BigText>{Bt}</BigText>
                        <SmallText>{St}</SmallText>
                    </Box>
    </div>
  )
}

export default IBOX

const SmallText = styled.div`
font-size: 18px;
color: #292929;
`;

const BigText = styled.div`
font-size: 24px;
margin: 10px 0;
`;

const SmallBox = styled.div<{bsg: string}>`
height: 60px;
width: 60px;
display: flex;
align-items: center;
justify-content: center;
background-color: ${({bsg})=> bsg};

img{
  width: 30px;
}
`;

const Box = styled.div<{bg: string, bgs: string }>`
height: 330px;
width: 250px;
display: flex;
padding: 0 20px;
margin: 10px 0;
border-radius: 5px;
flex-direction: column;
justify-content: center;
cursor: pointer;
transition: all 600ms;
 background-color: ${({bg})=> bg};

 :hover{
  background-color: ${({bgs})=> bgs};
 }

 :hover ${SmallText}{
  color: white;
 }
 :hover ${BigText}{
  color: white;
 }

 :hover ${SmallBox}{
  background-color: white;
 }

`;
