import { Wrapper } from "../Pricing/index.styled";
import Button from "../../Button";
import Arrow from "../../../assets/arrow.png";
import Google from "../../../assets/google.png";
import Youtube from "../../../assets/youtube.png";
import Facebook from "../../../assets/facebook.png";
import WhiteArrow from "../../../assets/white-arrow.png";
import { Ellipse } from "../Services/index.styled";
import ArticleIcon from "../../../assets/articles-icon.png";
import Article1 from "../../../assets/article-1.png";
import Article2 from "../../../assets/article-2.png";
import cs1 from "../../../assets/cs1.png";
import cs2 from "../../../assets/cs2.png";
import cs3 from "../../../assets/cs3.png";
import {
  Card,
  Column,
  Category,
  Container,
  Date,
  Header,
  SideImage,
  Text,
  Title,
  HeaderImage,
} from "./index.styled";
import SectionHeader from "../../Section/SectionHeader";
import { useNavigate } from "react-router-dom";

const Articles2 = () => {

  const navigate = useNavigate();
  
  return (
    <Wrapper>
      <SectionHeader
        icon={ArticleIcon}
        title={"01 . Case Studies"}
        oneliner={"Browse our case studies"}
      />

      <Container>
        {/* <Card bg={"rgba(255, 243, 202, 1)"}>
          <Column>
            <Header>
              <Category>Marketing</Category>
              <Date>September 1, 2023</Date>
            </Header>
            <Title>
              How to increase your Twitter reach by over 200% with this simple
              trick
            </Title>
            <Text>
              Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus
              ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna
              auctor.
            </Text>
            <Button
              style={{
                border: "1px solid #fff",
                marginRight: "auto",
                marginTop: 20,
              }}
            >
              Read More{" "}
              <Ellipse>
                <img src={Arrow} alt="" height={10} width={6} />{" "}
              </Ellipse>
            </Button>
          </Column>

          <SideImage src={Article1} alt="" />
        </Card> */}

        <Card bg={"rgba(233, 247, 255, 1)"}>
          <SideImage src={cs1} alt="" />
          <Column>
            {/* <Header>
              <Category>Condent</Category>
              <Date>September 1, 2023</Date>
            </Header> */}
            <HeaderImage>
              <img src={Google} alt="" />{" "}
            </HeaderImage>
            <Title>
              How we helped Google to increase conversion rate on G-Suite by 25% in less than 30 days
            </Title>
            <Text>
              Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus
              ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna
              auctor.
            </Text>
            <Button
              style={{
                alignSelf: 'flex-start',
                backgroundColor: "rgba(41, 41, 48, 1)",
                color: "#fff",
                marginTop: 20,
              }}
              onClick={() => navigate(`/case-studies/1`)}
            >
              Read Case Study
              <img src={WhiteArrow} alt="" style={{ marginLeft: 20 }} />{" "}
            </Button>
          </Column>
        </Card>

        <Card bg={"rgba(255, 219, 212, 1)"}>
          <SideImage src={cs2} alt="" />
          <Column>
            {/* <Header>
              <Category>Condent</Category>
              <Date>September 1, 2023</Date>
            </Header> */}
            <HeaderImage>
              <img src={Youtube} alt="" />{" "}
            </HeaderImage>
            <Title>
              How we helped Google to increase conversion rate on G-Suite by 25% in less than 30 days
            </Title>
            <Text>
              Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus
              ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna
              auctor.
            </Text>
            <Button
              style={{
                alignSelf: 'flex-start',
                backgroundColor: "rgba(41, 41, 48, 1)",
                color: "#fff",
                marginTop: 20,
              }}
              onClick={() => navigate(`/case-studies/1`)}
            >
              Read Case Study
              <img src={WhiteArrow} alt="" style={{ marginLeft: 20 }} />{" "}
            </Button>
          </Column>
        </Card>

        <Card bg={"rgba(255, 243, 202, 1)"}>
          <SideImage src={cs3} alt="" />
          <Column>
            {/* <Header>
              <Category>Condent</Category>
              <Date>September 1, 2023</Date>
            </Header> */}
            <HeaderImage>
              <img src={Facebook} alt="" />{" "}
            </HeaderImage>
            <Title>
              How we helped Google to increase conversion rate on G-Suite by 25% in less than 30 days
            </Title>
            <Text>
              Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus
              ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna
              auctor.
            </Text>
            <Button
              style={{
                alignSelf: 'flex-start',
                backgroundColor: "rgba(41, 41, 48, 1)",
                color: "#fff",
                marginTop: 20,
              }}
              onClick={() => navigate(`/case-studies/1`)}
            >
              Read Case Study
              <img src={WhiteArrow} alt="" style={{ marginLeft: 20 }} />{" "}
            </Button>
          </Column>
        </Card>


      </Container>
    </Wrapper>
  );
};

export default Articles2;
