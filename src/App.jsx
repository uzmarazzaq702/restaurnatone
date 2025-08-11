import React, { useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Myaccount from "./pages/Myaccount";
import Shoppage from "./pages/Shoppage";
import OurResent from "./pages/OurResent";
import MenuPage from "./pages/Menu"; 
import Shop from "./pages/Shop";
import Pagess from "./pages/Pagess";
import Blog from "./pages/Blog";
import Detailspage from "./pages/Detailspage";

const MainFunction = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <MainFunction />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/myaccount", element: <Myaccount /> },
      { path: "/shoppage", element: <Shoppage /> },
      { path: "/ourresent", element: <OurResent /> },
      { path: "/menu", element: <MenuPage /> }, 
      { path: "/shop", element: <Shop /> }, 
      { path: "/pagess", element: <Pagess /> }, 
      { path: "/blog", element: <Blog /> }, 
      { path: "/detailspage", element: <Detailspage /> },
    ],
  },
]);

function App() {

useEffect(() => {
  AOS.init();
}, []);
  return <RouterProvider router={router} />;
}

export default App;
