import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import img from "../Asset/partner.webp"
import img1 from "../Asset/partner1.webp"
import img2 from "../Asset/partner2.webp"
import img3 from "../Asset/partner3.webp"
import img4 from "../Asset/partner4.webp"

const Body6 = () => {
  return (
    <div>
        <Container>
            <Main>
            <Top>
                <Bigtext>Trusted by our awesome partners</Bigtext>
                <IconHolder>
                <Icon><AiOutlineArrowLeft/></Icon>
                <Icon><AiOutlineArrowRight/></Icon>
                </IconHolder>
                </Top>
                <Buttom>
                    <Image src={img}/>
                    <Image src={img1}/>
                    <Image src={img2}/>
                    <Image src={img3}/>
                    <Image src={img4}/>
                    <Image src={img2}/>
                </Buttom>
            </Main>
        </Container>
    </div>
  )
}

export default Body6

const Image = styled.img``

const Icon = styled.div`
height: 50px;
width: 50px;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
color: grey;
border-radius: 3px;
margin-left: 20px;
background-color: #eeeded;
`;

const IconHolder = styled.div`
display: flex;
`

const Bigtext = styled.div`
font-size: 40px;
font-weight: 500;
`

const Buttom = styled.div`
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 70px;
`
const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

const Main = styled.div`
height: 30vh;
width: 90%;
display: flex;
flex-direction: column;
`

const Container = styled.div`
width: 100%;
height: 50vh;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
`