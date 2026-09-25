import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ProjectImage } from "@/components/project-image";
import { TechBadge } from "@/components/tech-badge";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-muted/50 p-4 transition-colors hover:bg-muted/80">
      <ProjectImage
        src={project.image}
        alt={project.name}
        liveUrl={project.liveUrl}
        className="aspect-video w-full"
      />

      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="font-semibold">{project.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <Button variant="outline" size="sm" className="self-end">
          <Link to={`/projects/${project.slug}`}>More</Link>
        </Button>
      </div>
    </div>
  );
}
