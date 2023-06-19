import React from 'react'
import styled from 'styled-components'
import GlobalButton from './Button';
import img from "../../Asset/apply-crd-img.webp"

interface iProps {
    Bt?: string;
    St?: string
    w?: string
    text?: string
}

const Boox2:React.FC<iProps> = ({Bt,St,w,text}) => {
  return (
    <div>
        <Container>
            <Pic src={img}/>
            <Holder>
                <Bigtext>Become a teacher</Bigtext>
                <Smalltext>Teach what you love. Coursector gives you the tools to create a course.</Smalltext>
                <BHolder>
                <GlobalButton w={`${w}`} text={`${text}`}/>
                </BHolder>
            </Holder>
        </Container>
    </div>
  )
}

export default Boox2

const Smalltext = styled.div`
color: #727272;
margin-bottom: 15px;
`

const Bigtext = styled.div`
font-size: 20px;
font-weight: 500;
margin-bottom: 10px;
`

const BHolder = styled.div`
width: 230px;
`

const Holder = styled.div`
`

const Pic = styled.img`
width: 80px;
height: 70px;
color: black;
background-color: black;
margin-right: 20px;
border-radius: 50%;
`

const Container = styled.div`
width: 500px;
height: 130px;
display: flex;
padding: 40px 40px;
flex-direction: column;
justify-content: center;
flex-direction: row;
 border-radius: 3px;
background-color: white;
`