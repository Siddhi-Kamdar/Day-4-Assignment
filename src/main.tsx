import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Shop from "./components/Shop";
import ProductList from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import About from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
const Customize = () => <h2>Customize Product</h2>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        index: true,          
        element: <Shop />,
      },
      {
        path: "shop",
        children: [
          {
            index: true,      
            element: <Shop />,
          },
          {
            path: "products", 
            element: <ProductList />,
          },
          {
            path: "product/:productId", 
            element: <ProductDetail />,
          },
          {
            path: "product/:productId/customize",
            element: <Customize />,
          },
          {
            path: "cart",
            element: <Cart/>
          }
        ],
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store = {store}>
    <RouterProvider router={router} />
  </Provider>
);