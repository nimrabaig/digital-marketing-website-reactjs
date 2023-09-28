import {
  DropDown,
  MobileMenuItem,
  SideMenuContainer,
  ClossIcon,
} from "./index.styled";
import Button from "../Button";
import { MenuItems } from "../../constants/Menu";
import Close from "../../assets/cross.png";
import { useLocation, useNavigate } from "react-router-dom";
import SVGLoader from "../../components/SvgLoader";

const SideMenu = ({ setShowDropdown, showDropDown }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <DropDown showDropDown={showDropDown}>
      <SideMenuContainer>
        <ClossIcon src={Close} alt="" onClick={() => setShowDropdown(false)} />
        {MenuItems.map((item) => (
          <MobileMenuItem
            selected={location.pathname === item.path}
            onClick={() => {
              navigate(`${item.path}`);
              setShowDropdown(false);
            }}
          >
            <SVGLoader
              iconFillColor={
                location.pathname === item.path ? "#FF7503" : "#292930"
              }
              iconName={item.text}
            />
            <span>{item.text}</span>
          </MobileMenuItem>
        ))}
      </SideMenuContainer>
      <Button
        primary={true}
        style={{ margin: 40 }}
        onClick={() => navigate("/contact-us")}
      >
        Get Started
      </Button>
    </DropDown>
  );
};
export default SideMenu;
