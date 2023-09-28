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
import Flow1 from "../../assets/flow-1.png";
import Flow2 from "../../assets/flow-2.png";
import Flow3 from "../../assets/flow-3.png";

const Service = () => {
  const params = useParams();
  console.log("fewfj", ServicesData[params.id]);
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
              <Card>
                <img src={service.image} alt="" />
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
            Our bulletproof process to win on Social Media
          </WorkFlowHeading>
          <br />
          <ServiceText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            sollicitudinbibendum senectus scelerisque non. Turpis matis morbi
            vivera ipsum adipiscing Mauris volutpat Ipsum duis tempor.
          </ServiceText>
          <br />
          <Bullet>
            <img src={Check} alt="" />
            <ServiceText>Dolor duis lorem enim eu nulla semper</ServiceText>
          </Bullet>
          <Bullet>
            <img src={Check} alt="" />
            <ServiceText>Dolor duis lorem enim eu nulla semper</ServiceText>
          </Bullet>
          <Bullet>
            <img src={Check} alt="" />
            <ServiceText>Dolor duis lorem enim eu nulla semper</ServiceText>
          </Bullet>
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
            <img src={Flow1} alt="" />
            <ProcessDivider />
            <img src={Flow2} alt="" />
            <ProcessDivider />
            <img src={Flow3} alt="" />
          </ProcessFlow>
          <ProcessFlow style={{ maxWidth: "70%" }}>
            <Title
              style={{ color: "rgba(41, 41, 48, 1)", alignSelf: "flex-start" }}
            >
              Social Media Content Plan
            </Title>
            <StepDescription>
              consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm
            </StepDescription>

            <br />
            <Title
              style={{ color: "rgba(41, 41, 48, 1)", alignSelf: "flex-start" }}
            >
              Publishing & Execution
            </Title>
            <StepDescription>
              consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm
            </StepDescription>

            <br />
            <Title
              style={{ color: "rgba(41, 41, 48, 1)", alignSelf: "flex-start" }}
            >
              Measure & Scale
            </Title>
            <StepDescription>
              consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm
            </StepDescription>
          </ProcessFlow>
        </FlowSteps>
      </WorkFlow>
    </StyledContainer>
  );
};

export default Service;
