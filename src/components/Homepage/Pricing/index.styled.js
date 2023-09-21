import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90%;
  margin: 60px auto;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Package = styled.div`
  min-height: 450px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.primary ? "rgba(41, 41, 48, 1)" : "rgba(226, 226, 226, 1)"};
  color: ${(props) => (props.primary ? "#fff" : "rgba(85, 85, 85, 1)")};
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 1060px) {
    min-width: 200px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 20px;
  width: 100%;
  text-align: left;
  margin-left: 20px;

  @media (max-width: 1060px) {
    gap: 7px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
`;

export const PackageType = styled.div`
  color: ${(props) => (props.primary ? "#fff" : "#292930")};
  text-align: center;
  font-family: Nunito;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 110.5%; /* 27.625px */
  margin-right: auto;
`;

export const Price = styled.div`
  color: ${(props) => (props.primary ? "#fff" : "#292930")};
  text-align: center;
  font-family: Nunito;
  font-size: 50px;
  font-style: normal;
  font-weight: 900;
  line-height: 110.5%; /* 55.25px */
`;

export const Text = styled.div`
  color: ${(props) => (props.primary ? "#fff" : "#292930")};
  text-align: center;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 244%; /* 43.92px */

  @media (max-width: 1060px) {
    font-size: 14px;
  }
`;

export const Button = styled.div`
  display: inline-flex;
  padding: 14px 34px;
  justify-content: center;
  width: 75%;
  align-items: center;
  border-radius: 7px;
  cursor: pointer;
  margin: 20px auto;
  border: 1px solid rgba(82, 82, 85, 1);
  background-color: ${(props) =>
    props.primary ? "#fff" : "rgba(41, 41, 48, 1)"};
  color: ${(props) => (props.primary ? "rgba(41, 41, 48, 1)" : "#fff")};
`;

export const Oneliner = styled.span`
  color: #292930;
  font-family: Nunito;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 110.5%; /* 44.2px */

  @media (max-width: 750px) {
    text-align: center;
    
  }
`;
