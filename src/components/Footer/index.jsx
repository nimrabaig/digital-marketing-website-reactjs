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

const Footer = () => {
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
          <Input value="" placeholder="Enter Your Email..." />
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
              <Phone>+14169965329</Phone>
              <Text>nextlevel@marketing.com</Text>
            </Column>

            <Column style={{ gap: 15, width: "50%" }}>
              <Flex>
                <Icon src={Location} alt="" />
                <Text>Location</Text>
              </Flex>
              <Text>
                1315 Derry Road Unit 1, Mississauga, ON L5T1B6, Canada
              </Text>
              <Link>location</Link>
            </Column>
          </Row>

          <Separator style={{ width: "100%" }} />

          <Row
            style={{
              gap: 40,
              width: "100%",
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <Column style={{ gap: 15, alignSelf: "flex-start" }}>
              <Flex>
                <Icon src={Pages} alt="" />
                <Text>Pages</Text>
              </Flex>
              <Text>Home</Text>
              <Text>About</Text>
              <Text>Services</Text>
              <Text>Blog</Text>
              <Text>Contact</Text>
            </Column>

            <Column style={{ gap: 15, alignSelf: "flex-start" }}>
              <Flex>
                <Icon src={Links} alt="" />
                <Text>Important Links</Text>
              </Flex>
              <Text>Pricing</Text>
              <Text>PDF Quick #1</Text>
              <Text>PDF Important #2</Text>
              <Text>PDF New #3</Text>
              <Text>PDF Sample#4</Text>
            </Column>

            <Column style={{ gap: 15, alignSelf: "flex-start" }}>
              <Flex>
                <Icon src={Follows} alt="" />
                <Text>Follows</Text>
              </Flex>
              <Text>Facebook</Text>
              <Text>Twitter</Text>
              <Text>Instagram</Text>
              <Text>LinkedIn</Text>
            </Column>
          </Row>

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
