import {
  Background,
  Wrapper,
  Container,
  Header,
  Column,
} from "../CaseStudies/index.styled";
import SectionName from "../../SectionName";
import Button from "../../Button";
import ServicesIcon from "../../../assets/services-icon.png";
import {
  Ellipse,
  Grid,
  Card,
  Title,
  Description,
  ReadMore,
} from "./index.styled";
import Arrow from "../../../assets/arrow.png";
import { ServicesData } from "../../../constants/Services";

const Services = () => {
  return (
    <Background>
      <Wrapper>
        <Container>
          <Header>
            <img src={ServicesIcon} alt="" />
            <Column>
              <SectionName
                section={"01 . Services"}
                mobileViewAlignment={"left"}
                color={"#fff"}
              />
              <span style={{ color: "#fff" }}>
                High-impact services to take your business to the next level
              </span>
            </Column>
          </Header>
          <Button style={{ height: 52, padding: "0px 34px" }}>
            Our Services{" "}
            <Ellipse>
              <img src={Arrow} alt="" height={10} width={6} />{" "}
            </Ellipse>
          </Button>
        </Container>

        <Grid>
          {ServicesData.map((service) => (
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
  );
};

export default Services;
