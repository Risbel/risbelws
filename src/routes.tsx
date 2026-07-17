import App from "@/App";

import { About } from "@/pages/About";
import { Projects } from "@/pages/Projects";
import { SkillsTools } from "@/pages/SkillsTools";
import { Experience } from "@/pages/Experience";
import { Education } from "@/pages/Education";
import { Contact } from "@/pages/Contact";
import { Home } from "./pages/Home";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/skills-tools",
        element: <SkillsTools />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];
