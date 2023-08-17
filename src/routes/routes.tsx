import { createBrowserRouter } from 'react-router-dom';
import Home from 'Pages/home'
import OurServices from 'Pages/ourServices'
import Layout from 'Layout/layout';
import AppDesign from 'Pages/appDesign';
import Projects from 'Pages/projects/projects';
import { Watch, Education, Mdcl, Seo } from 'Pages/projects/projectsSub';
import Blog from 'Pages/blog/blog';
import BestDesignTips from 'Pages/blog/bestDesignTips';
import AboutUs from 'Pages/AboutUs';
import ContactUs from 'Pages/contactUs';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/our-services",
        element: <OurServices />
      },
      {
        path: "/our-services/app-design",
        element: <AppDesign />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/projects/watch",
        element: <Watch />
      },
      {
        path: "/projects/seo",
        element: <Seo />
      },
      {
        path: "/projects/education",
        element: <Education />
      },
      {
        path: "/projects/mdcl",
        element: <Mdcl />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/blog/best-design-tips",
        element: <BestDesignTips />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
    ]
  },
]);

export default routes