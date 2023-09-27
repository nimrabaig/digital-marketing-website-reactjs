import {
  TextContent,
  Wrapper,
  Separator,
  Services,
  ServiceHeader,
  ServiceText,
  ServiceDetail,
  Container,
} from "./index.styled";
import AboutUsIcon from "../../../assets/at.png";
import Service1 from "../../../assets/about-us-1.png";
import Service2 from "../../../assets/about-us-2.png";
import SectionHeader from "../../Section/SectionHeader";

const AboutUs = () => {
  return (
    <Container>
      <Wrapper>
        <TextContent>
        <SectionHeader
            icon={AboutUsIcon}
            title={"02. ABOUT US"}
            leftAlign={true}
            oneliner={
              "The progressive digital marketing services company"
            }
          />
          <Separator />

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
            <ServiceDetail >
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
              businesses
            </ServiceDetail>
          </Services>
        </TextContent>
      </Wrapper>
    </Container>
  );
};

export default AboutUs;
