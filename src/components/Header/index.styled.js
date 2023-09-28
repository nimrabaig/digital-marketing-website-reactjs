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
  width: 145px;
  cursor: pointer;
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
  cursor: pointer;
  border-bottom: ${props => props.selected ? "3px solid #FF7503" : ""};
`;

export const MobileMenuIcon = styled.img`
  cursor: pointer;
`;

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 230px;
  height: 100vh;
  color: rgba(41, 41, 48, 1);
  position: absolute;
  top: 0px;
  z-index: 100px;
  right: 0px;
  border-radius: 25.772px 0px 0px 25.772px;
  border: 3px solid #fff;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(100px);
  transform: ${(props) =>
    props.showDropDown ? "translateX(0%);" : "translateX(100%)"};
  transition: transform 0.3s ease-out;
`;

export const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  position: relative;
`;

export const ClossIcon = styled.img`
  display: flex;
  align-self: flex-end;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const MobileMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  img {
    height: 30px;
    width: 30px;
  }
  span {
    color: ${(props) => (props.selected ? "#FF7503" : "#292930")};
    font-family: Nunito;
    font-size: 20.617px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-left: 20px;
  }
`;
