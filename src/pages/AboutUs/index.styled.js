import { styled } from "styled-components";
import BannerImg from "../../assets/about-us-bg.png";
import Button from "../../components/Button";

export const Wrapper = styled.div`
  margin: auto;
  width: 100%;
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 450px;
  align-items: center;
  width: 100%;
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 1024px) {
    height: 350px;
  }

  @media (max-width: 750px) {
    background-position: top center;
    height: 600px;
    background-size: 200%;
  }

  @media (max-width: 375px) {
    height: 278px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  background-size: 55% 800px;
  background-repeat: no-repeat;
  background-position: center left;
  height: 800px;

  @media (max-width: 750px) {
    background: none !important;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 43px 100px 40px auto;
  width: 50%;

  @media (max-width: 750px) {
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

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: 1120px) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  color: #555;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
`;

export const ValuesContainer = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 30px;
  background-color: rgba(41, 41, 48, 1);
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  border-radius: 30px;
  border: 1px solid #424245;
  background: linear-gradient(180deg, #36363e 0%, #292930 100%);
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 300px;
  padding: 50px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

export const Grid = styled.div`
  display: flex;
  height: 505px;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  width: 90%;
  gap: 20px;
  margin: 40px auto;
  justify-content: center;
`;

export const CardText = styled.div`
  color: #d0d0d0;
  text-align: center;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
`;

export const Bar = styled.div`
  width: 20%;
  border: 2px solid #fff;
  margin: 40px 0px 20px;
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid #fff;
  color: #fff;
  background-color: transparent;
`;

export const PrimaryButton = styled(Button)`
position: relative;
  border: 1px solid #fff;
  color: #292930;
  background-color: #fff;
`;
