// import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Men from './shoppingfolder/components/Men';
import Women from './shoppingfolder/components/Women';
import Beauty from './shoppingfolder/components/Beauty';
import Validation from './shoppingfolder/components/Validation';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "Men",
    element: <Men />,
  },
  {
    path: "Women",
    element: <Women />
  },

  // {
  //   path: "Children",
  //   element: <Children />
  // },


  {
    path: "Beauty",
    element: <Beauty />
  },

  {
    path: "Validation",
    element: <Validation />
  },
  


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
