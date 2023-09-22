import { styled } from "styled-components";

export const Wrapper = styled.div`
  margin: auto;
  width: 90%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  display: flex;
  height: 446px;
  flex-direction: row;
  width:90%;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 20px;
  margin: 40px auto;
  justify-content: center;

  @media (max-width: 530px) {
    height: 488px;
  }

  @media (max-width: 430px) {
    height: 557px;
  }
`;

export const OuterCard = styled.div`
  display: flex;
  padding: 32px 26px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 433px;
  border-radius: 7px;
  background: linear-gradient(151deg, #fff8f8 10.38%, #f5f7ff 95.44%);
  min-height: 250px;
`;

export const InnerCard = styled.div`
  display: flex;
  width: 80%;
  padding: 48px 37px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 7px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(146, 146, 146, 0.25);
  min-height: 200px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 930px) {
  flex-direction: column;
}`


export const Comapny = styled.span`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
color: #292930;
font-family: Nunito;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: 156.5%; /* 39.125px */
margin-right: 20px;

`

export const Avatar = styled.img`
border-radius: 50%;
`

export const Text = styled.div`
color: #555;
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 156.5%; /* 28.17px */`

export const ClientName = styled.span`
color: #292930;
font-family: Nunito;
font-size: 20px !important;
font-style: normal;
font-weight: 700;`