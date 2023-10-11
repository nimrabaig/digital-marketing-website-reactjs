import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import  Homepage from "../pages/Homepage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services";
import Service from "../pages/Service";
import Career from "../pages/Career";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import CaseStudies from "../pages/CaseStudies";
import CaseStudy from "../pages/CaseStudy";
import Admin_BlogCreate from "../pages/Admin_BlogCreate";
import Admin_Dashboard from "../pages/Admin_Dashboard";
import Admin_BlogView from "../pages/Admin_BlogView";
import Admin_BlogUpdate from "../pages/Admin_BlogUpdate";
import Admin_CareerCreate from "../pages/Admin_CareerCreate";
import Admin_CareerView from "../pages/Admin_CareerView";
import Admin_CareerUpdate from "../pages/Admin_CareerUpdate";

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
  },
  {
    path: "/admin",
    element: <Admin_Dashboard/>
  },
  {
    path: "/admin/blogs/create",
    element: <Admin_BlogCreate/>
  },
  {
    path: "/admin/blogs/update/:id",
    element: <Admin_BlogUpdate/>
  },
  {
    path: "/admin/blogs/list",
    element: <Admin_BlogView/>
  },
  {
    path: "/admin/careers/create",
    element: <Admin_CareerCreate/>
  },
  {
    path: "/admin/careers/update/:id",
    element: <Admin_CareerUpdate/>
  },
  {
    path: "/admin/careers/list",
    element: <Admin_CareerView/>
  },
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
