import { Column, Wrapper } from "../Pricing/index.styled";
import Button from "../../Button";
import Arrow from "../../../assets/arrow.png";
import { Ellipse } from "../Services/index.styled";
import Article1 from "../../../assets/article-1.png";
import {
  Card,
  Category,
  Container,
  Date,
  Header,
  SideImage,
  Text,
  Title,
} from "./index.styled";

const Article = () => {
  return (
    <Wrapper>
      <Container style={{ margin: "auto" }}>
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
        </Card></Container>
    </Wrapper>


  
  );
};

export default Article;
