import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Reviews } from "./pages/Reviews";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "gallery", Component: Gallery },
      { path: "reviews", Component: Reviews },
      { path: "contact", Component: Contact },
    ],
  },
]);
