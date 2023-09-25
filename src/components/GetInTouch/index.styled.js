import { styled } from "styled-components";
import { ButtonContainer } from "../../pages/AboutUs/index.styled";
import Bg from "../../assets/get-in-touch.png";

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  background-color: #fff;

  @media (max-width: 750px) {
    height: 800px;
    background: linear-gradient(111.23deg, #e9f7ff 9.95%, #ffdbd5 85.17%);
  }

  @media (max-width: 370px) {
    margin-top: 300px;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  position: relative;
  background-image: url(${Bg});
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin: 60px auto;
  min-height: 433px;
  @media (max-width: 750px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: absolute;
  bottom: -70px;
  left: 10%;
  display: flex;
  justify-content: center;
  padding: 100px 80px;
  text-align: left;
  flex-direction: column;

  @media (max-width: 750px) {
    position: relative;
    left: 0px;
    text-align: center;
    padding: 80px 30px;
  }

  @media (min-width: 1700px) {
    left: 20%;
  }

  @media (min-width: 2350px) {
    left: 25%;
  }

  @media (min-width: 3000px) {
    left: 35%;
  }
`;

export const Text = styled.div`
  color: ${(props) => props.color};
  font-family: Nunito;
  font-size: 45px;
  font-style: normal;
  font-weight: 800;
  line-height: 110.5%; /* 49.725px */
`;

export const Flex = styled(ButtonContainer)`
  margin-top: 40px;

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
