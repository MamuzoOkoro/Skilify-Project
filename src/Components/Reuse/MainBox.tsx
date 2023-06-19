import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../../Asset/star.svg"
import img1 from "../../Asset/crd-view (1).svg"
import img2 from "../../Asset/crd-play (1).svg"
import {AiOutlineHeart} from 'react-icons/ai'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'

interface Iglobal{
    Img?: string;
    Bimg?: string
    T1?: string
    T2?: string
}

const MainBox:React.FC<Iglobal> = ({Img,Bimg,T1,T2}) => {
    
const [toggle, setToggle] =  useState<boolean>(false);
const onToggled = () => {
    setToggle(!toggle);
 };
  return (
    <div>
        <Container>
           <Box1 src={Img}/>
           {/* <Heart><AiOutlineHeart/></Heart> */}
           <Heart onClick={() => {
            onToggled();
          }}>
            {toggle ? (<MdFavorite  color="Red"/>
            ) : (<MdFavoriteBorder />)}
        
          </Heart>
           <Box2>
            <SmallBox>
                <Icon src={img}/>
                <Num>4.5</Num>
            </SmallBox>
            <SmallBox>
                <Icon src={img1}/>
                <Num>40,000</Num>
            </SmallBox>
            <SmallBox>
                <Icon src={img2}/>
                <Num>9</Num>
            </SmallBox>
           </Box2>
           <Box3>Learn Python Programming Beginner</Box3>
           <Box4>
            <Holder>
                <Box src={Bimg}/>
                <Text>petey crusir</Text>
            </Holder>
            <Money>
                <Text1>{T2}</Text1>
                <Text2>{T1}</Text2>
            </Money>
           </Box4>
        </Container>
    </div>
  )
}

export default MainBox

const Heart = styled.div`
color: white;
top: 20px;
right: 30px;
font-size: 30px;
position: absolute;
`

const Num = styled.div``

const Icon = styled.img`
margin-right: 3px;
`

const SmallBox = styled.div`
display: flex;
`

const Text2 = styled.div`
color: orange;
font-size: 20px;
font-weight: 700;
margin-left: 5px;
`

const Text1 = styled.div`
color: #a1a1a1;
font-size: 18px;
margin-top: 5px;
`

const Money = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const Text = styled.div`
color: gray;
`

const Box = styled.img`
height: 40px;
width: 40px;
border-radius: 10px;
margin-right: 5px;
background-color: black;
`

const Holder = styled.div`
display: flex;
align-items: center;
`

const Box4 = styled.div`
height: 50px;
width: 350px;
display: flex;
align-items: center;
margin: 10px 0;
justify-content: space-between;
`

const Box3 = styled.div`
width: 350px;
font-size: 24px;
font-weight: 500;
`

const Box2 = styled.div`
height: 50px;
width: 350px;
display: flex;
border-bottom: 1px solid silver;
align-items: center;
justify-content: space-between;
`

const Box1 = styled.img`
height: 230px;
width: 350px;
border-radius: 5px;
background-color: aquamarine;
`

const Container = styled.div`
height: 440px;
width: 390px;
display: flex;
margin: 50px 0;
align-items: center;
position: relative;
border-radius: 5px;
justify-content: center;
flex-direction: column;
background-color: white;
transition: all 600ms;

:hover{
    cursor: pointer;
    transform: translate(0, -20px);
}
`