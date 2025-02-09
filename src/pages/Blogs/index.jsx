
import {
  Banner,
  Wrapper,
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
  HeaderContainer,
} from "./index.styled";
import SectionHeader1 from "../../components/Section/SectionHeader1";
import { useEffect } from "react";
import Article from "../../components/Homepage/Articles/Article";
import Subscribe from "../../components/Subscribe";
import Button from "../../components/Button";
import { Container } from "../../components/Homepage/Articles/index.styled";
import ArticleIcon from "../../assets/articles-icon.png";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../../helpers/Queries";
import { formatDate } from "../../helpers/Utils";

const Blogs = () => {

  const navigate = useNavigate()

  const blogs = useQuery(GET_BLOGS, { variables: { skip: 0, take: 4, categoryId: null } })
  console.log(blogs)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);


  return (
    <Wrapper>
      <Banner />
      <HeaderContainer>
        <SectionHeader1
          icon={ArticleIcon}
          title={"01 . Articles"}
          leftAlign={true}
          onelinerwidth={"100%"}
          oneliner={"Browse our content on growth marketing"}
        />

        <Container>
          <Article />
        </Container>
      </HeaderContainer>

      <Subscribe />

      <BlogsContainer>
        <Header1>
          <Title>Latest posts</Title>
          <div style={{ display: "flex", gap: 10 }}>
            <Button>All</Button>
            <Button>Growth</Button>
            <Button>Content</Button>
            <Button>Social Media</Button>
          </div>
        </Header1>
        <BlogGrid>
          {blogs?.data?.AllBlogPosts?.map((item) => (
            <BlogCard onClick={() => navigate(`/blogs/${item.id}`)}>
              <Image src={item.coverPhotoURL} alt="" />
              <Column>
                <Header>
                  <Category>{item.category.name}</Category>
                  <Date>{formatDate(item.createdAt)}</Date>
                </Header>
                <Title>{item.title}</Title>
              </Column>
              {/* <Text>{item.designation}</Text> */}
            </BlogCard>
          ))}
        </BlogGrid>
      </BlogsContainer>
    </Wrapper>
  );
};

export default Blogs;
