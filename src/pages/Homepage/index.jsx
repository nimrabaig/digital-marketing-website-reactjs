import { useEffect } from "react";
import AboutUs from "../../components/Homepage/AboutUs";
import { Separator } from "../../components/Homepage/AboutUs/index.styled";
import Articles from "../../components/Homepage/Articles";
import Banner from "../../components/Homepage/Banner";
import Benefits from "../../components/Homepage/Benefits";
import CaseStudies from "../../components/Homepage/CaseStudies";
import OurProcess from "../../components/Homepage/OurProcess";
import Pricing from "../../components/Homepage/Pricing";
import Services from "../../components/Homepage/Services";
import { useLocation } from "react-router-dom";

const Homepage = () => {
  const path = useLocation().pathname;

  useEffect(() => {
    if (path === "/pricing") {
      const element = document.getElementById("pricing");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [path]);

  return (
    <>
      <Banner />
      <Services />
      <AboutUs />
      <OurProcess />
      {/* <Testimonials /> */}
      <CaseStudies />
      <Pricing />
      <Benefits />
      <Separator style={{ margin: "20px auto 100px" }} />
      <Articles />
    </>
  );
};

export default Homepage;
