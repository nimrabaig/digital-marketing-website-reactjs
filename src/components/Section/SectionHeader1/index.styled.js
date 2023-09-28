import { styled } from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  flex-direction: ${(props) => (props.leftAlign ? "row" : "column")};

  @media (max-width: 1000px) {
    flex-direction: column !important;
    justify-content: center;
    width: 100%;
  }
`;

export const Flex = styled.div`
  display: flex;
  margin-right: ${(props) => (props.leftAlign ? "auto" : "")};
  margin: ${(props) => (!props.leftAlign ? "auto !important" : "")};

  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 370px) {
    justify-content: center !important;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  font-family: Nunito;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 156.5%; /* 23.475px */
  letter-spacing: 2.025px;
  text-transform: uppercase;
  color: ${(props) => props.color ?? "#000"};
`;

export const Oneliner = styled(Text)`
  color: ${(props) => props.color ?? "#292930"};
  font-size: 40px;
  font-weight: 600;
  line-height: 110.5%;
  margin-top: 10px;
  text-transform: none;
  text-align: ${(props) => (props.leftAlign ? "left" : "center")};
  width: ${props => props.onelinerwidth ?? "75%"};
  margin: ${props => !props.leftAlign ? "auto !important" : ""};

  @media (max-width: 1000px) {
    text-align: center !important;
    margin: auto !important;
  }
`;
