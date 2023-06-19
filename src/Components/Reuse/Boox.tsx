import React from 'react'
import styled from 'styled-components'
import img from "../../Asset/star.svg"

interface Ibox {
    Image?: string
}

const Boox:React.FC<Ibox> = ({Image}) => {
  return (
    <div>
                        <Card>
                    <Holder>
                    <Hold>
                    <Pic src={Image}/>
                        <Text>
                            Jenie johnson<br/><span>student</span>
                        </Text>
                    </Hold>
                    <Star src={img}/>
                    <Star src={img}/>
                    <Star src={img}/>
                    <Star src={img}/>
                    </Holder>
                    <MainText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium voluptatibus fuga veritatis maxime vero</MainText>
                </Card>
    </div>
  )
}

export default Boox

const MainText = styled.div`
margin: 20px 0;
color: gray;
font-weight: 500;
`

const Hold = styled.div`
width: 100%;
display: flex;
align-items: center;
`

const Holder = styled.div`
display: flex;
justify-content: space-between;
`

const Star = styled.img``

const Text = styled.div`
font-size: 24px;
font-weight: 5;
font-weight: 500;
color: #202020;

span{
    font-size: 16px;
      color: silver;
}
`

const Pic = styled.img`
height: 60px;
width: 60px;
color: black;
margin-right: 20px;
border-radius: 50%;
`

const Card = styled.div`
width: 500px;
height: 180px;
display: flex;
padding: 0 40px;
flex-direction: column;
justify-content: center;
margin-top: 80px;
background-color: whitesmoke;
border-radius: 0 40px 0 0;
transition: all 400ms;

:hover{
  border-left: 3px solid orange;
  background-color: white;
}
`