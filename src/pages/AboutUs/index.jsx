import PageTitle from "../../components/PageTitle";
import { ValuesData } from "../../constants/Values";
import {
  Banner,
  Container,
  Wrapper,
  TextContent,
  Text,
  ButtonContainer,
  ValuesContainer,
  Grid,
  Card,
  CardText,
  Bar,
  PrimaryButton,
  SecondaryButton,
} from "./index.styled";
import IntroImg from "../../assets/about-us-intro.png";
import { Header, Column } from "../../components/Homepage/AboutUs/index.styled";
import SectionName from "../../components/SectionName";
import Icon from "../../assets/at.png";
import Button from "../../components/Button";
import Icon1 from "../../assets/dev-scale.png";
import Icon2 from "../../assets/research.png";
import ValuesIcon from "../../assets/values-icon.png";
import { Oneliner } from "../../components/Homepage/Pricing/index.styled";
import { Ellipse } from "../../components/Homepage/Services/index.styled";
import Arrow from "../../assets/arrow.png";

const AboutUs = () => {
  return (
    <Wrapper>
      <Banner>
        <PageTitle first={"About"} second={"Us"} />
      </Banner>

      <Container
        style={{
          backgroundImage: `url(${IntroImg})`,
        }}
      >
        <TextContent>
          <Header>
            <img src={Icon} alt="" />
            <Column>
              <SectionName
                section={"02. ABOUT US"}
                mobileViewAlignment={"left"}
              />
              <span>Your Trusted Partner in Digital Marketing</span>
            </Column>
          </Header>
          <ButtonContainer
            style={{
              margin: "30px 20px",
              gap: 20,
            }}
          >
            <Button
              style={{
                backgroundColor: "rgba(41, 41, 48, 1)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 22,
              }}
            >
              <img src={Icon1} alt="" style={{ marginRight: 22 }} height={30} />
              Development Scale
            </Button>
            <Button
              style={{
                backgroundColor: "rgba(41, 41, 48, 1)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 22,
              }}
            >
              <img src={Icon2} alt="" style={{ marginRight: 10 }} height={30} />
              Research & Strategy
            </Button>
          </ButtonContainer>
          <Text>
            Welcome to Lumenta, your premier destination for digital marketing
            excellence. Established in [Year of Establishment], we are a dynamic
            and results-driven digital marketing agency dedicated to propelling
            your business to online success.
          </Text>

          <Button style={{ marginRight: "auto", marginTop: 20 }}>
            Get In Touch
          </Button>
        </TextContent>
      </Container>

      <ValuesContainer>
        <img
          src={ValuesIcon}
          alt=""
          height={80}
          width={80}
          style={{ marginBottom: 20 }}
        />
        <SectionName
          section={"02 . Our values"}
          margin={"auto"}
          color={"#fff"}
        />
        <Oneliner style={{ color: "#fff" }}>
          The core values behind our work
        </Oneliner>

        <Grid>
          {ValuesData.map((item) => (
            <Card>
              <img src={item.image} alt="" />
              <CardText
                style={{
                  fontSize: 25,
                  fontWeight: 600,
                }}
              >
                {item.title}
              </CardText>
              <CardText>{item.description}</CardText>
              <Bar />
            </Card>
          ))}
        </Grid>
        
        <ButtonContainer style={{marginBottom: 60, gap: 20 }}>
          <SecondaryButton>Get In Touch</SecondaryButton>
          <PrimaryButton>
            Our Services{" "}
            <Ellipse>
              <img src={Arrow} alt="" height={10} width={6}  />
            </Ellipse>
          </PrimaryButton>
        </ButtonContainer>
      </ValuesContainer>
    </Wrapper>
  );
};

export default AboutUs;
