import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  padding: 60px;
  justify-content: center;
  align-items: center;
  gap: 10%;

  @media (max-width: 880px) {
    flex-direction: column;
    margin: auto !important;
    padding: 0px !important;
  }
`;

export const SubscriptionBox = styled.div`
  border-radius: 30px;
  background: #3c3c45;
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: center;
  align-items: center;
  width: 300px;

  @media (max-width: 880px) {
    margin-top: 40px;
  }
`;

export const Text = styled.div`
  color: #fff;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  margin-right: auto;

  @media (max-width: 880px) {
    margin: auto !important;
    text-align: center;
  }
`;

export const SubscriptionText = styled(Text)`
  color: #d0d0d0;
  margin-top: 10px;
`;

export const SubscribeNow = styled(Text)`
  font-size: 25px;
  font-weight: 600;
  line-height: 110.5%;
  margin-top: 20px;
`;

export const Input = styled.input`
  outline: none;
  appearance: none;
  background-color: rgba(91, 91, 97, 1);
  border-radius: 4px;
  color: #fff;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 28.8px */
  text-transform: capitalize;
  margin: 20px 0px;
  border: none;
  padding: 15px 20px;
  width: 90%;

  &::placeholder {
    color: #fff;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 880px) {
    flex-direction: column;
    justify-content: center;
  }
`;


export const Phone = styled(Text)`
  background-color: rgba(60, 60, 69, 1);
  border-radius: 4px;
  color: #FF8803;
font-size: 25px;
font-weight: 700;
letter-spacing: 3px;
padding: 10px;`

export const Link = styled.div`
color: #FF8803;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 156.5%; /* 28.17px */
text-decoration-line: underline;
text-align: left;
margin-right: auto;

@media (max-width: 880px) {
  text-align: center;
margin: auto !important;
}`

export const Icon = styled.img`
margin-right: 6px;`

export const Flex = styled.div`
  display: flex;
  margin-right: auto;

  @media (max-width: 880px) {
    justify-content: center;
    margin: 20px auto !important;
    text-align: center;
  }

  @media (max-width: 370px) {
    justify-content: center !important;
    margin: 20px auto !important;
    text-align: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 880px) {
  margin-top: 20px;
  }
`;