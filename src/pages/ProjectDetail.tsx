import { useParams, Navigate, Link } from "react-router";
import { GitBranch } from "lucide-react";
import { Layout } from "@/components/layout";
import { Spotlight } from "@/components/spotlight";
import { Button } from "@/components/ui/button";
import { ProjectGallery } from "@/components/project-gallery";
import { TechBadge } from "@/components/tech-badge";
import { projects } from "@/data/projects";
import { getYouTubeEmbedId } from "@/lib/utils";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const embedId = project.videoUrl ? getYouTubeEmbedId(project.videoUrl) : null;

  return (
    <Layout className="relative overflow-hidden">
      <Spotlight delay={0.5} />

      <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to Projects
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <ProjectGallery
          images={project.images?.length ? project.images : [project.image]}
          alt={project.name}
          liveUrl={project.liveUrl}
        />

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{project.name}</h1>

          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>

          <p className="whitespace-pre-line text-muted-foreground">{project.longDescription}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.githubUrl && (
              <Button variant="outline" size="sm">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5"
                >
                  <GitBranch className="size-4" />
                  View on GitHub
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="default" size="sm">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Visit live site
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {project.features && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Key features</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {project.features.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-muted/50 p-4">
                <h3 className="font-medium">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.stackGroups && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Technology stack</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.stackGroups.map((g) => (
              <div key={g.category}>
                <h3 className="text-sm font-medium text-muted-foreground">{g.category}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <TechBadge key={item} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.techMatrix && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Technology matrix</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 text-muted-foreground">
                <tr>
                  <th className="px-4 py-2 font-medium">Layer</th>
                  <th className="px-4 py-2 font-medium">Technology</th>
                  <th className="px-4 py-2 font-medium">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {project.techMatrix.map((row) => (
                  <tr key={row.layer} className="border-t border-border">
                    <td className="px-4 py-2 font-medium">{row.layer}</td>
                    <td className="px-4 py-2">{row.technology}</td>
                    <td className="px-4 py-2 text-muted-foreground">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {embedId && (
        <div className="mt-10 mb-16 aspect-video w-full overflow-hidden rounded-xl border border-border">
          <iframe
            className="size-full"
            src={`https://www.youtube.com/embed/${embedId}`}
            title={`${project.name} video preview`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </Layout>
  );
}
