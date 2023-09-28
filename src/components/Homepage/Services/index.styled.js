import { styled } from "styled-components";

export const Background = styled.div`
  background-color: #292930;
  width: 100%;
  min-height: 700px;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Ellipse = styled.div`
  height: 20px;
  width: 20px;
  background-color: rgba(255, 117, 3, 1);
  border-radius: 50%;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: auto auto auto;
  justify-content: center;
  margin: 60px auto;
  width: 90%;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  position: relative;
  width: 278px;
  height: 400px;
  padding: 20px;
  border-radius: 20px;
  margin: 20px;
  border: 1px solid rgba(66, 66, 69, 1);
  background: linear-gradient(180deg, #36363e 0%, #292930 100%),
    linear-gradient(0deg, #424245, #424245);
  cursor: #fff;
`;

export const Title = styled.div`
  color: #fff;
  font-family: Nunito;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 110.5%; /* 27.625px */
  text-align: left;
  margin: 20px 0px;
`;

export const Description = styled.div`
  color: #d0d0d0;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
`;

export const ReadMore = styled.div`
  display: inline-flex;
  padding: 14px 34px;
  justify-content: center;
  width: 75%;
  align-items: center;
  border-radius: 7px;
  cursor: pointer;
  margin: 20px auto;
  border: 1px solid rgba(82, 82, 85, 1);
  background-color: transparent;
  color: #d0d0d0;;

  &:hover {
    background-color: #fff;
    color: rgba(41, 41, 48, 1);
  }
`;
