import { styled } from "styled-components";

export const Background = styled.div`
  background: linear-gradient(111deg, #E9F7FF 9.66%, #FFDBD4 57.52%, #FFF3CA 103.42%);
  margin: 100px auto;
  min-height: 1000px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 40px;
  @media (max-width: 1000px) {

  }
`;

export const ProcessDescription = styled.div`
display: flex;
text-align: center;
margin: auto;
  color: #292930;
  text-align: center;
  font-family: Nunito;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 110.5%; /* 44.2px */
  color: #292930;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
`;

export const ProcessSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Stage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: #292930;
  border: 20px solid rgba(255, 204, 161, 1);
  text-align: center;
  margin: 0px 20px ;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Step = styled.div`
  color: #292930;
  font-family: Nunito;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 110.5%; /* 27.625px */
  margin-top: 40px;
  text-align: left;
  margin-right: auto;
  padding-bottom: 10px;

  @media (max-width: 1000px){
    margin: auto !important;
    text-align: center !important;
  }
`;

export const StepDescription = styled.div`
  color: #555;
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
  margin-bottom: 100px;
  text-align: left;
  margin-right: auto;

  @media (max-width: 1000px){
    margin: auto !important;
    text-align: center !important;
  }
`;

export const Divider = styled.div`
  border-left: 6px dotted #e38676;
  height: 160px;

  @media (max-width: 1000px) {
    height: 125px;
    margin: 20px;
  }
`;
