import { useEffect } from "react";
import CaseStudiesBanner from "../../assets/case-studies-details.jpg";
import Google from "../../assets/google.png"
import Cs1 from "../../assets/case-study-1.jpg"
import { styled } from "styled-components";

const CaseStudy = () => {

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
  text-align: center;
`;

  const NonOverlayContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;

  const OverlayTextCompany = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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
  margin-top: 20px;
`
  const OverlayInfoDiv = styled.div`
  
`
  const OverlayInfoDivTitle = styled.div`
  color: rgba(41, 41, 48, 1);
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
`
  const OverlayInfoDivDesc = styled.div`
  color: rgba(85, 85, 85, 1);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`
  const OverlayInfoDivCount = styled.div`
  color: rgba(255, 117, 3, 1);
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
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
`

  return (
    <Container>
      <Banner />
      <OverlayContent>
        <OverlayTextCompany>
          <img src={Google} alt="" />{"  "}
          <div> - October 1, 2023</div>
        </OverlayTextCompany>
        <OverlayHeading>Unlocking Success: How Organic Facebook Likes Transformed SProStaffing's Online Presence</OverlayHeading>
        <img src={Cs1} alt="" style={{ width: '100%', height: 'auto' }} />
      </OverlayContent>
      <NonOverlayContent>
        <OverlayInfo>
          <OverlayInfoDiv>
            <OverlayInfoDivTitle>Client</OverlayInfoDivTitle>
            <OverlayInfoDivDesc>SProStaffing</OverlayInfoDivDesc>
          </OverlayInfoDiv>
          <OverlayInfoDiv>
            <OverlayInfoDivTitle>Services</OverlayInfoDivTitle>
            <OverlayInfoDivDesc>Paid Advertising</OverlayInfoDivDesc>
          </OverlayInfoDiv>
          <OverlayInfoDiv>
            <OverlayInfoDivTitle>Platforms</OverlayInfoDivTitle>
            <OverlayInfoDivDesc>Facebook</OverlayInfoDivDesc>
          </OverlayInfoDiv>
          <OverlayInfoDiv>
            <OverlayInfoDivTitle>Results</OverlayInfoDivTitle>
            <OverlayInfoDivCount>85m+</OverlayInfoDivCount>
            <OverlayInfoDivDesc>More Likes Per Year</OverlayInfoDivDesc>
          </OverlayInfoDiv>
        </OverlayInfo>
        <OverlayPara>
          <OverlayParaHeading>Project Overview</OverlayParaHeading>
          <OverlayParaPara>
            SProStaffing, a leading recruitment agency, sought to expand its online reach and engagement to attract both candidates and potential clients. Recognizing the power of social media in the digital age, they aimed to harness the potential of Facebook to establish a robust online community. Organic likes were deemed crucial to foster genuine connections and trust within the industry.
          </OverlayParaPara>
          <OverlayParaPara>
            In this digital era, social media stands as a formidable platform to connect, engage, and establish meaningful relationships with a broader audience. Among the various platforms available, Facebook emerged as a central hub for industry professionals, job seekers, and enterprises. Harnessing the potential of Facebook, SProStaffing embarked on a journey to bolster its online community and build a credible brand image.
          </OverlayParaPara>
          <OverlayParaPara><b>Key Points:</b></OverlayParaPara>
          <OverlayParaPara>&#8226; &nbsp;&nbsp; Utilized organic methods to attract a targeted audience interested in the staffing industry.</OverlayParaPara>
          <OverlayParaPara>&#8226; &nbsp;&nbsp; Fostered authentic interactions and meaningful engagement through genuine likes and follows.</OverlayParaPara>
          <OverlayParaPara>&#8226; &nbsp;&nbsp; Curated content aligning with SProStaffing's brand message and industry trends.</OverlayParaPara>
          <OverlayParaPara>&#8226; &nbsp;&nbsp; Shared industry insights, job opportunities, and success stories to resonate with the audience.</OverlayParaPara>
          <OverlayParaPara>&#8226; &nbsp;&nbsp; Nurtured a community of industry professionals, job seekers, and potential clients.</OverlayParaPara>
          <OverlayParaPara>&#8226; &nbsp;&nbsp; Encouraged discussions, feedback, and networking within the Facebook community.</OverlayParaPara>
          <OverlayParaPara><b>How Organic Likes Transformed the Business? </b></OverlayParaPara>
          <OverlayParaPara>&#8226; &nbsp;&nbsp; <b>Increased Visibility and Credibility:</b> The surge in organic likes bolstered SProStaffing's visibility, establishing credibility in the industry. Potential candidates and clients were more inclined to engage with a brand having a substantial and genuine online following.</OverlayParaPara>
          <OverlayParaPara>&#8226; &nbsp;&nbsp; <b>Business Growth and Opportunities:</b> The heightened online presence attracted a larger talent pool, strengthening SProStaffing's ability to match candidates with suitable job opportunities. SProStaffing witnessed an upsurge in business inquiries and collaborations, directly contributing to its growth and market influence.</OverlayParaPara>
        </OverlayPara>
      </NonOverlayContent>
    </Container>
  );
};



export default CaseStudy;
