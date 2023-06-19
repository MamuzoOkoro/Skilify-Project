import React from 'react'
import styled from 'styled-components'
import GlobalButton from '../Components/Reuse/Button'
import img from "../Asset/check-point (1).svg"
import Img from "../Asset/know-about (2).webp"

const Body4 = () => {
  return (
        <Container>
            <Main>
                <Left>
                    <Bigtext>Get more close with your courses.</Bigtext>
                    <Smalltext>We provide a wide range of courses for the different <br/>sectors you can choose from, which suits you perfectly</Smalltext>
                    <Holder>
                    <div>
                        <Icon src={img}/>
                        <Text>Detail description of each course</Text>  </div>
                    <div>
                        <Icon src={img}/>
                        <Text>Detail description of each course</Text>  </div>
                    <div>
                        <Icon src={img}/>
                        <Text>Detail description of each course</Text>  </div>
                    </Holder>
                    <GlobalButton w="180px" text='Start Learning Now'/>
                   
                </Left>
                <Right>
                    <Border></Border>
                    <Image src={Img}/>
                </Right>
            </Main>
        </Container>
  
  )
}

export default Body4

const Image = styled.img`
top: 100px;
right: 130px;
/* width: 450px; */
width: 480px;
height: 590px;
position: absolute;
`

const Border = styled.div`
width: 480px;
height: 590px;
left: 100px;
border-radius: 0 200px 0 0;
position: relative;
border: 5px solid rgb(245,105,98);
`

const Text = styled.div``

const Icon = styled.img``

const Holder = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 40px;

div{
    margin: 3px 0;
    display: flex;
    align-items: center;
}
`

const Smalltext = styled.div`
font-size: 20px;
margin: 15px 0;
`

const Bigtext = styled.div`
font-size: 46px;
font-weight: 500;
`

const Left = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
`

const Right = styled.div`
width: 50%;
height: 100%;
`

const Main = styled.div`
width: 90%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`

const Container = styled.div`
width: 100%;
height: 120vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;
background-color: white;
`