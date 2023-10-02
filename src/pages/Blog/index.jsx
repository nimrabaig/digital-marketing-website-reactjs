import {
  Banner,
  StyledContainer,
  Column,
  Heading,
  SubHeading,
  AboutSection,
  Bullet,
  ServiceText,
  TextContainer,
  WorkFlow,
  WorkFlowHeading,
  ProcessFlow,
  FlowSteps,
  ProcessDivider,
  StepDescription,
} from "./index.styled";
import {
  Card,
  Title,
  Description,
  Grid,
  Background,
} from "../../components/Homepage/Services/index.styled";
import {
  Container,
  Wrapper,
} from "../../components/Homepage/CaseStudies/index.styled";
import ServicesIcon from "../../assets/services-icon.png";
import SectionHeader from "../../components/Section/SectionHeader";
import { ServicesData } from "../../constants/Services";
import { useParams } from "react-router-dom";
import AboutIcon from "../../assets/at.png";
import Check from "../../assets/bullet-check.png";
import { Separator } from "../../components/Homepage/AboutUs/index.styled";
import { cx, css } from "@emotion/css";
import Flow1 from "../../assets/flow-1.png";
import Flow2 from "../../assets/flow-2.png";
import Flow3 from "../../assets/flow-3.png";
import { useEffect } from "react";
import CaseStudiesBanner from "../../assets/case-studies-details.png";
import Google from "../../assets/google.png"
import Blog1 from "../../assets/blog-1.png"
import Natasha from "../../assets/Natasha.png"
import In from "../../assets/In.png"
import Insta from "../../assets/Insta.png"
import Fb from "../../assets/Fb.png"
import Twiter from "../../assets/Twiter.png"
import { styled } from "styled-components";

const Blog = () => {
  const params = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const Container = styled.div`

  `;

  const Banner = styled.div`
  width: 100%;
  height: 500px; 
  background: url(${CaseStudiesBanner}) no-repeat center center;
  background-size: cover;
`;

  const OverlayContent = styled.div`
  width: 80%;
  margin-top: -300px;
  margin-left: auto;
  margin-right: auto;
`;

  const NonOverlayContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;

  const OverlayTextCompany = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

  const Category = styled.div`
  border: 1px solid rgba(41, 41, 48, 1);
  border-radius: 20px;
  color: rgba(41, 41, 48, 1);
  width: max-content;
  padding: 10px 20px;
  margin-right: 25px;
`;

  const Dates = styled.div`
  color: #555;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
  text-align: left;
  font-weight: 500;
`;

  const OverlayHeading = styled.div`
  color: rgba(41, 41, 48, 1);
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 49.73px;
  margin-bottom: 20px;
`;

  const OverlayInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(204, 204, 204, 1);
  margin-bottom: 90px;
  margin-top: 10px;
`
  const OverlayInfoDiv = styled.div`
  align-self: center;
`
  const OverlayInfoDivInner = styled.div`
  display: flex;

`
  const OverlayInfoDivTitle = styled.div`
  color: rgba(41, 41, 48, 1);
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
`
  const OverlayInfoDivDesc = styled.div`
  color: rgba(255, 117, 3, 1);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`

  const OverlayPara = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 90px;
`
  const OverlayParaHeading = styled.div`
  color: rgba(48, 48, 48, 1);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
`

  const OverlayParaPara = styled.p`
  color: rgba(85, 85, 85, 1);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  b{
    color: rgba(48, 48, 48, 1)
  }
`

  return (
    <Container>
      <Banner />
      <OverlayContent>
        <OverlayTextCompany>
          <Category>Marketing</Category>
          <Dates>October 1, 2023</Dates>
        </OverlayTextCompany>
        <OverlayHeading>Title: Ethics in Digital Marketing</OverlayHeading>
        <img src={Blog1} alt="" style={{ width: '100%', height: 'auto' }} />
      </OverlayContent>
      <NonOverlayContent>
        <OverlayInfo>
          <OverlayInfoDiv>
            <OverlayInfoDivInner>
              <img src={Natasha} alt="" style={{ width: '100%', height: 'auto', marginRight: 20 }} />
              <div>
                <OverlayInfoDivTitle>Natasha</OverlayInfoDivTitle>
                <OverlayInfoDivDesc>Designer</OverlayInfoDivDesc>
              </div>
            </OverlayInfoDivInner>
          </OverlayInfoDiv>

          <OverlayInfoDiv>
            <img src={Insta} alt="" style={{ marginRight: 30 }} />
            <img src={Fb} alt="" style={{ marginRight: 30 }} />
            <img src={Twiter} alt="" />
          </OverlayInfoDiv>
        </OverlayInfo>
        <OverlayPara>
          <OverlayParaHeading>Title: Ethics in Digital Marketing </OverlayParaHeading>
          <OverlayParaPara>
            In the ever-evolving world of digital marketing, where technology and creativity intersect to capture consumers' attention, one thing should never be compromised: ethics. The power of digital marketing is immense, and with great power comes great responsibility. In this blog, we'll explore the critical importance of ethics in digital marketing and why businesses should make ethical considerations a cornerstone of their online strategies.
          </OverlayParaPara>
          <OverlayParaPara><b>The Digital Marketing Revolution </b></OverlayParaPara>
          <OverlayParaPara>
            Digital marketing has completely transformed the way businesses connect with their audiences. From social media campaigns to email marketing and influencer partnerships, the digital landscape offers a plethora of tools and platforms to engage potential customers. It's cost-effective, highly targeted, and measurable, making it an attractive choice for businesses of all sizes.
          </OverlayParaPara>
          <OverlayParaPara><b>Why Ethics Matter in Digital Marketing</b></OverlayParaPara>
          <OverlayParaPara>
            In the race to gain a competitive edge and maximize profits, it's easy for some marketers to overlook ethical concerns. However, this shortsighted approach can lead to severe consequences. Here's why ethics matter in digital marketing:
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Trust and Reputation:</b> Building trust with your audience is paramount. Unethical practices, such as misleading advertising or deceptive content, can quickly erode trust and tarnish a brand's reputation.
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Long-Term Success:</b> Ethical digital marketing isn't just about playing by the rules; it's about building sustainable, long-term success. Engaging in unethical practices may yield short-term gains but can result in long-term losses.
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Legal Consequences:</b> Some unethical tactics can lead to legal troubles. Violating privacy laws or engaging in false advertising can result in costly legal battles.
          </OverlayParaPara>
          <OverlayParaPara><b>Ethical Principles in Digital Marketing</b></OverlayParaPara>
          <OverlayParaPara>
            To navigate the digital marketing landscape responsibly, marketers should adhere to several key ethical principles:
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Transparency:</b> Be transparent about sponsored content, paid partnerships, and advertisements. Ensure that consumers know when they are viewing promotional material.
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Privacy:</b> Respect user data and privacy. Always obtain informed consent before collecting and using personal information.
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Honesty:</b> Avoid false or misleading claims. Don't use deceptive tactics or create fake reviews. Honesty is a cornerstone of ethical marketing.
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Fairness:</b> Treat all customers and competitors fairly. Unfair competition tactics can harm not only your reputation but the entire industry.
          </OverlayParaPara>
          <OverlayParaPara><b>Common Ethical Dilemmas</b></OverlayParaPara>
          <OverlayParaPara>
            In the digital marketing world, ethical dilemmas can be complex. Some common ethical dilemmas include:
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Targeting Vulnerable Audiences:</b> Is it ethical to aggressively target vulnerable demographics, such as children or older people?
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Clickbait Content:</b> Should you create sensationalistic clickbait content to drive traffic, even if it misrepresents the actual content?
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Manipulating User Data:</b> Is collecting and using user data without their explicit consent ethical, even if it helps improve targeting?
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Aggressive Retargeting:</b> How much retargeting is too much? When does it become intrusive rather than helpful?
          </OverlayParaPara>
          <OverlayParaPara><b>Best Practices for Ethical Digital Marketing</b></OverlayParaPara>
          <OverlayParaPara>
            Here are some best practices to ensure ethical conduct in your digital marketing efforts:
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Create Clear Policies:</b> Develop and communicate clear privacy policies to users. Please explain how you handle their data.
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Opt-In and Opt-Out Options:</b> Provide users with clear opt-in and opt-out options, respecting their data collection and marketing communications choices.
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Avoid Deception:</b> Do not engage in deceptive practices, such as fake reviews or misleading advertising. Build trust through honesty.
          </OverlayParaPara>
          <OverlayParaPara>
            <b>Regular Review:</b> Regularly review your digital marketing strategies for ethical compliance. Stay updated with evolving regulations and industry standards.
          </OverlayParaPara>
          <OverlayParaPara></OverlayParaPara>
          <OverlayParaPara></OverlayParaPara>


        </OverlayPara>

      </NonOverlayContent>
    </Container >
  );
};



export default Blog;
