import { styled } from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 55%;
  justify-content: flex-start;
  margin-bottom: 35%;

  @media (max-width: 370px) {
    flex-direction: column !important;
    justify-content: center;
  }
`;

export const Flex = styled.div`
  display: flex;
  margin-left: ${(props) =>
    props.margin ? "auto" : ""};
  margin-right: auto;

  @media (max-width: 750px) {
    justify-content: ${(props) => props.mobileViewAlignment ?? "center"};
    width: 100%;
  }

  @media (max-width: 370px) {
    justify-content: center !important;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: #292930;
    font-family: Nunito;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 110.5%; /* 44.2px */
  }
`;

export const Text = styled.div`
  font-family: Nunito;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 156.5%; /* 23.475px */
  letter-spacing: 2.025px;
  text-transform: uppercase;
  color: ${props => props.color ?? "#000"};
`;