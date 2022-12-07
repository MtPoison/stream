import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './page/Home';
import Page_1 from './page/Page_1';
import Page_2 from "./page/Page_2";
import Page_3 from "./page/Page_3";
import Page_4 from "./page/Page_4";
import Page_5 from "./page/Page_5";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/film/:id",
    element: <Page_1/>
  },

  {
    path:"/populaire",
    element: <Page_2/>
  },

  {
    path:"/note",
    element: <Page_3/>
  },
  
  {
    path:"/sysnopis/:id",
    element: <Page_4/>
  },

  {
    path:"/sysnopis2/:id",
    element: <Page_5/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
