import { styled } from "styled-components";

const Separator = ({ margin, width }) => {
  const StyledSeparator = styled.hr`
    width: ${width ?? "90%"};
    border: 0.2px solid rgba(207, 207, 207, 0.7);
    margin: ${margin ?? "20px 0px"};
  `;
  return <StyledSeparator />;
};

export default Separator;
