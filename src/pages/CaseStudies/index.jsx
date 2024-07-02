import {
  Banner,
  Wrapper,
} from "./index.styled";
import { useEffect } from "react";
import Articles2 from "../../components/Homepage/Articles2";

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
