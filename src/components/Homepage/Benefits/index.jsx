import {
  Container,
  Wrapper,
  Header,
  Column,
  TextContent,
  BenefitItem,
  BenefitHeader,
  BenefitTitle,
  BenefitDescription,
  Separator,
} from "./index.styled";
import SectionName from "../../SectionName";
import BenefitIcon from "../../../assets/benefits-icon.png";
import Benefit1 from "../../../assets/benefit-1.png";
import Benefit2 from "../../../assets/benefit-2.png";
import Benefit3 from "../../../assets/benefit-3.png";

const Benefits = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <img src={BenefitIcon} alt="" />
          <Column>
            <SectionName section={"07 . Benefits"} mobileViewAlignment={"left"} />
            <span>Benifit of working with Lumanta</span>
          </Column>
        </Header>

        <TextContent>
          <BenefitItem>
            <BenefitHeader>
              <img src={Benefit1} alt="" />
              <div style={{ width: "100%" }}>
                <BenefitTitle style={{ marginLeft: 10 }}>
                  Page Rankings
                </BenefitTitle>
                <Separator style={{ marginTop: 10 }} />
                <BenefitDescription>
                  Climb the Ranks, Stay on Top.
                </BenefitDescription>
              </div>
            </BenefitHeader>
          </BenefitItem>

          <BenefitItem>
            <BenefitHeader>
              <img src={Benefit2} alt="" />
              <div style={{ width: "100%" }}>
                <BenefitTitle style={{ marginLeft: 10 }}>
                  Site Optimisation
                </BenefitTitle>
                <Separator style={{ marginTop: 10 }} />
                <BenefitDescription>
                  Optimize Your Site, Maximize Your Success
                </BenefitDescription>
              </div>
            </BenefitHeader>
          </BenefitItem>

          <BenefitItem>
            <BenefitHeader>
              <img src={Benefit3} alt="" />
              <div style={{ width: "100%" }}>
                <BenefitTitle style={{ marginLeft: 10 }}>
                  Reporting & Analysis
                </BenefitTitle>
                <Separator style={{ marginTop: 10 }} />
                <BenefitDescription>
                  Elevate Your Strategy with Data Intelligence.
                </BenefitDescription>
              </div>
            </BenefitHeader>
          </BenefitItem>
        </TextContent>
      </Container>
    </Wrapper>
  );
};

export default Benefits;
