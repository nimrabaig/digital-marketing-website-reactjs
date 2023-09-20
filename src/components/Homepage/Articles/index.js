import { Column, Oneliner, Wrapper } from "../Pricing/index.styled";
import SectionName from "../../SectionName";
import Button from "../../Button";
import Arrow from "../../../assets/arrow.png";
import WhiteArrow from "../../../assets/white-arrow.png";
import { Ellipse } from "../Services/index.styled";
import ArticleIcon from "../../../assets/articles-icon.png";
import Article1 from "../../../assets/article-1.png";
import Article2 from "../../../assets/article-2.png";
import {
  Card,
  Category,
  Container,
  Date,
  Header,
  Text,
  Title,
} from "./index.styled";

const Articles = () => {
  return (
    <Wrapper>
      <img
        src={ArticleIcon}
        alt=""
        height={80}
        width={80}
        style={{ marginBottom: 20 }}
      />
      <SectionName section={"08 . Articles"} margin={"auto"} />
      <Oneliner>Browse our content on growth marketing</Oneliner>

      <Container>
        <Card bg={"rgba(255, 243, 202, 1)"}>
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

          <img src={Article1} alt="" />
        </Card>

        <Card bg={"rgba(233, 247, 255, 1)"}>
          <img src={Article2} alt="" />
          <Column>
            <Header>
              <Category>Condent</Category>
              <Date>September 1, 2023</Date>
            </Header>
            <Title>
              How to reach out for guest posts to increase your SEO authority
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
        </Card>

        <Button
          style={{
            backgroundColor: "rgba(41, 41, 48, 1)",
            color: "#fff",
            marginTop: 20,
          }}
        >
          More Articles
          <img src={WhiteArrow} alt="" style={{ marginLeft: 20 }} />{" "}
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Articles;
