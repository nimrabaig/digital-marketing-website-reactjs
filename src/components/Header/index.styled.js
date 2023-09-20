import { styled } from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 70px;
  margin: auto;
  z-index: 100;
  background-color: ${(props) => (props.moved ? "#fff" : "transparent")};
  position: fixed;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 10px;
  width: 85%;
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  color: #292930;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%; /* 28.8px */
  text-transform: capitalize;
  margin: auto 20px;
`;

export const MobileMenuIcon = styled.img`
  cursor: pointer;
`;

export const DropDown = styled.div`
  width: 230px;
  height: 100vh;
  color: rgba(41, 41, 48, 1);
  background-color: #fff;
  position: absolute;
  top: 70px;
  z-index: 100px;
  right: 0px;
`;
