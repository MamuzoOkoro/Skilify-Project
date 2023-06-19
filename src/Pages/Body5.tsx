import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import img2 from "../Asset/user.webp"
import img3 from "../Asset/user1.webp"
import Boox from '../Components/Reuse/Boox'

const Body5 = () => {
  return (
    <div>
        <Container>
            <Main>
                <Top>
                <Bigtext>What our students have to say</Bigtext>
                <IconHolder>
                <Icon><AiOutlineArrowLeft/></Icon>
                <Icon><AiOutlineArrowRight/></Icon>
                </IconHolder>
                </Top>
                <Bottom>
                <Boox Image={img2}/>
                <Boox Image={img3}/>
                </Bottom>
                
            </Main>
        </Container>
    </div>
  )
}

export default Body5


const Bottom = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

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
background-color: white;
`;

const IconHolder = styled.div`
display: flex;
`

const Bigtext = styled.div`
font-size: 46px;
font-weight: 500;
`

const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

const Main = styled.div`
width: 90%;
display: flex;
flex-direction: column;
`

const Container = styled.div`
width: 100%;
height: 70vh;
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(239,239,246);
`