import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./routes/error-page";
import {ROUTES} from "../globalVariables";
import CategoriesList from "../components/CategoriesList";
import MainPage from "../components/mainPage/MainPage";
import Category from "../components/Category";
import Product from "../components/Product";
import Cart from "../components/Cart";
import Blog from "../components/Blog/Blog";

export const router = createBrowserRouter([{
  element: <Layout/>, errorElement: <ErrorPage/>, children: [
    {
      path: ROUTES.HOME, element: <MainPage/>,
    },
    {
      path: ROUTES.BLOG, element: <Blog/>,
    },
    {
      path: ROUTES.CATEGORIES, element: <CategoriesList/>
    },
    {
      path: `${ROUTES.CATEGORIES}/:categoryTitle`, element: <Category/>
    },
    {
      path: `${ROUTES.PRODUCT}/:productId`, element: <Product/>
    },
    {
      path: ROUTES.CART, element: <Cart/>
    }
  ]
}])