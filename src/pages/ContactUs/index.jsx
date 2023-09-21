import SectionHeader from "../../components/Section/SectionHeader";
import {
  Banner,
  Container,
  Wrapper,
  Flex,
  ContactCardOuter,
  CardInner,
  Tag,
  Column,
  Text,
  FormBackground,
  TextArea,
} from "./index.styled";
import { Label } from "@progress/kendo-react-labels";
import Icon from "../../assets/hand-shake-icon.png";
import Separator from "../../components/Separator";
import Email from "../../assets/contact-email.png";
import Phone from "../../assets/contact-phone.png";
import Location from "../../assets/contact-location.png";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

const ContactUs = () => {
  return (
    <>
      <Banner />
      <Wrapper>
        <Container>
          <SectionHeader
            icon={Icon}
            title="01 . Contacts us"
            oneliner={"Let’s build something awesome together"}
          />

          <Flex>
            <ContactCardOuter>
              <CardInner>
                <Tag>Contact</Tag>
                <Separator />

                <Flex>
                  <img src={Email} alt="" style={{ marginBottom: 26 }} />
                  <Column>
                    <Text weight={600} size={25} color={"#292930"}>
                      Email
                    </Text>
                    <Text>info@lumentadigtal.com</Text>
                  </Column>
                </Flex>
              </CardInner>
            </ContactCardOuter>

            <ContactCardOuter>
              <CardInner>
                <Tag>Call</Tag>
                <Separator />

                <Flex>
                  <img src={Phone} alt="" style={{ marginBottom: 26 }} />
                  <Column>
                    <Text weight={600} size={25} color={"#292930"}>
                      Phone
                    </Text>
                    <Text>+14169965329</Text>
                  </Column>
                </Flex>
              </CardInner>
            </ContactCardOuter>

            <ContactCardOuter>
              <CardInner>
                <Tag>Office</Tag>
                <Separator />

                <Flex>
                  <img src={Location} alt="" style={{ marginBottom: 55 }} />
                  <Column>
                    <Text weight={600} size={25} color={"#292930"}>
                      Location
                    </Text>
                    <Text>
                      1315 Derry Road Unit 1, Mississauga, ON L5T1B6, CA
                    </Text>
                  </Column>
                </Flex>
              </CardInner>
            </ContactCardOuter>
          </Flex>

          <FormBackground>
            <Form>
              <Flex>
                <Input value="" placeholder="John David" label="Full Name*" />
                <Input value="" placeholder="john@gmail.com" label="Email*" />
              </Flex>
              <br />
              <Flex>
                <Input
                  value=""
                  placeholder="your company name here"
                  label="Company*"
                />
                <Input
                  value=""
                  placeholder="How can we Help"
                  label="Subject*"
                />
              </Flex>
              <br />
              <br />
              <Column style={{ width: "80%" }}>
                <Label
                  style={{
                    width: "100%",
                    fontWeight: 600,
                    color: "rgba(41, 41, 48, 1)",
                    fontSize: 20,
                  }}
                >
                  Message*
                </Label>
                <TextArea placeholder="Hello there,I would like to talk about how to..." />
              </Column>
            </Form>

            <Button style={{
              backgroundColor: "rgba(41, 41, 48, 1)",
              color: "#fff",
              marginTop: 60
            }}>Send Message</Button>
          </FormBackground>
        </Container>
      </Wrapper>
    </>
  );
};

export default ContactUs;
