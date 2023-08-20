
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';

import Home from './pages/Home';
import Users from './pages/Users';
import Products from './pages/Products';

import User from './pages/User';
import Product from './pages/Product';
import Orders from './pages/Orders';

 import "./global.scss";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';


function App() {

  const Layout = () =>{
    return(
      <div className="main">
        <Navbar />
          <div className="container">
            <div className="menuContainer">
               <Menu />
            </div>
            <div className="contentContainer">
                <Outlet />
            </div>
          </div>
        <Footer />

      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout />,
     
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],

    },
    {
      path: "/login",
      element: <Login />,
    }

  ]);
  
  return <RouterProvider router={router} />;
}
export default App;
