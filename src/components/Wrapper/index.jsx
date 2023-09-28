import { styled } from "styled-components";

const Wrapper = ({ children }) => {
  const StyledContainer = styled.div`
    width: 90%;
    margin: auto;
  `;

  return <StyledContainer>{children}</StyledContainer>;
};

export default Wrapper;
