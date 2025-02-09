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
  ContactUsContainer,
  TagsContainer,
  ValuesButtonContainer,
  Tag,
} from "./index.styled";
import IntroImg from "../../assets/about-us-intro.jpg";
import Icon from "../../assets/at.png";
import Button from "../../components/Button";
import Icon1 from "../../assets/dev-scale.png";
import Icon2 from "../../assets/research.png";
import ValuesIcon from "../../assets/values-icon.png";
import ContactUsIon from "../../assets/contact-us-icon.png";
import { Ellipse } from "../../components/Homepage/Services/index.styled";
import Arrow from "../../assets/arrow.png";
import GetInTouch from "../../components/GetInTouch";
import SectionHeader from "../../components/Section/SectionHeader";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StyledPage from "../../components/Wrapper";

const AboutUs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Wrapper>
      <Banner />
      <StyledPage>
      <Container
        style={{
          backgroundImage: `url(${IntroImg})`,
        }}
      >
        <TextContent>
          <SectionHeader
            icon={Icon}
            title={"02. ABOUT US"}
            leftAlign={true}
          style={{ justifyContent: "unset", alignSelf: "flex-start" }}
            oneliner={"Your Trusted Partner in Digital Marketing"}
            onelinerwidth={"100%"}
          />
          <TagsContainer
            style={{
              margin: "30px 20px",
              gap: 20,
            }}
          >
            <Tag>
              <img src={Icon1} alt="" style={{ marginRight: 22 }} height={30} />
              Development Scale
            </Tag>
            <Tag
              style={{
                backgroundColor: "rgba(41, 41, 48, 1)",
                color: "#fff",
                fontWeight: 600,
              }}
            >
              <img src={Icon2} alt="" style={{ marginRight: 10 }} height={30} />
              Research & Strategy
            </Tag>
          </TagsContainer>
          <Text>
            Welcome to Lumenta, your premier destination for digital marketing
            excellence. Established in 2023, we are a dynamic and results-driven
            digital marketing agency dedicated to propelling your business to
            online success.
          </Text>
          <ButtonContainer>
            <Button
              style={{ marginTop: 20 }}
              onClick={() => navigate("/contact-us")}
            >
              Get In Touch
            </Button>
          </ButtonContainer>
        </TextContent>
      </Container>
      </StyledPage>

      <ValuesContainer>
        <SectionHeader
          icon={ValuesIcon}
          title={"03 . Our values"}
          oneliner={"The core values behind our work"}
          color={"#fff"}
        />

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
          <SecondaryButton onClick={() => navigate("/contact-us")}>
            Get In Touch
          </SecondaryButton>
          <PrimaryButton onClick={() => navigate("/services")}>
            Our Services{" "}
            <Ellipse>
              <img src={Arrow} alt="" height={10} width={6} />
            </Ellipse>
          </PrimaryButton>
        </ValuesButtonContainer>
      </ValuesContainer>

      {/* <TeamsContainer>
        <SectionHeader
          icon={TeamsIcon}
          title={"03 . Our team"}
          oneliner={"Our team of expert marketers"}
        />
        <TeamGrid>
          {Team.map((emp) => (
            <TeamCard>
              <Image src={emp.image} alt="" />
              <Name>{emp.name}</Name>
              <Text>{emp.designation}</Text>
            </TeamCard>
          ))}
        </TeamGrid>

      
      </TeamsContainer> */}
      <GetInTouch />

      <ContactUsContainer>
        <SectionHeader
          icon={ContactUsIon}
          title={"04 . Join us"}
          oneliner={"Join Us on the Journey"}
        />
        <Text
          style={{ margin: "40px auto", width: "80%", textAlign: "center" }}
        >
          These values are not just words; they are the essence of Lumenta. When
          you choose us as your digital marketing partner, you invest in
          expertise and align with a company that follows these principles.
          Together, we'll navigate the digital landscape and achieve remarkable
          success.
        </Text>
      </ContactUsContainer>
    </Wrapper>
  );
};

export default AboutUs;
