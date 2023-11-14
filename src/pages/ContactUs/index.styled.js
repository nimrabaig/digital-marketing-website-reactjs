import { styled } from "styled-components";
import BannerImg from "../../assets/contact-us-banner.jpg";
import { DropDownList } from "@progress/kendo-react-dropdowns";

export const Wrapper = styled.div`
  margin: auto;
  width: 90%;
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

  @media (min-width: 2000px) {
    background-size: cover;
    background-position: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px auto;
  width: 100%;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 80%;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
    width: 90%;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
  }
`;

export const ContactCardOuter = styled.div`
  border-radius: 7px;
  height: 265.656px;
  background: linear-gradient(
    111deg,
    #e9f7ff 9.66%,
    #ffdbd4 57.52%,
    #fff3ca 103.42%
  );
  display: flex;
  width: 340px;
  padding: 25px;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 400px) {
    width: 224px;
    height: 289.656px;
  }

  &:hover {
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.35);
    transition: all 0.5s;
    transform: translateY(-2px);
  }
`;

export const CardInner = styled.div`
  border-radius: 7px;
  background: #fff;
  height: 189.656px;
  box-shadow: 0px 2px 4px 0px rgba(146, 146, 146, 0.25);
  display: flex;
  width: 290px;
  padding: 20px 25px 56px 25px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  @media (max-width: 400px) {
    height: 213.656px;
    width: 181px;
  }
`;

export const Text = styled.div`
  color: ${(props) => props.color ?? "#555"};
  font-size: ${(props) => (props.size ? `${props.size}px` : "18px")};
  font-style: normal;
  font-weight: ${(props) => props.weight ?? "400"};
  line-height: 156.5%; /* 28.17px */
`;

export const Tag = styled.div`
  border-radius: 59px;
  background: #ff7503;
  display: flex;
  padding: 6px 26px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
`;

export const FormBackground = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(151.16deg, #fff8f8 10.38%, #f5f7ff 95.44%);
  min-height: 700px;
`;

export const TextArea = styled.textarea`
  width: 98%;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px 0px;
  background: #fff;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
  font-family: Rubik !important;
  font-size: 18px;

  &::placeholder {
    font-family: Rubik;
    font-size: 18px;
  }

  @media (max-width: 750px) {
    width: 95%;
  }

  @media (max-width: 370px) {
    width: 93%;
  }
`;

export const Grid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: auto auto auto;
  justify-content: center;
  margin: auto;
  width: 90%;
  gap: 20px;
  margin-top: 60px;

  @media (max-width: 1210px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FAQ = styled(Column)`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 60px auto 100px;
`;

export const FAQContainer = styled.div`
  border-radius: 10px;
  border: 1.5px solid #dcdcdc;
  background: ${(props) =>
    props.selected
      ? "linear-gradient(124deg,#e9f7ff 5.58%,#ffdbd4 21.8%,#fff3ca 37.36%)"
      : "#fff"};
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  padding: 34px;
  width: 70%;

  @media (max-width: 750px) {
    padding: 34px 20px;
    width: 90%;
  }
`;

export const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  color: #292930;
  font-family: Rubik;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 110.5%; /* 33.15px */

  @media (max-width: 750px) {
    font-size: 18px;
  }
`;

export const FAQAnswer = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  width: 100%;

  @media (max-width: 750px) {
    font-size: 18px;
  }
`;
export const Ellipse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute;
  right: 20px; */
  border-radius: 50%;
  cursor: pointer;
  height: 45px;
  width: 45px;
  background-color: ${(props) =>
    props.selected ? "rgba(255, 117, 3, 1)" : "rgba(41, 41, 48, 1)"};

  img {
    transform: ${(props) => (props.selected ? "rotate(90deg)" : "")};
  }
  @media (max-width: 630px) {
    height: 30px;
    width: 52px;
  }
`;

export const Select = styled(DropDownList)`
  width: 100%;
  height: 46px;
  padding: 4px 8px;
  border-color: rgba(0, 0, 0, 0.08);
  color: #424242;
  background-color: #ffffff;
  line-height: 1.4285714286;
  text-overflow: ellipsis;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  outline: 0;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.4285714286;
  font-weight: normal;
  text-align: start;
  box-shadow: none;
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: stretch;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
  font-size: 18px;
  font-family: Rubik;
`;
