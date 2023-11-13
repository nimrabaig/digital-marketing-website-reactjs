import { styled } from "styled-components";

export const StyledButton = styled.div`
  display: inline-flex;
  padding: 14px 34px;
  justify-content: center;
  width: max-content;
  align-items: center;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #292930;
  transition: all .5s;
  gap: 16px;
  background-color: ${(props) => (props.primary ? "#292930" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#292930")};
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.35);

  }
`;
