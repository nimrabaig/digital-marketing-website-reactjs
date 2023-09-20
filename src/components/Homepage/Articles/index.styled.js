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

export const Card = styled.div`
  display: inline-flex;
  padding: 50px;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.bg};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const Category = styled.div`
border: 1px solid rgba(41, 41, 48, 1);
border-radius: 20px;
color: rgba(41, 41, 48, 1);
width: max-content;
padding: 10px 20px;`

export const Text = styled.div`
color: #555;
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 156.5%; /* 28.17px */
text-align: left;`;

export const Date = styled(Text)`
font-weight: 500;`;

export const Title = styled(Text)`
font-weight: 600;
margin-bottom: 20px;`;


