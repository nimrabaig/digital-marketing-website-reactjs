import { styled } from "styled-components";

const StyledPage = ({ children }) => {
  const StyledContainer = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 1470px) {
      max-width: 1470px;
    }
    @media (min-width: 1280px) {
      max-width: 1280px;
    }
    @media (min-width: 1025px) {
      max-width: 1025px;
    }
    @media (min-width: 770px) {
      max-width: 770px;
    }
    @media (min-width: 640px) {
      max-width: 640px;
    }
  `;

  return <StyledContainer>{children}</StyledContainer>;
};

export default StyledPage;
