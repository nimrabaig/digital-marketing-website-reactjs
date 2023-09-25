import {
  Banner,
  StyledContainer,
  Column,
  Heading,
  SubHeading,
} from "./index.styled";
import {
  Ellipse,
  Card,
  Title,
  Description,
  ReadMore,
  Grid,
  Background,
} from "../../components/Homepage/Services/index.styled";
import {
  Container,
  Wrapper,
} from "../../components/Homepage/CaseStudies/index.styled";
import Arrow from "../../assets/arrow.png";
import ServicesIcon from "../../assets/services-icon.png";
import SectionHeader from "../../components/Section/SectionHeader";
import { ServicesData } from "../../constants/Services";
import { useParams } from "react-router-dom";
import GetInTouch from "../../components/GetInTouch";

const Service = () => {
  const params = useParams();
  return (
    <StyledContainer>
      <Banner>
        <Column>
          <Heading>{ServicesData[params.id].title}</Heading>
          <SubHeading>
            Lorem Ipsum is simply dummy text of the printing and industry ftyuu
            Ipsum has been the industry's not only five centuries, but also the
            leap into electronic typesetting.
          </SubHeading>
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
                <ReadMore>
                  Read More{" "}
                  <Ellipse>
                    <img src={Arrow} alt="" height={10} width={6} />{" "}
                  </Ellipse>
                </ReadMore>
              </Card>
            ))}
          </Grid>
        </Wrapper>
      </Background>

      <GetInTouch />
    </StyledContainer>
  );
};

export default Service;
