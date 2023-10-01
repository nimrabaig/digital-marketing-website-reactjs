import { BlogData } from "../../constants/Blogs"
import {
  Banner,
  Wrapper,
  Text,
  Image,
  BlogGrid,
  BlogsContainer,
  BlogCard,
  Header,
  Category,
  Date,
  Column,
  Title,
  Header1,
} from "./index.styled";
import TeamsIcon from "../../assets/hand-shake-icon.png";
import SectionHeader from "../../components/Section/SectionHeader";
import { useEffect } from "react";
import Articles1 from "../../components/Homepage/Articles1";
import Subscribe from "../../components/Subscribe";
import Button from "../../components/Button";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Wrapper>
      <Banner />
      <Articles1 />
      <Subscribe />

      <BlogsContainer>
        <Header1>
          <Title>Latest posts</Title>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button>All</Button>
            <Button>Growth</Button>
            <Button>Content</Button>
            <Button>Social Media</Button>
          </div>
        </Header1>
        <BlogGrid>
          {BlogData.map((item) => (
            <BlogCard>
              <Image src={item.image} alt="" />
              <Column>
                <Header>
                  <Category>{item.tag}</Category>
                  <Date>{item.date}</Date>
                </Header>
                <Title>{item.title}</Title>
              </Column>
              <Text>{item.designation}</Text>
            </BlogCard>
          ))}
        </BlogGrid>

      </BlogsContainer>
    </Wrapper>
  );
};

export default Blogs;
