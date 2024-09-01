import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import HeroSec from "./Components/HeroSec";
import WorkPage from "./pages/WorkPage.jsx";
import LetsTalkPage from "./pages/LetsTalkPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/AboutPage",
        element: <AboutPage />,
      },
      {
        path: "/",
        element: <HeroSec />,
      },
      {
        path: "/WorkPage",
        element: <WorkPage />,
      },
      {
        path: "/LetsTalkPage",
        element: <LetsTalkPage />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
);
