import {
  Banner,
  StyledContainer,
  Column,
  Heading,
  SubHeading,
  AboutSection,
  Bullet,
  ServiceText,
  TextContainer,
  WorkFlow,
  WorkFlowHeading,
  ProcessFlow,
  FlowSteps,
  ProcessDivider,
  StepDescription,
} from "./index.styled";
import {
  Card,
  Title,
  Description,
  Grid,
  Background,
} from "../../components/Homepage/Services/index.styled";
import {
  Container,
  Wrapper,
} from "../../components/Homepage/CaseStudies/index.styled";
import ServicesIcon from "../../assets/services-icon.png";
import SectionHeader from "../../components/Section/SectionHeader";
import { ServicesData } from "../../constants/Services";
import { useParams } from "react-router-dom";
import AboutIcon from "../../assets/at.png";
import Check from "../../assets/bullet-check.png";
import { Separator } from "../../components/Homepage/AboutUs/index.styled";
import { cx, css } from "@emotion/css";
import Flow1 from "../../assets/flow-1.png";
import Flow2 from "../../assets/flow-2.png";
import Flow3 from "../../assets/flow-3.png";
import { useEffect } from "react";
import CaseStudiesBanner from "../../assets/case-studies-details.png";
import Google from "../../assets/google.png"
import Blog1 from "../../assets/blog-1.png"
import Natasha from "../../assets/Natasha.png"
import In from "../../assets/In.png"
import Insta from "../../assets/Insta.png"
import Fb from "../../assets/Fb.png"
import Twiter from "../../assets/Twiter.png"
import { styled } from "styled-components";

const Blog = () => {
  const params = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const Container = styled.div`

  `;

  const Banner = styled.div`
  width: 100%;
  height: 500px; 
  background: url(${CaseStudiesBanner}) no-repeat center center;
  background-size: cover;
`;

  const OverlayContent = styled.div`
  width: 80%;
  margin-top: -300px;
  margin-left: auto;
  margin-right: auto;
`;

  const NonOverlayContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;

  const OverlayTextCompany = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

  const Category = styled.div`
  border: 1px solid rgba(41, 41, 48, 1);
  border-radius: 20px;
  color: rgba(41, 41, 48, 1);
  width: max-content;
  padding: 10px 20px;
  margin-right: 25px;
`;

  const Dates = styled.div`
  color: #555;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
  text-align: left;
  font-weight: 500;
`;

  const OverlayHeading = styled.div`
  color: rgba(41, 41, 48, 1);
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 49.73px;
  margin-bottom: 20px;
`;

  const OverlayInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(204, 204, 204, 1);
  margin-bottom: 90px;
  margin-top: 10px;
`
  const OverlayInfoDiv = styled.div`
  align-self: center;
`
  const OverlayInfoDivInner = styled.div`
  display: flex;

`
  const OverlayInfoDivTitle = styled.div`
  color: rgba(41, 41, 48, 1);
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
`
  const OverlayInfoDivDesc = styled.div`
  color: rgba(255, 117, 3, 1);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`

  const OverlayPara = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 90px;
`
  const OverlayParaHeading = styled.div`
  color: rgba(48, 48, 48, 1);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
`

  const OverlayParaPara = styled.p`
  color: rgba(85, 85, 85, 1);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`

  return (
    <Container>
      <Banner />
      <OverlayContent>
        <OverlayTextCompany>
          <Category>Marketing</Category>
          <Dates>October 1, 2023</Dates>
        </OverlayTextCompany>
        <OverlayHeading>How we helped Google to increase conversion rate on G-Suite by 25% in less than 30 days </OverlayHeading>
        <img src={Blog1} alt="" style={{ width: '100%', height: 'auto' }} />
      </OverlayContent>
      <NonOverlayContent>
        <OverlayInfo>
          <OverlayInfoDiv>
            <OverlayInfoDivInner>
              <img src={Natasha} alt="" style={{ width: '100%', height: 'auto', marginRight: 20 }} />
              <div>
                <OverlayInfoDivTitle>Natasha</OverlayInfoDivTitle>
                <OverlayInfoDivDesc>Designer</OverlayInfoDivDesc>
              </div>
            </OverlayInfoDivInner>
          </OverlayInfoDiv>

          <OverlayInfoDiv>
            <img src={Insta} alt="" style={{ marginRight: 30 }} />
            <img src={Fb} alt="" style={{ marginRight: 30 }} />
            <img src={Twiter} alt="" />
          </OverlayInfoDiv>
        </OverlayInfo>
        <OverlayPara>
          <OverlayParaHeading>Project Overview</OverlayParaHeading>
          <OverlayParaPara>
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae vel magnam repudiandae ipsum repellat repudiandae. Voluptate at dolores ut dolor sint occaecati similique. Velit eius ab delectus temporibus.
          </OverlayParaPara>
          <OverlayParaPara>&#8226;  Dolor duis lorem enim eu turpis potenti nulla semper velit sed</OverlayParaPara>
          <OverlayParaPara>&#8226;  Lorem a eget blandit ac neque amet amet non dapibus pulvinar</OverlayParaPara>
          <OverlayParaPara>&#8226;  Pellentesque non integer ac id imperdiet blandit sit bibendum</OverlayParaPara>
          <OverlayParaPara>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nunc donec vel sem ut ipsum odio duis vel sem et ornare consequat. Bibendum nibh et eget magna at habitant mauris nisi pellentesque morbi massa in eleifend tempus pellentesque sed pellentesque ridiculus aliquam maecenas turpis vulputate pellentesque maecenas egestas platea dictumst.
          </OverlayParaPara>
          <OverlayParaPara>
            Lorem ipsum dolor sit amet consectetur adipiscing elit mollis justo integer vitae aliquet elit velit dictum. Commodo facilisi sapien natoque eu elit odio est libero scelerisque urna aliquet id mauris suspendisse.
          </OverlayParaPara>
          <OverlayParaPara>1. The unbanked population, combat counterfeiting and improve cross-border.</OverlayParaPara>
          <OverlayParaPara>2. Transactions to name a few. Even if we disregard the notion of bitcoin as a speculative</OverlayParaPara>
          <OverlayParaPara>3. Even if we disregard the notion of bitcoin as a speculative asset or store of value.</OverlayParaPara>
          <OverlayParaPara>Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae vel magnam repudiandae ipsum repellat repudiandae. Voluptate at dolores ut dolor sint occaecati similique. Velit eius ab delectus temporibus.</OverlayParaPara>
        </OverlayPara>
        
      </NonOverlayContent>
    </Container>
  );
};



export default Blog;
