import { styled } from "styled-components";
import BannerImg from "../../assets/case-studies.jpg";
import Button from "../../components/Button";

export const Wrapper = styled.div`
  margin: auto;
  width: 100%;
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
  background-size: 100%;

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  background-size: 55% 800px;
  background-repeat: no-repeat;
  background-position: center left;
  height: 800px;

  @media (max-width: 750px) {
    background: none !important;
    margin-bottom: 100px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 43px 100px 40px auto;
  width: 50%;

  @media (max-width: 750px) {
    flex-direction: column;
    margin: 90px auto 20px !important;
    width: 90%;
  }

  @media (max-width: 370px) {
    margin: auto !important;
    text-align: center;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 60px;
  gap: 20px;

  @media (max-width: 750px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ValuesButtonContainer = styled(ButtonContainer)`
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const LongButtonsContainer = styled(ButtonContainer)`
  @media (max-width: 1120px) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  color: #555;
  font-family: Rubik;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
  text-align: left;

  @media (max-width: 750px) {
    text-align: center;
    margin: auto !important;
    width: 100%;
  }
`;

export const ValuesContainer = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 30px;
  background-color: rgba(41, 41, 48, 1);
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  border-radius: 30px;
  border: 1px solid #424245;
  background: linear-gradient(180deg, #36363e 0%, #292930 100%);
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 300px;
  padding: 50px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  @media (max-width: 440px) {
    width: 240px;
  }
`;

export const Grid = styled.div`
  display: flex;
  height: 502px;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  width: 90%;
  gap: 20px;
  margin: 40px auto;
  justify-content: center;
  @media (max-width: 440px) {
    height: 530px !important;
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: auto auto;
  justify-content: center;
  margin: auto;
  width: 90%;
  gap: 20px;
  margin-top: 60px;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardText = styled.div`
  color: #d0d0d0;
  text-align: center;
  font-family: Rubik;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
`;

export const Bar = styled.div`
  width: 20%;
  border: 2px solid #fff;
  margin: 40px 0px 20px;
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid #fff;
  color: #fff;
  background-color: transparent;

  @media (max-width: 750px) {
    width: 121.047px;
  }
`;

export const PrimaryButton = styled(Button)`
  position: relative;
  border: 1px solid #fff;
  color: #292930;
  background-color: #fff;
`;

export const BlogsContainer = styled(ValuesContainer)`
  background-color: #fff;
  margin-bottom: 60px
`;

export const ContactUsContainer = styled(ValuesContainer)`
  background-color: #fff;
  justify-content: unset;
`;

export const BlogCard = styled.div`
  border-radius: 30px;
  border: 1px solid #dcdcdc;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 25px 25px 50px 25px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  &:hover {
    background: linear-gradient(
      111.05deg,
      #e9f7ff 9.66%,
      #ffdbd5 57.52%,
      #fff3ca 103.42%
    );
  }

  @media (max-width: 370px) {
    width: 240px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 20px 20px 0px 0px;
`;
export const Name = styled(Text)`
  color: #292930;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  line-height: 114.5%; /* 28.625px */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
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

export const Header1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
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

export const Date = styled(Text)`
font-weight: 500;`;

export const Title = styled(Text)`
width: 100%;
font-size: 24px;
font-weight: 600;
margin-bottom: 20px;

@media (min-width: 1400px) {
    font-size: 30px;
  }`;