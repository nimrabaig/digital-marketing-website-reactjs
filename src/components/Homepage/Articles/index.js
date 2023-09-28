import { Column, Wrapper } from "../Pricing/index.styled";
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
  SideImage,
  Text,
  Title,
  Detail
} from "./index.styled";
import SectionHeader1 from "../../Section/SectionHeader1";

const Articles1 = () => {
  return (
    <Wrapper>
      <SectionHeader1
        icon={ArticleIcon}
        title={"08 . Articles"}
        leftAlign={true}
        oneliner={"Browse our content on growth marketing"}
      />

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

          <SideImage src={Article1} alt="" />
        </Card>

        {/* <Card bg={"rgba(233, 247, 255, 1)"}>
          <SideImage src={Article2} alt="" />
          <Column>
            <Header>
              <Category>Condent</Category>
              <Date>September 1, 2023</Date>
            </Header>
            <Title>
              How to reach out for guest posts to increase your SEO authority
            </Title>
            <Detail>
              Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus
              ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna
              auctor.
            </Detail>
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
        </Card> */}

        {/* <Button
          style={{
            backgroundColor: "rgba(41, 41, 48, 1)",
            color: "#fff",
            marginTop: 20,
          }}
        >
          More Articles
          <img src={WhiteArrow} alt="" style={{ marginLeft: 20 }} />{" "}
        </Button> */}
      </Container>
    </Wrapper>
  );
};

export default Articles1;
