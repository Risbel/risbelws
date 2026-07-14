import App from "@/App";
import { Introduction } from "@/pages/Introduction";
import { About } from "@/pages/About";
import { Projects } from "@/pages/Projects";
import { SkillsTools } from "@/pages/SkillsTools";
import { Experience } from "@/pages/Experience";
import { Education } from "@/pages/Education";
import { Contact } from "@/pages/Contact";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Introduction />,
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
