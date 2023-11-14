import { Background } from "../Homepage/Services/index.styled";
import {
  Wrapper,
  Input,
  Row,
  Text,
  SubscribeNow,
  SubscriptionBox,
  SubscriptionText,
  Link,
  Phone,
  Icon,
  Flex,
  Column,
  BottomRow,
  BottomColumn,
  SocialLink,
} from "./index.styled";
import Logo from "../../assets/logo.png";
import Lumenta from "../../assets/lumenta.png";
import Call from "../../assets/call.png";
import Location from "../../assets/location.png";
import Pages from "../../assets/pages.png";
import { Separator } from "../Homepage/Benefits/index.styled.js";
import Follows from "../../assets/follows.png";
import Links from "../../assets/links.png";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Background style={{ minHeight: 650 }}>
      <Wrapper>
        <SubscriptionBox>
          <img src={Logo} alt="" height={90} />
          <img src={Lumenta} alt="" />
          <SubscribeNow>Subscribe now</SubscribeNow>
          <SubscriptionText>
            Industry's standard from dummy and make a type book.{" "}
          </SubscriptionText>
          <Input placeholder="Enter Your Email..." />
          <Button
            style={{
              backgroundColor: "rgba(255, 117, 3, 1)",
              color: "#292930",
              border: "1px solid rgba(255, 117, 3, 1)",
              width: "77%",
            }}
          >
            Subscribe
          </Button>
        </SubscriptionBox>

        <Column>
          <Row style={{ gap: 40 }}>
            <Column style={{ gap: 15 }}>
              <Flex>
                <Icon src={Call} alt="" />
                <Text>Get in touch with</Text>
              </Flex>
              <Phone>+16138072399</Phone>
              <Text>info@lumentadigital.com</Text>
            </Column>

            <Column style={{ gap: 15, width: "50%" }}>
              <Flex>
                <Icon src={Location} alt="" />
                <Text>Location</Text>
              </Flex>
              <Text>
                1315 Derry Road East, Unit 1, Mississauga, Ontario, Canada. L5T
                1B6
              </Text>
              <Link>location</Link>
            </Column>
          </Row>

          <Separator style={{ width: "100%" }} />

          <BottomRow>
            <BottomColumn style={{ gap: 15 }}>
              <Flex>
                <Icon src={Pages} alt="" />
                <Text>Pages</Text>
              </Flex>
              <Text style={{ cursor: "pointer" }} onClick={() => navigate("/")}    className={css`
                  &:hover {
                    transition: all 0.5s;
                    transform: translateY(-2px);
                  }
                `}>
                Home
              </Text>
              <Text
                className={css`
                cursor: pointer;
                  &:hover {
                    transition: all 0.5s;
                    transform: translateY(-2px);
                  }
                `}
                onClick={() => navigate("/about-us")}
              >
                About
              </Text>
              <Text
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/services")}
                className={css`
                &:hover {
                  transition: all 0.5s;
                  transform: translateY(-2px);
                }
              `}
              >
                Services
              </Text>
              <Text
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/blogs")}
                className={css`
                &:hover {
                  transition: all 0.5s;
                  transform: translateY(-2px);
                }
              `}
              >
                Blogs
              </Text>
              <Text
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/contact-us")}
                className={css`
                &:hover {
                  transition: all 0.5s;
                  transform: translateY(-2px);
                }
              `}
              >
                Contact
              </Text>
            </BottomColumn>

            <BottomColumn style={{ gap: 15 }}>
              <Flex>
                <Icon src={Links} alt="" />
                <Text>Important Links</Text>
              </Flex>
              <Text
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/pricing")}
                className={css`
                &:hover {
                  transition: all 0.5s;
                  transform: translateY(-2px);
                }
              `}
              >
                Pricing
              </Text>
              <Text
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/career")}
                className={css`
                &:hover {
                  transition: all 0.5s;
                  transform: translateY(-2px);
                }
              `}
              >
                Career
              </Text>
              <Text>Case Study PDF</Text>
            </BottomColumn>

            <BottomColumn style={{ gap: 15 }}>
              <Flex>
                <Icon src={Follows} alt="" />
                <Text>Follows</Text>
              </Flex>
              <SocialLink
                href={
                  "https://www.facebook.com/people/Lumenta-Digital-Inc/61551468568740/?sk=about"
                }
                target="_blank"
              >
                Facebook
              </SocialLink>
              <SocialLink>Twitter</SocialLink>
              <SocialLink
                href="https://instagram.com/lumentadigital?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                Instagram
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/company/lumenta-digital"
                target="_blank"
              >
                LinkedIn
              </SocialLink>
            </BottomColumn>
          </BottomRow>

          <Separator style={{ width: "100%" }} />

          <Text style={{ textAlign: "center", margin: "auto 20px" }}>
            Copyright © 2023 - Lumenta Digital Inc
          </Text>
          <br />
        </Column>
      </Wrapper>
    </Background>
  );
};

export default Footer;
