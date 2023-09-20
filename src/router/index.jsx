import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import  Homepage from "../pages/Homepage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "../pages/AboutUs";

const router = [
  {
    path: "/",
    element: <Homepage />,
  }, 
  {
    path: "/about-us",
    element: <AboutUs />
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
