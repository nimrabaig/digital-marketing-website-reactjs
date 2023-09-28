import { Background, Container, Flex, Text } from "./index.styled";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
  const navigate = useNavigate();
  return (
    <Background>
      <Container>
        <Text color={"#292930"}>
          Get in touch and <Text color={"#FF7503"}>start growing</Text> your
          startup today
        </Text>

        <Flex>
          <Button
            style={{
              backgroundColor: "#292930",
              color: "#fff",
            }}
            onClick={() => navigate("/contact-us")}
          >
            Get In Touch
          </Button>
          <Button onClick={() => navigate("/contact-us")}>Get Started</Button>
        </Flex>
      </Container>
    </Background>
  );
};

export default GetInTouch;
