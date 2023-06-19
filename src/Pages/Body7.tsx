import React from 'react'
import styled from 'styled-components'
import Boox2 from '../Components/Reuse/Boox2'


const Body7 = () => {
  return (
    <div>
        <Container>
            <Main>
                <Boox2 w='180px' text='Apply AS Teacher'/>
                <Boox2 w='200px' text='Get Skillify For Business '/>
            </Main>
        </Container>
    </div>
  )
}

export default Body7

const Main = styled.div`
height: 30vh;
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
`

const Container = styled.div`
width: 100%;
height: 60vh;
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(254,240,239);
`