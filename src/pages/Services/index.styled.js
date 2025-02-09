import { styled } from "styled-components";
import BannerImg from "../../assets/services-banner.jpg";

export const Banner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 600px;
  align-items: center;
  width: 100%;
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 1024px) {
    height: 350px;
  }

  @media (max-width: 750px) {
    background-position: top center;
    background-size: 200%;
  }

  @media (max-width: 450px) {
    height: 245px;
  }

  @media (min-width: 2000px) {
    background-size: cover;
    background-position: center;
  }
`;
