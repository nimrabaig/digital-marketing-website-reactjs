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

const router = [
  {
    path: "/",
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
    path: "/blog/:id",
    element: <></>
  },
  {
    path: "/case-studies",
    element: <></>
  },
  {
    path: "/case-studies/:id",
    element: <></>
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
