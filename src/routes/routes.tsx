import { createBrowserRouter } from 'react-router-dom';
import Home from 'Pages/home'
import OurServices from 'Pages/ourServices'
import Layout from 'Layout/layout';
import AppDesign from 'Pages/appDesign';
import Projects from 'Pages/projects';

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
      }
    ]
  },
]);

export default routes