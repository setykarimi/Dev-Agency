import { createBrowserRouter } from 'react-router-dom';
import Home from 'Pages/home'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home /> 
  },
]);

export default routes