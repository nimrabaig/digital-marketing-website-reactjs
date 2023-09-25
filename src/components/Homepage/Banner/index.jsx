import {
  Wrapper,
  Content,
  Tagline,
  SubText,
  ButtonsContainer,
  Flex,
} from "./index.styled";
import Button from "../../Button";
import SectionHeader from "../../Section/SectionHeader";
import { Text } from "../../Section/SectionHeader/index.styled";

const Banner = () => {
  return (
    <>
      <Wrapper>
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
              comprehensive solutions to boost your online presence and achieve
              your business goals.
            </SubText>
          </Tagline>
          <ButtonsContainer>
            <Button primary={true}>Our Services</Button>
            <Button primary={false}>Get Started</Button>
          </ButtonsContainer>
        </Content>
      </Wrapper>
    </>
  );
};

export default Banner;
