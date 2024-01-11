import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import EducationPage from "./pages/EducationPage";
import WorkExperiencePage from "./pages/WorkExperiencePage";
import PersonalProjectsPage from "./pages/PersonalProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Education",
    element: <EducationPage />,
  },
  {
    path: "/Work Experience",
    element: <WorkExperiencePage />,
  },
  {
    path: "/Personal Projects",
    element: <PersonalProjectsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
