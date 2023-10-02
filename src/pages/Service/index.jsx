import {
  Banner,
  StyledContainer,
  Column,
  Heading,
  SubHeading,
  AboutSection,
  Bullet,
  ServiceText,
  TextContainer,
  WorkFlow,
  WorkFlowHeading,
  ProcessFlow,
  FlowSteps,
  ProcessDivider,
  StepDescription,
} from "./index.styled";
import {
  Card,
  Title,
  Description,
  Grid,
  Background,
} from "../../components/Homepage/Services/index.styled";
import {
  Container,
  Wrapper,
} from "../../components/Homepage/CaseStudies/index.styled";
import ServicesIcon from "../../assets/services-icon.png";
import SectionHeader from "../../components/Section/SectionHeader";
import { ServicesData } from "../../constants/Services";
import { useParams } from "react-router-dom";
import AboutIcon from "../../assets/at.png";
import Check from "../../assets/bullet-check.png";
import { Separator } from "../../components/Homepage/AboutUs/index.styled";
import { cx, css } from "@emotion/css";
import { useEffect } from "react";

const Service = () => {
  const params = useParams();
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <StyledContainer>
      <Banner>
        <Column>
          <Heading>{ServicesData[params.id].title}</Heading>
          <SubHeading>{ServicesData[params.id].longDescription}</SubHeading>
        </Column>
      </Banner>
      <Background>
        <Wrapper>
          <Container>
            <SectionHeader
              icon={ServicesIcon}
              title={"01 . Services"}
              oneliner={
                "High-impact services to take your business to the next level"
              }
              color={"#fff"}
            />
          </Container>

          <Grid>
            {ServicesData[params.id].categories.map((service) => (
              <Card style={{ height: 412}}>
                <img src={service.icon} alt="" />
                <Title>{service.title}</Title>
                <Description>{service.description}</Description>
              </Card>
            ))}
          </Grid>
        </Wrapper>
      </Background>

      <AboutSection>
        <TextContainer>
          <SectionHeader
            icon={AboutIcon}
            title={"02 . about this service"}
            oneliner={ServicesData[params.id].about.title}
            leftAlign={true}
            style={{ justifyContent: "flex-start"}}
            onelinerwidth={"100%"}
          />
          <Separator />
          <ServiceText
            className={cx(
              "",
              css`
                @media (max-width: 1000px) {
                  width: 90%;
                  margin: auto;
                }
              `
            )}
          >
            {ServicesData[params.id].about.description}
          </ServiceText>
          <br />
          {ServicesData[params.id].about.bullets.map((bullet) => (
            <>
              <Bullet>
                <img
                  src={Check}
                  alt=""
                  height={25}
                  width={25}
                  style={{ marginTop: 4 }}
                />
                <ServiceText>{bullet}</ServiceText>
              </Bullet>
              <br />
            </>
          ))}
        </TextContainer>
      </AboutSection>

      <WorkFlow>
        <ProcessFlow>
          <WorkFlowHeading>
            {`Our bulletproof process to win on ${ServicesData[params.id].title}`}
          </WorkFlowHeading>
          <br />
          <ServiceText>
            {ServicesData[params.id].process.description1}
            <br />
            <br />
            {ServicesData[params.id].process.description2}
            <br />
            <br />
            {ServicesData[params.id].process.description3}
          </ServiceText>
        </ProcessFlow>
        <FlowSteps>
          <ProcessFlow
            style={{
              alignItems: "center",
              gap: 0,
              alignSelf: "flex-start",
              maxWidth: "",
            }}
          >
            <img src={ServicesData[params.id].process.steps[0].icon} alt="" />
            <ProcessDivider />
            <img src={ServicesData[params.id].process.steps[1].icon} alt="" />
            <ProcessDivider />
            <img src={ServicesData[params.id].process.steps[2].icon} alt="" />
          </ProcessFlow>
          <ProcessFlow style={{ maxWidth: "70%" }}>
            <Title
              style={{ color: "rgba(41, 41, 48, 1)", alignSelf: "flex-start" }}
            >
              {ServicesData[params.id].process.steps[0].heading}
            </Title>
            <StepDescription>
            {ServicesData[params.id].process.steps[0].description}
            </StepDescription>

            <br />
            <Title
              style={{ color: "rgba(41, 41, 48, 1)", alignSelf: "flex-start" }}
            >
              {ServicesData[params.id].process.steps[1].heading}
            </Title>
            <StepDescription>
            {ServicesData[params.id].process.steps[1].description}
            </StepDescription>

            <br />
            <Title
              style={{ color: "rgba(41, 41, 48, 1)", alignSelf: "flex-start" }}
            >
              {ServicesData[params.id].process.steps[2].heading}
            </Title>
            <StepDescription>
            {ServicesData[params.id].process.steps[2].description}
            </StepDescription>
          </ProcessFlow>
        </FlowSteps>
      </WorkFlow>
    </StyledContainer>
  );
};

export default Service;
