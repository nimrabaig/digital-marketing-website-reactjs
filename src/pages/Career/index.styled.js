import { styled } from "styled-components";
import BannerImg from "../../assets/career-banner.png";

export const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  background-color: #292930
`;

export const Footer = styled.div`
  margin: auto;
  width: 100%;;
`;
export const Banner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 600px;
  align-items: center;
  width: 100%;
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1250px) {
    height: 350px;
  }

  @media (max-width: 750px) {
    background-position: top center;
    background-size: 200%;
  }

  @media (max-width: 450px) {
    height: 245px;
  }
`;

export const Background = styled.div`
  background-color: #292930;
  width: 100%;
  min-height: 700px;
  padding-top: 60px;
`;

export const Container = styled.div`
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
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    margin-left: 10px;
  }
`;

export const Grid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: auto auto;
  justify-content: center;
  margin: 60px auto;
  width: 90%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  position: relative;
  padding: 20px;
  margin: 20px;
  border-radius: 30px;
  border: 1px solid #424245;
  background: linear-gradient(180deg, #36363e 0%, #292930 100%);
  color: #fff;
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

export const GetInfo = styled.div`
  display: inline-flex;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  border-radius: 7px;
  cursor: pointer;
  margin: 20px auto;
  border: 1px solid rgba(82, 82, 85, 1);
  background-color: #fff;
  color: #292930;
  padding: 14px 34px;

  @media (max-width: 450px) {
    width: 112px;
    padding: 10px 30px;
  }

  &:hover {
    background-color: #fff;
    color: rgba(41, 41, 48, 1);
  }
`;
