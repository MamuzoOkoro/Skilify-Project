import React from 'react'
import styled from 'styled-components'
import GlobalButton from '../Components/Reuse/Button'
import IBOX from '../Components/Reuse/Box'
import img from "../Asset/pantone (1).svg"
import img1 from "../Asset/monitor (1).svg"
import img2 from "../Asset/shake (1).svg"
import img3 from "../Asset/briefcase (1).svg"
import img4 from "../Asset/volume-up (1).svg"
import img5 from "../Asset/camera (1).svg"
import img6 from "../Asset/heart (1).svg"
import img7 from "../Asset/cast (1).svg"

const Body = () => {
  return (
    <div>
        <Container>
            <Main>
                <Top>
                <Text>Choice favourite course from top category</Text>
                <GlobalButton w="180px" text="See All Categories" />
                </Top>
                <Holder>
                   <IBOX bgs='darkblue' bg=' rgb(239,239,246)' bsg='rgb(226,221,255)' Bt='Design' St='Learn how to design your website. We have a wide range of designing courses
                        from which you can select the best that suits you' Img={img}/>
                   <IBOX bgs='orange' bg=' rgb(254,243,232)'Bt='Design' bsg='rgb(250,224,208)' St='Learn how to design your website. We have a wide range of designing courses 
                        from which you can select the best that suits you' Img={img1}/>
                   <IBOX bgs='skyblue' bg=' rgb(221,247,255)' Bt='Design' bsg='rgb(187,240,255)' St='Learn how to design your website. We have a wide range of designing courses
                        from which you can select the best that suits you' Img={img2}/>
                   <IBOX bgs='lightgreen' bg=' rgb(230,250,234)' Bt='Design' bsg='rgb(206,246,214)' St='Learn how to design your website. We have a wide range of designing courses
                        from which you can select the best that suits you' Img={img3}/>
                   <IBOX bgs='lightgreen' bg=' rgb(230,250,234)' Bt='Design' bsg='rgb(206,246,214)' St='Learn how to design your website. We have a wide range of designing courses
                        from which you can select the best that suits you' Img={img4}/>
                   <IBOX bgs='skyblue' bg=' rgb(221,247,255)' Bt='Design' bsg='rgb(187,240,255)' St='Learn how to design your website. We have a wide range of designing courses
                        from which you can select the best that suits you' Img={img5}/>
                   <IBOX bgs='orange' bg=' rgb(254,243,232)' Bt='Design' bsg='rgb(250,224,208)' St='Learn how to design your website. We have a wide range of designing courses
                        from which you can select the best that suits you' Img={img6}/>
                   <IBOX bgs='darkblue' bg=' rgb(239,239,246)' Bt='Design' bsg='rgb(226,221,255)' St='Learn how to design your website. We have a wide range of designing courses
                        from which you can select the best that suits you' Img={img7}/>
                </Holder>
            </Main>
        </Container>
    </div>
  )
}

export default Body


const Holder = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin: 20px 0px;
`;

const Text = styled.div`
font-size: 40px;
font-weight: 500;
color: black;
`

const Top = styled.div`
width: 100%;
height: 60px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

const Main = styled.div`
width: 90%;
height: 800px;
display: flex;
flex-direction: column;
`

const Container = styled.div`
width: 100%;
height: 850px;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
`