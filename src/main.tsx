import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductList from './components/Products.tsx'
import About from './components/AboutPage.tsx'
import NotFoundPage from './components/NotFoundPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ProductList /> }, 
      { path: "about", element: <About /> },
      {
        path: "shop",
        element: <ProductList />,
        children: [
          { index: true, element: <ProductList /> },
        ],
      },
      {
    path: "*",
    element: <NotFoundPage />,
  },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
