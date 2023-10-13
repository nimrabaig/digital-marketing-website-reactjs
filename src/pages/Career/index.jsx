import SectionHeader from "../../components/Section/SectionHeader";
import {
  Background,
  Banner,
  Container,
  Wrapper,
  Grid,
  Card,
  Title,
  Description,
  Ellipse,
  GetInfo,
} from "./index.styled";
import Arrow from "../../assets/arrow.png";
import Icon from "../../assets/hand-shake-icon.png";
import { Careers } from "../../constants/Careers";
import GetInTouch from "../../components/GetInTouch";
import { useEffect } from "react";
import StyledPage from "../../components/Wrapper";

const Career = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Wrapper>
        <Banner />

        <Background>
          <Container>
            <SectionHeader
              icon={Icon}
              title={"01 . JOIN OUR TEAM"}
              oneliner={"Current job openings"}
              onelinerwidth={"100%"}
              color={"#fff"}
            />

            <Grid>
              {Careers.map((service) => (
                <Card>
                  <Title>{service.title}</Title>
                  <Description>
                    {service.location} | {service.time}
                  </Description>

                  <Description>{service.jobDescription}</Description>
                  <GetInfo>
                    Get Details{" "}
                    <Ellipse>
                      <img src={Arrow} alt="" height={10} width={6} />{" "}
                    </Ellipse>
                  </GetInfo>
                </Card>
              ))}
            </Grid>
          </Container>
        </Background>
      </Wrapper>
      <GetInTouch />
    </>
  );
};

export default Career;
