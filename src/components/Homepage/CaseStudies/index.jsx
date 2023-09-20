import {
  Wrapper,
  Background,
  Header,
  Column,
  Container,
  Card,
  Heading,
  CardHeader,
  Ellipse,
  SideImage,
  Category,
  Detail,
} from "./index.styled";
import SectionName from "../../SectionName";
import CaseStudiesIcon from "../../../assets/case-studies-icon.png";
import Button from "../../Button";
import Arrow from "../../../assets/arrow.png";
import CaseStudiesImage from "../../../assets/case-studies-image.png";
import { useState } from "react";

import { CaseStudiesData } from "../../../constants/CaseStudies";

const CaseStudies = () => {
  const [selected, setSelected] = useState(0);

  const Preview = ({ index }) => {
    return (
      <Card
        selected={selected === index}
        onClick={() => {
          selected === index ? setSelected(null) : setSelected(index);
        }}
      >
        <Category>Branding/Campaign</Category>
        <CardHeader>
          <Heading>{CaseStudiesData[index].title}</Heading>
          <Ellipse selected={selected === index}>
            <img src={Arrow} alt="" />
          </Ellipse>
        </CardHeader>
        <Detail>{CaseStudiesData[index].preview}</Detail>
      </Card>
    );
  };

  return (
    <Background>
      <Wrapper>
        <Container>
          <Header>
            <img src={CaseStudiesIcon} alt="" />
            <Column>
              <SectionName
                section={"05 . Case Sudies"}
                mobileViewAlignment={"left"}
                color={"#fff"}
              />
              <span style={{ color: "#fff" }}>
                Various Projects Done. Browse our latest case study on Marketing
                Agency
              </span>
            </Column>
          </Header>
          <Button style={{ height: 52, padding: "0px 34px" }}>
            More Case Studies
          </Button>
        </Container>

        <Container style={{ padding: 40, width: "90%", gap: "0px" }}>
          <div style={{ width: "45%" }}>
            {selected === 0 ? (
              <Preview index={0} />
            ) : (
              <Card
                onClick={() => {
                  selected === 0 ? setSelected(null) : setSelected(0);
                }}
              >
                <CardHeader>
                  <Heading>Online Media Management</Heading>
                  <Ellipse>
                    <img src={Arrow} alt="" />
                  </Ellipse>
                </CardHeader>
              </Card>
            )}

            {selected === 1 ? (
              <Preview index={1} />
            ) : (
              <Card
                onClick={() => {
                  selected === 1 ? setSelected(null) : setSelected(1);
                }}
              >
                <CardHeader>
                  <Heading>Experiential Marketing</Heading>
                  <Ellipse>
                    <img src={Arrow} alt="" />
                  </Ellipse>
                </CardHeader>
              </Card>
            )}

            {selected === 2 ? (
              <Preview index={2} />
            ) : (
              <Card
                onClick={() => {
                  selected === 2 ? setSelected(null) : setSelected(2);
                }}
              >
                <CardHeader>
                  <Heading>Email Marketing</Heading>
                  <Ellipse>
                    <img src={Arrow} alt="" />
                  </Ellipse>
                </CardHeader>
              </Card>
            )}
          </div>
          <SideImage src={CaseStudiesImage} alt="" height={400} width={"48%"} />
        </Container>
      </Wrapper>
    </Background>
  );
};

export default CaseStudies;
