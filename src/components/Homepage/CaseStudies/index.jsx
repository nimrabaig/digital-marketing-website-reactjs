import {
  Wrapper,
  Background,
  Container,
  Card,
  Heading,
  CardHeader,
  Ellipse,
  SideImage,
  Category,
  Detail,
  SideContainer,
} from "./index.styled";
import CaseStudiesIcon from "../../../assets/case-studies-icon.png";
import Button from "../../Button";
import Arrow from "../../../assets/arrow.png";
import CaseStudiesImage from "../../../assets/case-studies-image.png";
import { useState } from "react";

import { CaseStudiesData } from "../../../constants/CaseStudies";
import SectionHeader from "../../Section/SectionHeader";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const navigate = useNavigate();
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
          <SectionHeader
            icon={CaseStudiesIcon}
            title={"05 . Case Sudies"}
            oneliner={
              "Browse our latest case study on Marketing Agency"
            }
            color={"#fff"}
            leftAlign={true}
          />

          <Button
            onClick={() => navigate("/case-studies")}
            style={{ height: 52, padding: "0px 34px", minWidth: 134 }}
          >
            More Case Studies
          </Button>
        </Container>

        <Container style={{ width: "90%", gap: "0px", marginTop: 20 }}>
          <SideContainer>
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
          </SideContainer>
          <SideImage
            src={CaseStudiesImage}
            alt=""
            width={"48%"}
            height={"48%"}
          />
        </Container>
      </Wrapper>
    </Background>
  );
};

export default CaseStudies;
