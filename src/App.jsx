import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import {RouterProvider} from "react-router-dom";
import {router} from "./appRouter/AppRouter";

function App() {


  return (<div className="App d-flex flex-column min-vh-100">
    <RouterProvider router={router}/>
  </div>);
}

export default App;
