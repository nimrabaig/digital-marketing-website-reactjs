import { Container, PartOne, PartTwo } from "./index.styled";

const PageTitle = ({ first, second }) => {
  return (
    <Container>
      <PartOne>{first}</PartOne>&nbsp;
      <PartTwo>{second}</PartTwo>
    </Container>
  );
};

export default PageTitle;
