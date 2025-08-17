// import { store } from "./app/store";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./index.css";
// import App from "./App.jsx";

import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Login from "./pages/loginSignup/login";

// import Shop from "./pages/shop/Shop";
import Layout from "./pages/layout/Layout";
import Men from "./components/men/Men";
// import Women from "./components/women/Women";
import Kids from "./components/kids/Kids";
import FilterData from "./pages/filter/FilterData";
import Address from "./pages/address/Address";
import Summary from "./pages/summary/SummaryPage";
import Thankyou from "./pages/thank you/Thankyou";
import About from "./pages/about/About";

import { Suspense, lazy } from "react";
const ProductsLazy = lazy(() => import("./assets/all_product"));
const Women = lazy(() => import("./components/women/Women"));
const Shop = lazy(() => import("./pages/shop/Shop"));
import Loader from "./components/loader/Loader";
import LoaderShop from "./components/loader/LoaderShop";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        // element: <Shop />,
        element: (
          <Suspense fallback={<LoaderShop />}>
            <Shop />
          </Suspense>
        ),
      },

      {
        path: "men",
        element: <Men />,
      },
      {
        path: "women",
        // element: <Women />,
        element: (
          <Suspense fallback={<Loader />}>
            <Women />
          </Suspense>
        ),
      },

      {
        path: "kids",
        element: <Kids />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "filter-data",
        element: <FilterData />,
      },
      {
        path: "/address",
        element: <Address />,
      },
      {
        path: "/summary",
        element: <Summary />,
      },
      {
        path: "/thankyou",
        element: <Thankyou />,
      },
       {
        path: "/about",
        element: <About/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
