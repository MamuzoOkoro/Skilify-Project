import React from 'react'
import styled from 'styled-components'
import img1 from "../Asset/circle1.png"
import img2 from "../Asset/circle (1).svg"
import img3 from "../Asset/circle2.png"
import img4 from "../Asset/circle3.png"
import img5 from "../Asset/circle5.png"
import img6 from "../Asset/circle (1).svg"
import img7 from "../Asset/circle6.png"
import img8 from "../Asset/circle7.png"
import GlobalButton from '../Components/Reuse/Button'

const Body3 = () => {
  return (
    <div>
        <Container>
            <Main>
                <Image1 src={img1}/>                
                <Image2 src={img2}/>                
                <Image3 src={img3}/>                
                <Image4 src={img4}/>                
                <Holder>
                <Bigtext>Select the best from various online courses.</Bigtext>
                <Smalltext>Our online video courses give you the freedom to learn remotely, and our experts will</Smalltext>
                <Smalltext1>guide you properly.</Smalltext1>
                <GlobalButton w="120px" text='join Today'/>
                </Holder>
                <Image5 src={img5}/>  
                <Image6 src={img6}/>  
                <Image7 src={img7}/>  
                <Image8 src={img8}/>  
            </Main>
        </Container>
    </div>
  )
}

export default Body3

const Image8 = styled.img`
top: 420px;
right: 240px;
width: 90px;
position: absolute;

`

const Image7 = styled.img`
top: 250px;
right: 120px;
width: 90px;
position: absolute;
`

const Image6 = styled.img`
top: 90px;
right: 40px;
width: 90px;
position: absolute;
`
const Image5 = styled.img`
top: 100px;
right: 150px;
width: 90px;
position: absolute;
`
const Image4 = styled.img`
top: 420px;
left: 160px;
width: 90px;
position: absolute;
`
const Image3 = styled.img`
top: 320px;
left: 110px;
width: 90px;
position: absolute;
`
const Image2 = styled.img`
top: 250px;
left: 180px;
width: 90px;
position: absolute;
`
const Image1 = styled.img`
top: 100px;
left: 150px;
width: 90px;
position: absolute;
`

const Smalltext1 = styled.div`
font-size: 18px;
margin-bottom: 30px;
color: grey;
`
const Smalltext = styled.div`
font-size: 18px;
color: grey;
`

const Bigtext = styled.div`
font-size: 38px;
font-weight: 500;
margin: 20px 0;
`

const Holder = styled.div`
width: 70%;
display: flex;
align-items: center;
flex-direction: column;
`

const Main = styled.div`
width: 90%;
height: 70vh;
display: flex;
align-items: center;
justify-content: center;
/* background-color: darkcyan; */
`

const Container = styled.div`
width: 100%;
height: 90vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;
background-color: rgb(254,240,239);
`