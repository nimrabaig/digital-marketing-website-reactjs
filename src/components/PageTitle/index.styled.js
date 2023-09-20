import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  top: 250px;

  @media (max-width: 1024px) {
    top: 200px;
  }

  @media (max-width: 850px) {
    top: 180px;
  }

  @media (max-width: 750px) {
    top: 260px;
  }

  @media (max-width: 560px) {
    top: 140px;
  }
`;

export const PartOne = styled.div`
  color: #292930;
  font-family: Nunito;
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: 110.5%; /* 77.35px */

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 750px) {
    font-size: 60px;
  }

  @media (max-width: 560px) {
    font-size: 40px;
  }
`;

export const PartTwo = styled(PartOne)`
  color: #ff7503;
`;
