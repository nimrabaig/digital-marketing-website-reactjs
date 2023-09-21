import { styled } from "styled-components";
import BannerImg from "../../assets/contact-us-banner.png";

export const Wrapper = styled.div`
  margin: auto;
  width: 90%;
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 450px;
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
    height: 600px;
    background-size: 200%;
  }

  @media (max-width: 375px) {
    height: 278px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
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
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const Text = styled.div`
  color: ${props => props.color ?? "#555"};
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
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  background: linear-gradient(151.16deg, #FFF8F8 10.38%, #F5F7FF 95.44%);
  min-height: 700px;
`;

export const TextArea = styled.textarea`
  width: 98%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px 0px;
  background: #fff;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;

  &::placeholder {
    font-family: Nunito;
    font-size: 18px;
  };

  @media (max-width: 750px) {
    width: 90%;
  }
`;
