import React from "react";
import styled from "styled-components";
import GlobalButton from "../Components/Reuse/Button";
import MainBox from "../Components/Reuse/MainBox";
import img from "../Asset/crd-img2.webp"
import img1 from "../Asset/crd-img3.webp"
import img2 from "../Asset/crd-img2.webp"
import img3 from "../Asset/profile-img4.webp"
import img4 from "../Asset/profile-img5.webp"
import img5 from "../Asset/profile-img4.webp"
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const Body2 = () => {
  return (
    <div>
      <Container>
        <Main>
          <Top>
            <Text>Get choice of your course</Text>
            <GlobalButton w="100px" text="View All"/>
          </Top>
          <Holder>
            <MainBox Img={img} Bimg={img3} T1="$150.00" T2="$200.00"/>
            <MainBox Img={img1} Bimg={img4} T1="$99.00" T2="$150.00"/>
            <MainBox Img={img2} Bimg={img5} T1="$70.00" T2="$100.00"/>
          </Holder>
          <Bottom>
            <Icon><AiOutlineArrowLeft/></Icon>
            <Line/>
            <Line1/>
            <Icon><AiOutlineArrowRight/></Icon>
          </Bottom>
        </Main>
      </Container>
    </div>
  );
};

export default Body2;

const Line1 = styled.div`
width: 500px;
height: 4px;
background-color: orange;
`;

const Line = styled.div`
width: 500px;
height: 4px;
background-color: white;
`;

const Icon = styled.div`
height: 50px;
width: 50px;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
color: gray;
border-radius: 5px;
background-color: white;
`;

const Bottom = styled.div`
width: 90%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Holder = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
`;

const Top = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Text = styled.div`
font-size: 44px;
font-weight: 500;
`;

const Main = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Container = styled.div`
width: 100%;
height: 120vh;
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(239,239,246);
`;
