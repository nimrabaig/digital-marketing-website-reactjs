import { styled } from "styled-components";
import BenefitsBg from "../../../assets/benefits-bg.png";

export const Wrapper = styled.div`
  width: 100%;
    background-image: url(${BenefitsBg});
    background-color: white;
    background-size: 55% 820px;
    background-repeat: no-repeat;
    height: 820px;
    background-position: left bottom;
    margin-top: 100px;

  @media (max-width: 1024px) {
    height: 800px;
    background: none !important;
  }

  @media (max-width: 370px) {
    margin-top: 300px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 90%;
     margin: auto;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 43px 100px;
  width:60%;
  margin-left: auto;
  margin-right: 100px;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 90px auto 20px !important;
    width: 90%;
  }

  @media (max-width: 370px) {
    margin: auto !important;
    text-align: center;
    width: 100%;
  }
`;

export const Separator = styled.hr`
  width: 90%;
  border: 0.2px solid rgba(207, 207, 207, 0.7);
  margin: 20px 0px;
`;

export const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
`;

export const BenefitHeader = styled.div`
  margin-left: 12%;
  display: flex;
  align-items: center;
  width: 90%;


  @media (max-width: 1024px) {
    width: 100%;
    margin: auto !important;
  }
`;

export const BenefitTitle = styled.span`
  color: #555;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;

export const BenefitDescription = styled.span`
  margin-left: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  color: #555;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */

  @media (max-width: 370px) {
    width: 100%;
    margin: 20px auto !important;
  }
`;
