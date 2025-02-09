import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import  Homepage from "../pages/Homepage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services";
import Service from "../pages/Service";
import Career from "../pages/Career";
import CareerDetail from "../pages/CareerDetail";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import CaseStudies from "../pages/CaseStudies";
import CaseStudy from "../pages/CaseStudy";

const router = [
  {
    path: "/",
    element: <Homepage />,
  }, 
  {
    path: "/pricing",
    element: <Homepage />,
  }, 
  {
    path: "/about-us",
    element: <AboutUs />
  },
  {
    path: "/contact-us",
    element: <ContactUs />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/service/:id",
    element: <Service />
  },
  {
    path: "/career",
    element: <Career />
  },
  {
    path: "/career/:id",
    element: <CareerDetail />
  },
  {
    path: "/blogs",
    element: <Blogs />
  },
  {
    path: "/blogs/:id",
    element: <Blog/>
  },
  {
    path: "/case-studies",
    element: <CaseStudies/>
  },
  {
    path: "/case-studies/:id",
    element: <CaseStudy/>
  }
];

const RouterConfig = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {router?.map((route) => (
          <Route exact path={route?.path} element={route?.element} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};
export default RouterConfig;
