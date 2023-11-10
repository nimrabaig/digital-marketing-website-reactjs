import { styled } from "styled-components";
import BannerImg from "../../../assets/Banner.jpg";

export const Wrapper = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 110vh;
  width: 100%;
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;

  @media (max-width: 300px) {
    height: 1100px;
  }

  @media (max-width: 1000px) {
    height: 1000px;
    background: linear-gradient(111deg, #e9f7ff 9.95%, #ffdbd4 85.17%);
  }

  @media (min-height: 1200px) {
    height: 1200px;
    padding-top: 100px;
  }

  @media (min-height: 1600px) {
    height: 1400px;
    padding-top: 100px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  width: 90%;
  margin: 120px 100px;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-centent: center;
    margin: 120px auto 20px !important;
  }

  /* @media (min-height: 1600px) {
    flex-direction: column;
    justify-centent: center;
    margin: 120px auto 20px !important;
  } */

  @media (min-width: 1600px) {
    margin: 120px 10% !important;
  }
`;

export const Tagline = styled.h2`
  font-weight: 800;
  font-size: 56px;
  margin: 0px;
  width: 100%;

  @media (min-width: 2000px) {
    font-size: 72px !important;
  }

  @media (max-width: 370px) {
    font-size: 52px !important;
  }

  span {
    color: rgba(32, 111, 253, 1);
  }

  @media (max-width: 1000px) {
    text-align: center;
  }

  /* @media (min-height: 1600px) {
    text-align: center;
  } */
`;

export const SubText = styled.p`
  color: #555;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
  width: 570px;

  @media (min-width: 2000px) {
    font-size: 34px !important;
    /* width: 750px; */
  }

  @media (max-width: 1000px) {
    text-align: center;
    padding: 0px 20px;
    margin: 20px auto 0px;
    width: 80%;
  }

  /* @media (min-height: 1600px) {
    text-align: center;
    padding: 0px 20px;
    margin: 20px auto 0px;
    width: 80%;
  } */
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
  margin-top: 20px;
  gap: 20px;
  padding-bottom: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    margin: 40px auto 20px !important;
  }
  @media (max-width: 370px) {
    margin-top: 30px !important;
  }

  /* @media (min-height: 1600px) {
    flex-direction: column;
    justify-content: center;
    margin: 40px auto 20px !important;
  } */
`;
export const Flex = styled.div`
  display: flex;
  margin-right: ${(props) => (props.leftAlign ? "auto" : "")};

  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
  }

  /* @media (min-height: 1600px) {
    justify-content: center;
    width: 100%;
  } */

  @media (max-width: 370px) {
    justify-content: center !important;
  }
`;
