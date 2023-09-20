import { StyledButton } from "./index.styled";

const Button = (props) => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
