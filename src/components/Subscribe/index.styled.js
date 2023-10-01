import { styled } from "styled-components";
import { Input } from "../../components/Footer/index.styled";
import Bg from "../../assets/subscribe-bg.png";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 100px auto;
  padding-top: 30px;
  background-image: url(${Bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.div`
  color: ${(props) => props.color ?? "#fff"};
  font-family: Nunito;
  font-size: 45px;
  font-style: normal;
  font-weight: 800;
  line-height: 110.5%; /* 49.725px */
  text-align: center;
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 43%;

  @media (max-width: 500px) {
    width: 70%;
  }
`;

export const EmailInput = styled(Input)`
  background-color: #5b5b61;
  height: 21.5px;
  width: 50%;
  @media (max-width: 750px) {
    width: 70%;
  }
`;
