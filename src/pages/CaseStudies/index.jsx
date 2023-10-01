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
import Articles2 from "../../components/Homepage/Articles2";
import Subscribe from "../../components/Subscribe";
import Button from "../../components/Button";

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Wrapper>
      <Banner />
      <Articles2 />
    </Wrapper>
  );
};

export default CaseStudies;
