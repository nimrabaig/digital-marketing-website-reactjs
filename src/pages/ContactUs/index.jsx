import SectionHeader from "../../components/Section/SectionHeader";
import {
  Banner,
  Container,
  Wrapper,
  Flex,
  Grid,
  ContactCardOuter,
  CardInner,
  Select,
  Tag,
  Column,
  Text,
  FormBackground,
  TextArea,
  FAQQuestion,
  FAQ,
  FAQAnswer,
  FAQContainer,
  Ellipse,
} from "./index.styled";
import { Label } from "@progress/kendo-react-labels";
import Icon from "../../assets/hand-shake-icon.png";
import FAQIcon from "../../assets/testimonials-icon.png";
import Separator from "../../components/Separator";
import Email from "../../assets/contact-email.png";
import Phone from "../../assets/contact-phone.png";
import Location from "../../assets/contact-location.png";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Subscribe from "../../components/Subscribe";
import { FAQs } from "../../constants/FAQs";
import Arrow from "../../assets/arrow.png";
import { useEffect, useState } from "react";
import { cx, css } from "@emotion/css";
import { SubjectOptions } from "../../constants/Dropdowns";
import axios from 'axios'

const ContactUs = () => {

  const toNullIfEmpty = (value) => {
    const trimmedValue = value.trim();
    return trimmedValue === '' ? null : trimmedValue;
  };

  const endpoint = 'https://adz7rajlui.execute-api.ca-central-1.amazonaws.com/graphql'
  const mutation = `
  mutation ContactUs($name: String!, $email: String!, $company: String!, $subject: String!, $message: String!) {
    ContactUs(name: $name, email: $email, company: $company, subject: $subject, message: $message)
  }
`

  const [selected, setSelected] = useState(0);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmit = async () => {
    try {
      const response = await axios.post(endpoint, {
        query: mutation,
        variables: {
          name: toNullIfEmpty(name),
          email: toNullIfEmpty(email),
          company: toNullIfEmpty(company),
          subject: toNullIfEmpty(subject),
          message: toNullIfEmpty(message)
        }
      });
      console.log(response?.data?.data?.ContactUs?.message);
      alert(response?.data?.data?.ContactUs?.message)
    } catch (error) {
      alert('Please fill out all the fields')
      console.error('Error executing mutation:', error);
    }
  }


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const SelectedFAQ = ({ index }) => {
    return (
      <FAQContainer
        selected={selected === index}
        onClick={() => {
          selected === index ? setSelected(null) : setSelected(index);
        }}
      >
        <FAQQuestion>
          {" "}
          {FAQs[index].question}
          <Ellipse
            selected={selected === index}
            style={{ position: "relative", right: 0 }}
          >
            <img src={Arrow} alt="" />
          </Ellipse>
        </FAQQuestion>
        <FAQAnswer>{FAQs[index].answer}</FAQAnswer>
      </FAQContainer>
    );
  };

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

          <Grid>
            <ContactCardOuter>
              <CardInner>
                <Tag>Contact</Tag>
                <Separator />

                <Flex>
                  <img
                    src={Email}
                    alt=""
                    className={cx(
                      "",
                      css`
                        margin-bottom: 26px;
                        @media (max-width: 750px) {
                          margin-bottom: 15px;
                        }
                      `
                    )}
                  />
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
                  <img
                    src={Phone}
                    alt=""
                    className={cx(
                      "",
                      css`
                        margin-bottom: 26px;
                        @media (max-width: 750px) {
                          margin-bottom: 15px;
                        }
                      `
                    )}
                  />
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
                  <img
                    src={Location}
                    alt=""
                    className={cx(
                      "",
                      css`
                        margin-bottom: 55px;
                        @media (max-width: 750px) {
                          margin-bottom: 15px;
                        }
                      `
                    )}
                  />
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
          </Grid>

          <FormBackground>
            <Form>
              <Flex>
                <Input
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="John David"
                  label="Full Name*"
                />
                <Input
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="john@gmail.com"
                  label="Email*"
                />
              </Flex>
              <br />
              <Flex>
                <Input
                  name="company"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  placeholder="your company name here"
                  label="Company*"
                />
                <Column style={{ width: "100%", marginTop: "1em" }}>
                  <Label
                    style={{
                      width: "100%",
                      fontWeight: 600,
                      color: "rgba(41, 41, 48, 1)",
                      fontSize: 20,
                    }}
                  >
                    Subject*
                  </Label>
                  <Select
                    type="text"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    placeholder="How can we Help"
                    data={SubjectOptions}
                  />
                </Column>
              </Flex>
              <br />
              <br />
              <Column
                className={cx(
                  "",
                  css`
                    width: 80%;
                    @media (max-width: 750px) {
                      width: 100%;
                    }
                  `
                )}
              >
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
                <TextArea
                  name="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Hello there,I would like to talk about how to..."
                />
              </Column>
            </Form>

            <Button
              style={{
                backgroundColor: "rgba(41, 41, 48, 1)",
                color: "#fff",
                marginTop: 60,
                marginBottom: 40,
              }}
              onClick={() => handleSubmit()}
            >
              Send Message
            </Button>
          </FormBackground>
        </Container>
      </Wrapper>

      <Subscribe />

      <Wrapper>
        <Container>
          <SectionHeader
            icon={FAQIcon}
            title="02 . FAQ"
            oneliner={"Frequently Asked Questions"}
          />

          <FAQ>
            {FAQs.map((faq, index) =>
              selected === index ? (
                <SelectedFAQ index={index} />
              ) : (
                <FAQContainer
                  onClick={() => {
                    selected === index ? setSelected(null) : setSelected(index);
                  }}
                >
                  <FAQQuestion>
                    <div>{faq?.question}</div>
                    <Ellipse style={{ position: "relative", right: 0 }}>
                      <img src={Arrow} alt="" />
                    </Ellipse>
                  </FAQQuestion>
                </FAQContainer>
              )
            )}
          </FAQ>
        </Container>
      </Wrapper>
    </>
  );
};

export default ContactUs;
