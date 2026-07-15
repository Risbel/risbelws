import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, FileStackIcon } from "lucide-react";
import { useNavigate } from "react-router";

export function Introduction() {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full w-full overflow-hidden bg-background antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-size-[40px_40px] select-none",
          "bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight duration={2} className="-top-10 left-0 hidden lg:-top-20 lg:left-60 dark:block" fill="white" />
      <div className="flex flex-col items-center relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <img height={72} width={72} src="/favicon.svg" alt="favicon" />
        <h1 className="max-w-sm lg:max-w-4xl bg-opacity-50 text-center font-extrabold text-foreground text-2xl lg:text-5xl dark:bg-linear-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent">
          I build fast, modern websites that help businesses grow.
        </h1>
        <p className="mt-2 md:mt-4 md:max-w-xl text-center text-sm md:text-base font-normal text-muted-foreground">
          I'm Risbel, a freelance web developer creating high-performance websites and web applications for businesses
          that want to stand out online.
        </p>
        <div className="mt-4 space-x-4">
          <Button size={"lg"} className="group gap-1" onClick={() => navigate("/contact")}>
            Contact <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />{" "}
          </Button>
          <Button size={"lg"} variant={"outline"} onClick={() => navigate("/projects")}>
            My Projects <FileStackIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
