import React from "react";
import styled from "styled-components";
import {FaFacebookF,FaTwitter,FaLinkedinIn} from "react-icons/fa"
import {IoLogoGoogle} from "react-icons/io"




const Footer = () => {

  const data:any=[
    {
      title: "Home Pages",
      item: "Home v1",
      item1: "Home v2",
      item2: "Home v3",
    },
    {
      title: "Courses",
      item: "All Courses",
      item1: "Design",
      item2: "Development",
      item3: "Marketing",
      item4: "Photograpy",
    },
    {
      title: "Pages",
      item: "Blog",
      item1: "Blog Detail",
      item2: "Courses",
      item3: "contact us",
      item4: "Teacher Profile",
      item5: "404 page",
    },
    {
      title: "Features",
      item: "Courses Detail V1",
      item1: "Courses Detail V2",
    },
  ]

  return (
    <div>
      <Container>
        <Main>
         <Wrap>
         {
          data.map((el:any)=>(
            <Holder>
            <Title>{el.title}</Title>
            <List>{el.item}</List>
            <List>{el.item1}</List>
            <List>{el.item2}</List>
            <List>{el.item3}</List>
            <List>{el.item4}</List>
            <List>{el.item5}</List>
          </Holder>
          ))
         }
         </Wrap>
         <Below>
          <Text>
            @ 2021 Skilify Education Private Limited. All rights reserved
          </Text>
          <Social>
<Icon/>
<Icon1/>
<Icon2/>
<Icon3/>
          </Social>
         </Below>
        </Main>

      </Container>
    </div>
  );
};

export default Footer;
const Text= styled.div`
color: #919285;
font-size: 20px;

margin-top: 20px;
`
const Icon3=styled(FaLinkedinIn)`margin: 0 10px;
font-size: 23px;

:hover{
  cursor: pointer;
  transition: all 350ms;
  color: white;
}

`
const Icon2=styled(IoLogoGoogle)`margin: 0 10px;
font-size: 23px;

:hover{
  cursor: pointer;
  transition: all 350ms;
  color: white;
}
`
const Icon1=styled(FaTwitter)`margin: 0 10px;
font-size: 23px;

:hover{
  cursor: pointer;
  transition: all 350ms;
  color: white;
}
`
const Icon=styled(FaFacebookF)`margin: 0 10px;
font-size: 23px;

:hover{
  cursor: pointer;
  transition: all 350ms;
  color: white;
}
`

const Social = styled.div`
display: flex;
color: #919285;
margin-top: 20px;
`
const Below = styled.div`
display: flex;
align-items: center;
height: 55px;
justify-content: space-between;
border-top: 1px solid #919285;
`
const Wrap = styled.div`
display: flex;
`
const List = styled.div`
color: #919285;
font-size: 18px;
margin: 10px 0;

:hover{
  cursor: pointer;
  transition: all 350ms;
  color: white;
}
`;
const Title = styled.div`
margin-top: 50px;
margin-bottom: 20px;
font-size: 22px;
font-weight: 600;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
color: white;
`;
const Holder = styled.div`
width: 300px;
min-height: 200px;
flex-direction: column;
display: flex;
`;
const Main = styled.div`
  width: 90%;
  height: 95%;
  /* background-color: #1d1d79; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 450px;
  background-color: #33333d;
  display: flex;
  justify-content: center;
  align-items: center;
`;
