import { useState } from "react";
import { ProjectImage } from "@/components/project-image";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
  images: string[];
  alt: string;
  liveUrl?: string;
};

export function ProjectGallery({ images, alt, liveUrl }: ProjectGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      <ProjectImage
        key={images[active]}
        src={images[active]}
        alt={`${alt} screenshot ${active + 1}`}
        liveUrl={liveUrl}
        className="aspect-video w-full"
      />

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={i === active}
              className={cn(
                "cursor-pointer rounded-lg border-2 transition-opacity",
                i === active ? "border-primary" : "border-transparent opacity-60 hover:opacity-100",
              )}
            >
              <ProjectImage src={src} alt="" className="aspect-video w-full" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
