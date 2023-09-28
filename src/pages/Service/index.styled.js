import { styled } from "styled-components";
import ServiceBanner from "../../assets/service-banner.png";
import AboutService from "../../assets/service-about.png";
import { TextContent } from "../../components/Homepage/AboutUs/index.styled";
import { Divider } from "../../components/Homepage/OurProcess/index.styled";
import { Description } from "../../components/Homepage/Services/index.styled";

export const StyledContainer = styled.div`
  width: 100%;
  margin: auto;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url(${ServiceBanner});
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;
  background-position-x: 115%;
  margin-top: 100px;
  height: 700px;

  @media (max-width: 1000px) {
    background: linear-gradient(111deg, #e9f7ff 9.95%, #ffdbd4 85.17%);
  }

  @media (max-width: 370px) {
    margin-top: 300px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  margin-left: 10%;
  width: 40%;
  gap: 20px;
  margin-top: auto;
  margin-bottom: auto;
  text-align: left;

  @media (max-width: 1000px) {
    align-self: center;
    text-align: center;
    width: 100%;
    margin: auto !important;
  }
`;

export const Heading = styled.div`
  color: #292930;
  font-family: Nunito;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: 110.5%; /* 77.35px */
  @media (min-width: 1500px) {
    font-size: 80px;
  }
`;

export const SubHeading = styled(Heading)`
  color: #555;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%;

  @media (min-width: 2000px) {
    font-size: 30px;
  }
`;

export const AboutSection = styled.div`
  display: flex;
  width: 100%;
  background-image: url(${AboutService});
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 68%;
  min-height: 700px;

  @media (min-width: 1500px) {
    background-size: 50%;
    height: max-content;
  }
  @media (min-width: 2000px) {
    background-size: 38% !important;
    background-position-x: 20%;
  }
  @media (max-width: 1000px) {
    background: none !important;
    height: max-content;
  }

  @media (max-width: 370px) {
    margin-top: 300px;
  }
`;

export const Bullet = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: flex-start;
  justify-content: center;
  gap: 20px;
  @media (max-width: 1000px) {
    width: 90%;
    margin: auto;
  }
`;

export const ServiceText = styled.div`
  color: #555;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
  margin-right: auto;
`;

export const TextContainer = styled(TextContent)`
  margin-right: 75px;
`;

export const WorkFlow = styled.div`
  background: linear-gradient(
    111deg,
    #e9f7ff 9.66%,
    #ffdbd4 57.52%,
    #fff3ca 103.42%
  );
      display: flex;
    justify-content: center;
  margin: auto;
  min-height: 600px;
  width: 70%;
  color: #292930;
  display: flex;
  padding: 60px;
  margin-bottom: 100px;
  margin-top: 100px;

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 20px;
    width: 90%;
    margin-top: 60px;
  }
`;

export const WorkFlowHeading = styled(Heading)`
  font-size: 40px;
  font-weight: 600;
  line-height: 110.5%; /* 44.2px */
`;

export const ProcessFlow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 10px;
  width: 40%;

  @media (max-width: 750px) {
    width: 100%;
    gap: 14px;
  }
`;

export const FlowSteps = styled.div`
  display: flex;
`;

export const ProcessDivider = styled(Divider)`
  height: 115px;

  @media (max-width: 1000px) {
    margin: 0px;
  }
`;

export const StepDescription = styled(Description)`
color: rgba(85, 85, 85, 1);

@media (max-width: 450px) {
  display: none;
}`
