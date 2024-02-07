import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import ErrorPage from './routes/route-error';
import { ROUTES } from '../components/helpers/globalVariables';
import CategoriesList from '../components/products/CategoriesList';
import MainPage from '../components/mainPage/MainPage';
import Category from '../components/products/Category';
import Product from '../components/products/Product';
import Cart from '../components/cart/Cart';
import Blog from '../components/blog/Blog';
import About from '../components/about/About';
import Contacts from '../components/contacts/Contacts';
import SearchResults from '../components/search/SearchResults';
import Profile from '../components/Profile Page/Profile';
import FeaturedIcon from '../components/helpers/FeaturedIcon';
import FeaturedProducts from '../components/products/FeaturedProducts';
import Post from '../components/blog/Post';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <MainPage />,
      },
      {
        path: ROUTES.PROFILE,
        element: <Profile />,
      },
      {
        path: ROUTES.CATEGORIES,
        element: <CategoriesList />,
      },
      {
        path: `${ROUTES.CATEGORIES}/:categoryTitle`,
        element: <Category />,
      },
      {
        path: `${ROUTES.FEATURED_PRODUCTS}/`,
        element: <FeaturedProducts />,
      },
      {
        path: `${ROUTES.PRODUCT}/:productId`,
        element: <Product />,
      },
      {
        path: `${ROUTES.POST}/:postId`,
        element: <Post />,
      },
      {
        path: ROUTES.BLOG,
        element: <Blog />,
      },
      {
        path: ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: ROUTES.CONTACTS,
        element: <Contacts />,
      },
      {
        path: ROUTES.CART,
        element: <Cart />,
      },
      {
        path: ROUTES.SEARCH_RESULTS,
        element: <SearchResults />,
      },
    ],
  },
]);
