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
import { Banner } from "./index.styled";
import Arrow from "../../assets/arrow.png";
import ServicesIcon from "../../assets/services-icon.png";
import SectionHeader from "../../components/Section/SectionHeader";
import { ServicesData } from "../../constants/Services";
import GetInTouch from "../../components/GetInTouch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
    <Background>
      <Banner />
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
          {ServicesData.map((service, index) => (
            <Card>
              <img src={service.image} alt="" />
              <Title>{service.title}</Title>
              <Description>{service.description}</Description>
              <ReadMore onClick={() => navigate(`/service/${index}`)}>
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
    </>
  );
};

export default Services;
