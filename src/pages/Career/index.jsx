import SectionHeader from "../../components/Section/SectionHeader";
import {
  Background,
  Banner,
  Container,
  Wrapper,
  Grid,
  Card,
  Title,
  Description,
  Ellipse,
  GetInfo,
} from "./index.styled";
import Arrow from "../../assets/arrow.png";
import Icon from "../../assets/hand-shake-icon.png";
import { Careers } from "../../constants/Careers";
import GetInTouch from "../../components/GetInTouch";
import { useEffect } from "react";
import StyledPage from "../../components/Wrapper";
import { useQuery } from "@apollo/client";
import { GET_JOBS } from "../../helpers/Queries";
import { htmlToText, trimString } from "../../helpers/Utils";
import { useNavigate } from "react-router-dom";

const Career = () => {

  const navigate = useNavigate()

  const jobs = useQuery(GET_JOBS, { variables: { skip: 0, take: 4 } })
  console.log(jobs?.data?.AllJobPosts[0])
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Wrapper>
        <Banner />

        <Background>
          <Container>
            <SectionHeader
              icon={Icon}
              title={"01 . JOIN OUR TEAM"}
              oneliner={"Current job openings"}
              onelinerwidth={"100%"}
              color={"#fff"}
            />

            <Grid>
              {jobs?.data?.AllJobPosts?.map((item) => (
                <Card>
                  <Title>{item.title}</Title>
                  <Description>
                    {item.city} {item.country} | {item.jobType.name}
                  </Description>
                  <Description>{trimString(htmlToText(item.content), 150)}</Description>
                  <GetInfo onClick={() => navigate(`/career/${item.id}`)}>
                    Get Details{" "}
                    <Ellipse>
                      <img src={Arrow} alt="" height={10} width={6} />{" "}
                    </Ellipse>
                  </GetInfo>
                </Card>
              ))}
            </Grid>
          </Container>
        </Background>
      </Wrapper>
      <GetInTouch />
    </>
  );
};

export default Career;
