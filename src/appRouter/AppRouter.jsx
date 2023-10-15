import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "./routes/error-page";
import CategoriesList from "../components/CategoriesList";
import MainPage from "../components/MainPage";
import Layout from "./Layout";
import Category from "../components/Category";
import Product from "../components/Product";

export const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <MainPage/>,
      },
      {
        path: "/categories",
        element: <CategoriesList/>
      },
      {
        path: "/categories/:categoryId",
        element: <Category/>
      },
      {
        path: "/product/:productId",
        element: <Product/>
      }
    ]
  }
])