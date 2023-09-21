import { Background, Container, Flex, Text } from "./index.styled";
import Button from "../Button";

const GetInTouch = () => {
  return (
    <Background>
      <Container>
        <Text color={"#292930"}>
          Get in touch and <Text color={"#FF7503"}>start growing</Text> your
          startup today
        </Text>

        <Flex>
          <Button style={{
            backgroundColor: "#292930",
            color: "#fff"
          }}>
            Get In Touch
          </Button>
          <Button>
            Get Started
          </Button>
        </Flex>
      </Container>
      </Background>
  );
};

export default GetInTouch;
