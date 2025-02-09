
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CaseStudiesBanner from "../../assets/case-studies-details.jpg";
import Insta from "../../assets/Insta.png"
import Fb from "../../assets/Fb.png"
import Twiter from "../../assets/Twiter.png"
import { styled } from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_BLOG } from "../../helpers/Queries";
import { formatDate } from "../../helpers/Utils";

const Blog = () => {
  const params = useParams()

  const blog = useQuery(GET_BLOG, { variables: { viewBlogPostId: parseInt(params?.id) } })
  console.log(blog?.data?.ViewBlogPost)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const Container = styled.div`

  `;

  const Banner = styled.div`
  width: 100%;
  height: 500px; 
  background: url(${CaseStudiesBanner}) no-repeat center center;
  background-size: cover;
`;

  const OverlayContent = styled.div`
  width: 80%;
  margin-top: -300px;
  margin-left: auto;
  margin-right: auto;
`;

  const NonOverlayContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;

  const OverlayTextCompany = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

  const Category = styled.div`
  border: 1px solid rgba(41, 41, 48, 1);
  border-radius: 20px;
  color: rgba(41, 41, 48, 1);
  width: max-content;
  padding: 10px 20px;
  margin-right: 25px;
`;

  const Dates = styled.div`
  color: #555;
  font-family: Rubik;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156.5%; /* 28.17px */
  text-align: left;
  font-weight: 500;
`;

  const OverlayHeading = styled.div`
  color: rgba(41, 41, 48, 1);
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 49.73px;
  margin-bottom: 20px;
`;

  const OverlayInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(204, 204, 204, 1);
  margin-bottom: 90px;
  margin-top: 10px;
`
  const OverlayInfoDiv = styled.div`
  align-self: center;
`
  const OverlayInfoDivInner = styled.div`
  display: flex;

`
  const OverlayInfoDivTitle = styled.div`
  color: rgba(41, 41, 48, 1);
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
`
  const OverlayInfoDivDesc = styled.div`
  color: rgba(255, 117, 3, 1);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`

  const OverlayPara = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 90px;
`
  const OverlayParaHeading = styled.div`
  color: rgba(48, 48, 48, 1);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
`

  const OverlayParaPara = styled.p`
  color: rgba(85, 85, 85, 1);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  b{
    color: rgba(48, 48, 48, 1)
  }
`

  return (
    <Container>
      <Banner />
      <OverlayContent>
        <OverlayTextCompany>
          <Category>{blog?.data?.ViewBlogPost?.category?.name}</Category>
          <Dates>{formatDate(blog?.data?.ViewBlogPost?.createdAt)}</Dates>
        </OverlayTextCompany>
        <OverlayHeading>{blog?.data?.ViewBlogPost?.title}</OverlayHeading>
        <img src={blog?.data?.ViewBlogPost?.coverPhotoURL} alt="" style={{ width: '100%', height: 'auto' }} />
      </OverlayContent>
      <NonOverlayContent>
        <OverlayInfo>
          <OverlayInfoDiv>
            <OverlayInfoDivInner>
              <img src={blog?.data?.ViewBlogPost?.authorProfilePictureURL} alt="" width={50} height={50} style={{ marginRight: 20, borderRadius: 50 }} />
              <div>
                <OverlayInfoDivTitle>{blog?.data?.ViewBlogPost?.authorName}</OverlayInfoDivTitle>
                <OverlayInfoDivDesc>{blog?.data?.ViewBlogPost?.authorDesignation}</OverlayInfoDivDesc>
              </div>
            </OverlayInfoDivInner>
          </OverlayInfoDiv>

          <OverlayInfoDiv>
            <a href={blog?.data?.ViewBlogPost?.authorInstagramURL}>
              <img src={Insta} alt="" style={{ marginRight: 30 }} />
            </a>
            <a href={blog?.data?.ViewBlogPost?.authorFacebookURL}>
              <img src={Fb} alt="" style={{ marginRight: 30 }} />
            </a>
            <a href={blog?.data?.ViewBlogPost?.authorTwitterURL}>
              <img src={Twiter} alt="" />
            </a>
          </OverlayInfoDiv>
        </OverlayInfo>
        <OverlayPara>
          <OverlayParaHeading>Title: {blog?.data?.ViewBlogPost?.title}</OverlayParaHeading>
          <OverlayParaPara>
            <div dangerouslySetInnerHTML={{ __html: blog?.data?.ViewBlogPost?.content }}></div>
          </OverlayParaPara>
        </OverlayPara>

      </NonOverlayContent>
    </Container >
  );
};



export default Blog;
