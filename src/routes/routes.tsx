import { createBrowserRouter } from 'react-router-dom';
import Home from 'Pages/home'
import Layout from 'Layout/layout';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);

export default routes