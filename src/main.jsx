import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./components/BookDetails.jsx";

import Books from "./components/Books.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },

  {
    path: '/books',
    element: <Books />
  },


  {
    path: "books/book/:id",
    element: <BookDetails />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
