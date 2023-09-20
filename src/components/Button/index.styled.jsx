import { styled } from "styled-components";

export const StyledButton = styled.div`
  display: inline-flex;
  padding: 14px 34px;
  justify-content: center;
  width: max-content;
  align-items: center;
  border-radius: 7px;
  cursor: pointer;
  border: 1px solid #292930;
  background-color: ${(props) => (props.primary ? "#292930" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#292930")};
`;
