import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/ContactPage.jsx";
import MechanicalDesignPage from "./pages/MechanicalDesignPage.jsx";
import ModelsAndRendersPage from "./pages/ModelsAndRendersPage.jsx";
import AttributionPage from "./pages/AttributionPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mechanical-design",
    element: <MechanicalDesignPage />,
  },
  {
    path: "/models-and-renders",
    element: <ModelsAndRendersPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/attributions",
    element: <AttributionPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
