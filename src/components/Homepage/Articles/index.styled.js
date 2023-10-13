import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  /* width: 90%; */
  margin: 60px auto;
  width: 100%;
`;

export const Card = styled.div`
  display: inline-flex;
  padding: 50px;
  width: 90%;
  max-height: 298px;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.bg};

  @media (max-width: 1050px) {
    flex-direction: column;
    max-height: max-content;
    padding: 20px;
  }

  /* @media (min-width: 1400px) {
    width: 70% !important;
  } */
`;

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
  padding: 10px 20px;
`;

export const Text = styled.div`
  color: #555;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
  text-align: left;

  @media (min-width: 2000px) {
    font-size: 23px;
  }
`;

export const Date = styled(Text)`
  font-weight: 500;
`;

export const Title = styled(Text)`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Detail = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 62px;

  @media (min-width: 1000px) {
    height: 108px;
  }

  /* @media (min-width: 1400px) {
    height: 108px;
  } */
`;

export const SideImage = styled.img`
  @media (max-width: 1050px) {
    width: 300px;
  }
`;
