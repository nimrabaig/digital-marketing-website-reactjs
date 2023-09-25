import { styled } from "styled-components";
import ServiceBanner from "../../assets/service-banner.png";

export const StyledContainer = styled.div`
 width: 100%;
 margin: auto;`;

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
  height: 90vh;
  

  @media (max-width: 1000px) {
    background: linear-gradient(111deg, #E9F7FF 9.95%, #FFDBD4 85.17%);
  }

  @media (max-width: 370px) {
    margin-top: 300px;
  }
`;


export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    width: 60%;
    margin: auto !important;
  }
`

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
`

export const SubHeading = styled(Heading)`
color: #555;
font-size: 23px;
font-style: normal;
font-weight: 400;
line-height: 156.5%;

@media (min-width: 1500px) {
  font-size: 40px;
}`