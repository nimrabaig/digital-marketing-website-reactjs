import {
  Wrapper,
  Content,
  Tagline,
  SubText,
  ButtonsContainer,
} from "./index.styled";
import Button from "../../Button";
import SectionHeader from "../../Section/SectionHeader";

const Banner = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <SectionHeader title={"Agency"} style={{ marginRight: "auto" }} />
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
