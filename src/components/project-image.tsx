import { useState } from "react";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectImageProps = {
  src: string;
  alt: string;
  liveUrl?: string;
  className?: string;
};

export function ProjectImage({ src, alt, liveUrl, className }: ProjectImageProps) {
  const [errored, setErrored] = useState(false);

  const media = (
    <div className={cn("relative overflow-hidden rounded-lg bg-muted", className)}>
      {!errored ? (
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          className="size-full object-cover"
        />
      ) : (
        <div className="flex size-full items-center justify-center bg-muted/50">
          <ImageIcon className="size-8 text-muted-foreground/50" />
        </div>
      )}
    </div>
  );

  if (!liveUrl) return media;

  return (
    <a
      href={liveUrl}
      target="_blank"
      rel="noreferrer"
      className="group relative block"
      aria-label={`Open ${alt} live site`}
    >
      {media}
      <span className="absolute top-2 right-2 inline-flex items-center justify-center rounded-md border border-border bg-background/80 p-1.5 backdrop-blur-xs transition-colors group-hover:bg-background">
        <ArrowUpRight className="size-4" />
      </span>
    </a>
  );
}
