import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './page/Home';
import Film from './page/Film';
import Populaire from "./page/Populaire";
import Rate from "./page/Rate";
import Info from "./page/Info";
import Description from "./page/Description";
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
    element: <Film/>
  },

  {
    path:"/populaire",
    element: <Populaire/>
  },

  {
    path:"/note",
    element: <Rate/>
  },
  
  {
    path:"/info/:id",
    element: <Info/>
  },

  {
    path:"/description/:id",
    element: <Description/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
