import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 90%;
  margin: 60px auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
`;

export const Card = styled.div`
  display: inline-flex;
  padding: 50px;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  gap: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.bg};

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (min-width: 1400px) {
    width: 70% !important;
  }
`;

export const HeaderImage = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(236, 236, 236, 1);
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 370px) {
    flex-direction: column !important;
    justify-content: center;
    text-align: center !important;
  }
`;

export const Category = styled.div`
border: 1px solid rgba(41, 41, 48, 1);
border-radius: 20px;
color: rgba(41, 41, 48, 1);
width: max-content;
padding: 10px 20px;`

export const Text = styled.div`
color: #555;
font-family: Rubik;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 156.5%; /* 28.17px */
text-align: left;


@media (min-width: 1400px) {
    font-size: 18px;
  }`;

export const Date = styled(Text)`
font-weight: 500;`;

export const Title = styled(Text)`
width: 100%;
font-size: 24px;
font-weight: 600;
margin-bottom: 20px;
margin-top: 20px;

@media (min-width: 1400px) {
    font-size: 24px;
  }`;

export const SideImage = styled.img`
@media (max-width: 1000px){
  width: 300px;
}`
