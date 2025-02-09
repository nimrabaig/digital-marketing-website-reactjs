import {
  TextContent,
  Wrapper,
  Separator,
  Services,
  ServiceHeader,
  ServiceText,
  ServiceDetail,
} from "./index.styled";
import AboutUsIcon from "../../../assets/at.png";
import Service1 from "../../../assets/about-us-1.png";
import Service2 from "../../../assets/about-us-2.png";
import SectionHeader from "../../Section/SectionHeader";
import StyledPage from "../../Wrapper";
import { css } from "@emotion/css";

const AboutUs = () => {
  return (
    <StyledPage style={{ paddingTop: 100 }}>
      <Wrapper>
        <TextContent
          className={css`
            @media (max-width: 1250px) and (min-height: 1250px) {
              width: 80%;
            }
            @media (max-width: 1000px) {
              margin: 90px auto 40px;
              width: 90%;
            }
          `}
        >
          <SectionHeader
            icon={AboutUsIcon}
            title={"02. ABOUT US"}
            leftAlign={true}
            oneliner={"The progressive digital marketing services company"}
          />
          <Separator />
        </TextContent>
        <TextContent
          className={css`
            @media (max-width: 1000px) {
              margin: 40px auto;
              width: 90%;
            }
          `}
        >
          <ServiceDetail style={{ marginLeft: 0 }}>
            At Lumenta Digital, we are passionate about illuminating your
            brand's presence in the ever-evolving digital landscape. We
            understand that in today's competitive marketplace, a strong online
            presence is the key to success.
          </ServiceDetail>

          <Services>
            <ServiceHeader>
              <img src={Service1} alt="" />
              <div style={{ width: "100%" }}>
                <ServiceText style={{ marginLeft: 10 }}>
                  Guaranteed Results
                </ServiceText>
                <Separator style={{ marginTop: 10 }} />
              </div>
            </ServiceHeader>
            <ServiceDetail>
              We understand that when you invest in digital marketing services,
              you're not just looking for promises; you're looking for results.
              That's why we stand by our commitment to delivering guaranteed
              results that make a real impact on your business.
            </ServiceDetail>
            <ServiceHeader>
              <img src={Service2} alt="" />
              <div style={{ width: "100%" }}>
                <ServiceText style={{ marginLeft: 10 }}>
                  Team of Industry Experts
                </ServiceText>
                <Separator style={{ marginTop: 10 }} />
              </div>
            </ServiceHeader>
            <ServiceDetail>
              Founded by a team of industry experts, Lumenta Digital was born
              out of a shared vision – to provide businesses with the tools and
              strategies they need to thrive online. With years of experience in
              the digital marketing field, our founders realized the immense
              potential of harnessing the power of the Internet to transform
              businesses.
            </ServiceDetail>
          </Services>
        </TextContent>
      </Wrapper>
    </StyledPage>
  );
};

export default AboutUs;
