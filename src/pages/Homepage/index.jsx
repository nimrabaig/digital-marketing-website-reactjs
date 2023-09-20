import AboutUs from "../../components/Homepage/AboutUs";
import { Separator } from "../../components/Homepage/AboutUs/index.styled";
import Articles from "../../components/Homepage/Articles";
import Banner from "../../components/Homepage/Banner";
import Benefits from "../../components/Homepage/Benefits";
import CaseStudies from "../../components/Homepage/CaseStudies";
import OurProcess from "../../components/Homepage/OurProcess";
import Pricing from "../../components/Homepage/Pricing";
import Services from "../../components/Homepage/Services";
import Testimonials from "../../components/Homepage/Testimonials";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Services />
      <AboutUs />
      <OurProcess />
      <Testimonials />
      <CaseStudies />
      <Pricing />
      <Benefits />
      <Separator style={{ margin: "20px auto 100px" }}/>
      <Articles />
    </>
  )
}

export default Homepage;