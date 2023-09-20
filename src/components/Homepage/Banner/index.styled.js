import { styled } from "styled-components";
import BannerImg from "../../../assets/banner-image.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 100%;
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;

  @media (max-width: 750px) {
    height: 800px;
    background: none !important;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 120px 100px;
  width: 90%;

  @media (max-width: 750px) {
    flex-direction: column;
    justify-centent: center; 
    margin: 90px auto 20px !important;
  }
`;

export const Tagline = styled.h2`
  font-weight: 800;
  font-size: 56px;
  margin: 0px;
  width: 100%;

  @media (max-width: 370px) {
    font-size: 52px !important;
  }

  span {
    color: rgba(32, 111, 253, 1);
  }

  @media (max-width: 750px) {
    text-align: center;
  }
`;

export const SubText = styled.p`
  color: #555;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
  width: 570px;
  @media (max-width: 750px) {
    text-align: center;
    padding: 0px 20px;
    margin: 20px auto 0px;
    width: 80%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
  margin-top: 20px;
  gap: 20px;
  padding-bottom: 20px;
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    margin: auto !important;
  }
  @media (max-width: 370px) {
    margin-top: 30px !important;
  }
`;
