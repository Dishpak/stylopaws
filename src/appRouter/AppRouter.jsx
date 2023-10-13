import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "./routes/error-page";
import CategoryList from "../components/CategoryList";
import MainPage from "../components/MainPage";
import Header from "../components/Header/Header"
import Footer from "../components/Footer";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <MainPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/categories",
        element: <CategoryList/>
      }
    ]
  }
])

const AppRouter = () => {
  return (
    <>
      <Header/>
      router
      <Footer/>
    </>
  )
}

export default AppRouter;
