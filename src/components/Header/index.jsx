import { useLayoutEffect, useState } from "react";
import {
  Logo,
  Wrapper,
  Menu,
  MenuItem,
  Background,
  MobileMenuIcon,
} from "./index.styled";
import LumentaLogo from "../../assets/header-logo.png";
import Options from "../../assets/menu.png";
import { MenuItems } from "../../constants/Menu";
import Button from "../Button";
import { useLocation, useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHeaderMoved, setHeaderMovement] = useState(false);
  const [isMobileView, setMobileView] = useState(false);
  const [showDropDown, setShowDropdown] = useState(false);

  useLayoutEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 40) {
        setHeaderMovement(true);
      } else {
        setHeaderMovement(false);
      }
    }

    function handleWidth() {
      if (window.innerWidth <= 880) {
        setMobileView(true);
      } else {
        setMobileView(false);
        setShowDropdown(false);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleWidth, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <Background moved={isHeaderMoved}>
      <Wrapper>
        <Logo src={LumentaLogo} alt="" onClick={() => navigate("/")} />
        {isMobileView ? (
          <MobileMenuIcon
            src={Options}
            alt=""
            height={18}
            onClick={() => setShowDropdown(!showDropDown)}
          />
        ) : (
          <Menu>
            {MenuItems.map((item, index) => (
              <MenuItem
                selected={location.pathname === item.path}
                key={index}
                onClick={() => navigate(`${item.path}`)}
              >
                {item.text}
              </MenuItem>
            ))}
          </Menu>
        )}

        <SideMenu
          setShowDropdown={setShowDropdown}
          showDropDown={showDropDown}
        />
      </Wrapper>
    </Background>
  );
};

export default Header;
