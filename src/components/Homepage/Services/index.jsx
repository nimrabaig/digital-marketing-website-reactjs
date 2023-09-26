import { Background, Wrapper, Container } from "../CaseStudies/index.styled";
import SectionHeader from "../../Section/SectionHeader";
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
import { useLayoutEffect, useState } from "react";

const Services = () => {
  const [slicedData, setSliceddata] = useState(ServicesData);
  const [mobileView, setMobielView] = useState(false);
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth <= 1000) {
        setMobielView(true);
        setSliceddata(slicedData.slice(0, 2));
      } else {
        setSliceddata(ServicesData);
        setMobielView(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <Wrapper>
        <Container>
          <SectionHeader
            icon={ServicesIcon}
            title={"01 . Services"}
            leftAlign={true}
            oneliner={
              "High-impact services to take your business to the next level"
            }
            color={"#fff"}
          />
          {!mobileView && (
            <Button style={{ height: 52, padding: "0px 34px", width: 200 }}>
              Our Services{" "}
              <Ellipse>
                <img src={Arrow} alt="" height={10} width={6} />{" "}
              </Ellipse>
            </Button>
          )}
        </Container>

        <Grid>
          {slicedData.map((service) => (
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
        {mobileView && (
          <Button
            style={{
              height: 52,
              padding: "0px 34px",
              margin: "auto",
              width: 200,
            }}
          >
            Our Services{" "}
            <Ellipse>
              <img src={Arrow} alt="" height={10} width={6} />{" "}
            </Ellipse>
          </Button>
        )}
      </Wrapper>
    </Background>
  );
};

export default Services;
