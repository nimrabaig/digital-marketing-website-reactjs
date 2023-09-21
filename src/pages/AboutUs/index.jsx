import PageTitle from "../../components/PageTitle";
import { ValuesData } from "../../constants/Values";
import { Team } from "../../constants/Team";
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
  TeamsContainer,
  TeamCard,
  Name,
  Image,
  LongButtonsContainer,
  ValuesButtonContainer,
  TeamGrid,
} from "./index.styled";
import IntroImg from "../../assets/about-us-intro.png";
import { Header, Column } from "../../components/Homepage/AboutUs/index.styled";
import SectionName from "../../components/SectionName";
import Icon from "../../assets/at.png";
import Button from "../../components/Button";
import Icon1 from "../../assets/dev-scale.png";
import Icon2 from "../../assets/research.png";
import ValuesIcon from "../../assets/values-icon.png";
import ContactUsIon from "../../assets/contact-us-icon.png";
import { Oneliner } from "../../components/Homepage/Pricing/index.styled";
import { Ellipse } from "../../components/Homepage/Services/index.styled";
import Arrow from "../../assets/arrow.png";
import GetInTouch from "../../components/GetInTouch";

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
              <Oneliner>Your Trusted Partner in Digital Marketing</Oneliner>
            </Column>
          </Header>
          <LongButtonsContainer
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
          </LongButtonsContainer>
          <Text>
            Welcome to Lumenta, your premier destination for digital marketing
            excellence. Established in [Year of Establishment], we are a dynamic
            and results-driven digital marketing agency dedicated to propelling
            your business to online success.
          </Text>
          <ButtonContainer>
            <Button style={{ marginTop: 20 }}>Get In Touch</Button>
          </ButtonContainer>
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

        <ValuesButtonContainer>
          <SecondaryButton>Get In Touch</SecondaryButton>
          <PrimaryButton>
            Our Services{" "}
            <Ellipse>
              <img src={Arrow} alt="" height={10} width={6} />
            </Ellipse>
          </PrimaryButton>
        </ValuesButtonContainer>
      </ValuesContainer>

      <TeamsContainer>
        <img
          src={ValuesIcon}
          alt=""
          height={80}
          width={80}
          style={{ marginBottom: 20 }}
        />
        <SectionName section={"03 . Our team"} margin={"auto"} />
        <Oneliner>Our team of expert marketers</Oneliner>
        <TeamGrid>
          {Team.map((emp) => (
            <TeamCard>
              <Image src={emp.image} alt="" />
              <Name>{emp.name}</Name>
              <Text>{emp.designation}</Text>
            </TeamCard>
          ))}
        </TeamGrid>

        <GetInTouch />
      </TeamsContainer>

      <TeamsContainer>
        <img
          src={ContactUsIon}
          alt=""
          height={80}
          width={80}
          style={{ marginBottom: 20 }}
        />
        <SectionName section={"04 . Contacts us"} margin={"auto"} />
        <Oneliner>Join Us on the Journey</Oneliner>
        <Text
          style={{ margin: "40px auto", width: "90%", textAlign: "center" }}
        >
          These values are not just words; they are the essence of Lumenta. When
          you choose us as your digital marketing partner, you invest in
          expertise and align with a company that follows these principles.
          Together, we'll navigate the digital landscape and achieve remarkable
          success.
        </Text>
      </TeamsContainer>
    </Wrapper>
  );
};

export default AboutUs;
