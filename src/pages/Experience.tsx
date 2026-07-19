import { ExternalLinkIcon } from "lucide-react";

import { Layout } from "@/components/layout";
import { Timeline, type TimelineEntry } from "@/components/ui/timeline";

type Project = {
  name: string;
  url?: string;
  description: string;
  stack?: string;
};

function ProjectCard({ name, url, description, stack }: Project) {
  return (
    <div className="rounded-xl border border-border bg-muted/50 p-4 transition-colors hover:bg-muted/80">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
        >
          {name}
          <ExternalLinkIcon className="size-3.5" />
        </a>
      ) : (
        <p className="font-semibold">{name}</p>
      )}
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      {stack && <p className="mt-2 text-xs text-muted-foreground/80">{stack}</p>}
    </div>
  );
}

function Role({ title, org, location }: { title: string; org: string; location?: string }) {
  return (
    <p className="mb-4 text-sm text-muted-foreground md:text-base">
      <span className="font-medium text-foreground">{title}</span> · {org}
      {location && ` · ${location}`}
    </p>
  );
}

const experience: TimelineEntry[] = [
  {
    title: "10/2025 — Present",
    content: (
      <div>
        <Role title="Frontend Developer" org="Purposense" location="New Zealand" />
        <div className="grid gap-4 lg:grid-cols-2">
          <ProjectCard
            name="Purposense SaaS"
            url="https://purposense.com"
            description="MVP for a platform helping organizations track and manage social impact initiatives."
          />
        </div>
      </div>
    ),
  },
  {
    title: "01/2023 — 10/2025",
    content: (
      <div>
        <Role title="Fullstack Developer" org="ArtGoMA" location="Spain / Tenerife" />
        <div className="grid gap-4 lg:grid-cols-2">
          <ProjectCard
            name="ArtGoMA"
            url="https://artgoma.com"
            description="Landing page for ArtGoMA company."
            stack="Next.js (app router), TypeScript, Zod, Tailwind, shadcn/ui, Auth.js, next-intl"
          />
          <ProjectCard
            name="MyAiBusiness"
            url="https://myaibs.com"
            description="No-code B2B tool for building websites such as event pages and landing pages."
            stack="Next.js, TypeScript, Zod, Tailwind, shadcn/ui, Auth.js, i18next, Prisma, PostgreSQL, Vercel, Neon, AWS S3"
          />
          <ProjectCard name="Perseidas" url="https://perseidas.vercel.app" description="Client project." />
          <ProjectCard name="Onefashionbistro" url="https://onefashionbistro.com/en" description="Client project." />
          <ProjectCard name="Art-experience" url="https://art-experience.pages.dev/es" description="Client project." />
        </div>
      </div>
    ),
  },

  {
    title: "01/2022 — 02/2023",
    content: (
      <div>
        <Role title="Frontend Development Team Lead" org="Desoft Cienfuegos" location="Cuba" />
      </div>
    ),
  },
  {
    title: "Blooming-mind / Unites-States",
    content: (
      <div>
        <Role title="A website built with NextJS" org="Freelance" location="" />
        <div className="grid gap-4 lg:grid-cols-2">
          <ProjectCard
            name="Blooming Minds Therapy"
            url="http://www.blooming-minds-therapy.com"
            description="Contributory freelance project, United States."
            stack="Astro"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Storm Roofing / Unites-States",
    content: (
      <div>
        <Role title="Individual" org="Freelance" location="" />
        <div className="grid gap-4 lg:grid-cols-2">
          <ProjectCard
            name="Storm Roofing Solutions"
            url="http://stormroofingsolution.com"
            description="A website built with NextJS and Tailwind css."
            stack="NextJS"
          />
        </div>
      </div>
    ),
  },
  {
    title: "09/2018 — 06/2021",
    content: (
      <div>
        <Role title="Professor of Mathematics" org="Octavio García Hdez. Pedagogical School" location="Cuba" />
      </div>
    ),
  },
];

export function Experience() {
  return (
    <Layout className="relative overflow-hidden">
      <h1 className="text-3xl font-bold">Experience</h1>

      <Timeline data={experience} />
    </Layout>
  );
}
