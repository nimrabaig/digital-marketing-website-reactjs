import {
  Wrapper,
  Content,
  Tagline,
  SubText,
  ButtonsContainer,
  Flex,
} from "./index.styled";
import Button from "../../Button";
import { Text } from "../../Section/SectionHeader/index.styled";
import { useNavigate } from "react-router-dom";
import StyledPage from "../../Wrapper";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <StyledPage>
          <Content>
            <Flex style={{ marginRight: "auto" }}>
              <Text style={{ color: "#fec90c" }}>{"//"}&nbsp;</Text>
              <Text>{"Agency"}</Text>
            </Flex>
            <Tagline>
              Let's Start Your <br />{" "}
              <span style={{ color: "#FF7503" }}>Digital Marketing </span>
              <br />
              Journey
              <SubText>
                An extensively integrated digital marketing agency, offering
                comprehensive solutions to boost your online presence and
                achieve your business goals.
              </SubText>
            </Tagline>
            <ButtonsContainer>
              <Button
                primary={true}
                style={{ width: 91.0469 }}
                onClick={() => navigate("/services")}
              >
                Our Services
              </Button>
              <Button
                primary={false}
                style={{ width: 91.0469 }}
                onClick={() => navigate("/contact-us")}
              >
                Get Started
              </Button>
            </ButtonsContainer>
          </Content>
        </StyledPage>
      </Wrapper>
    </>
  );
};

export default Banner;
