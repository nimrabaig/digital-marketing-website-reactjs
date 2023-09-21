import { styled } from "styled-components";

export const Flex = styled.div`
  display: flex;
  margin-left: ${(props) =>
    props.margin ? "auto" : ""};
  margin-right: auto;

  @media (max-width: 750px) {
    justify-content: center;
    margin: auto !important;
  }

  @media (max-width: 370px) {
    justify-content: center !important;
    margin: auto !important;
    text-align: center;
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

  @media (max-width: 750px) {
    margin: auto !important;
    text-align: center;
  }
`;
