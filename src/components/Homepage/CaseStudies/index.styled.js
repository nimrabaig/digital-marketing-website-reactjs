import { styled } from "styled-components";

export const Background = styled.div`
  background-color: #292930;
  width: 100%;
  min-height: 700px;
`;

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  padding: 40px;
  flex-direction: column;

  @media (max-width: 1024px) {
    padding: 40px 0px !important;
    width: 90%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin: auto;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }

  /* @media (max-width: 1250px) and (min-height: 1250px) {
    justify-content: center;
  } */
`;

export const SideImage = styled.img`
  @media (max-width: 1024px) {
    display: none;
  }
  /* @media (max-width: 1250px) and (min-height: 1250px) {
    display: none;
  } */
`;

export const Card = styled.div`
  position: relative;
  border-radius: 10px;
  opacity: ${(props) => (props.selected ? "1" : "0.5")};
  background: #383840;
  min-height: 60px;
  display: flex;
  padding: 30px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 10px;
  box-shadow: ${(props) =>
    props.selected ? "0px 18px 50px 0px rgba(0, 0, 0, 0.25)" : ""};
  border: ${(props) => (props.selected ? "1px solid rgba(94, 94, 98, 1)" : "")};

  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.selected ? "translateY(0) scaleY(1)" : "translateY(100%) scaleY(0)"};
  animation: ${(props) =>
    props.selected ? "foldDown 600ms ease-in-out" : "foldUp 600ms ease-in-out"};
  animation-fill-mode: forwards;

  @keyframes foldDown {
    0% {
      transform: translateY(-50%) scaleY(0);
      opacity: 0;
    }

    100% {
      transform: translateY(0) scaleY(1);
      opacity: 1;
    }
  }
  @keyframes foldUp {
    0% {
      transform: translateY(-100%) scaleY(0.1);
      opacity: 0;
    }
    40% {
      transform: translateY(20px) scaleY(0.95);
    }
    100% {
      transform: translateY(0) scaleY(1);
      opacity: 1;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 93%;

  @media (max-width: 1024px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Heading = styled.div`
  color: ${(props) => (props.selected ? "#fff" : "rgba(255, 255, 255, 1)")};
  font-family: Rubik;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  text-align: left;
  align-self: flex-start;

  @media (max-width: 1024px) {
    width: 70%;
    text-overflow: ellipsis;
  }
`;

export const Ellipse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  height: 45px;
  width: 45px;
  background-color: ${(props) =>
    props.selected ? "rgba(255, 117, 3, 1)" : "rgba(41, 41, 48, 1)"};

  img {
    transform: ${(props) => (props.selected ? "rotate(90deg)" : "")};
  }
  @media (max-width: 750px) {
    height: 30px;
    width: 30px;
  }
`;

export const Category = styled.div`
  color: #ff7503;
  font-family: Rubik;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
  text-align: left;
  display: flex;
  width: 93%;
  @media (max-width: 1024px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const Detail = styled.div`
  color: #d0d0d0;
  font-family: Rubik;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
  text-align: left;
  margin-top: 8px;
  width: 93%;
`;
export const SideContainer = styled.div`
  width: 45%;

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MoreArrow = styled.div`
  height: 20px;
  width: 20px;
  background-color: rgba(255, 117, 3, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

`;
