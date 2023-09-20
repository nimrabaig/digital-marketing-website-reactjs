import { useLayoutEffect, useState } from "react";
import {
  Logo,
  Wrapper,
  Menu,
  MenuItem,
  Background,
  MobileMenuIcon,
  DropDown,
} from "./index.styled";
import LumentaLogo from "../../assets/logo.png";
import Options from "../../assets/menu.png";
import { MenuItems } from "../../constants/Menu";
import Button from "../Button";

const Header = () => {
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
      console.log("nkb", window.innerWidth, isMobileView);
      if (window.innerWidth <= 750) {
        setMobileView(true);
      } else {
        setMobileView(false);
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
        <Logo src={LumentaLogo} alt="" />
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
              <MenuItem key={index}>{item}</MenuItem>
            ))}
            <Button primary={true} style={{ marginLeft: 40 }}>
              Get Started
            </Button>
          </Menu>
        )}
        {showDropDown && <DropDown />}
      </Wrapper>
    </Background>
  );
};

export default Header;
