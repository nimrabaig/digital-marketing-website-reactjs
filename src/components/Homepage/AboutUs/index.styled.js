import { styled } from "styled-components";
import AboutUsBg from "../../../assets/about-us.png";

export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 100px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url(${AboutUsBg});
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
    background-position: center left;
  background-size: 68%;

  @media (min-width: 1500px) {
    background-size: 50%;
    height: max-content;
  }
  @media (min-width: 1200px) {
    background-position: center left;
  }
  @media (max-width: 1000px) {
    background: none !important;
    height: max-content;
  }

  @media (max-width: 370px) {
    margin-top: 300px;
  }

  /* @media (max-width: 1200px) and (min-height: 1250px) {
    background: none !important;
  } */
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 43px 100px;
  width: 50%;
  margin-left: auto;
  margin-right: 70px;

  /* @media (max-width: 1000px) {
    margin: 90px auto 40px;
    width: 90%;
  } */

  @media (max-width: 750px) {
    flex-direction: column;
    width: 90%;
  }

  @media (max-width: 370px) {
    margin: auto !important;
    text-align: center;
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 30px;

  @media (max-width: 750px) {
    flex-direction: column !important;
    justify-content: center;
    text-align: center !important;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Separator = styled.hr`
  width: 90%;
  border: 0.2px solid rgba(207, 207, 207, 0.7);
  margin: 20px 0px;
`;

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ServiceHeader = styled.div`
  margin-left: 12%;
  display: flex;
  align-items: center;
  width: 90%;

  @media (max-width: 1000px) {
    width: 100%;
    margin: auto !important;
  }
`;

export const ServiceText = styled.span`
  color: #555;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  text-align: left !important;

  @media (min-width: 1500px) {
    font-size: 23px;
  }
`;

export const ServiceDetail = styled.span`
  margin-left: 12%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 90%;
  color: #555;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */

  @media (max-width: 1000px) {
    width: 100%;
    margin: 20px auto !important;
    text-align: center;
  }

  @media (min-width: 1500px) {
    font-size: 23px;
  }
`;

