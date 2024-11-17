import { DotPattern } from "@/components/dot-pattern";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] md:mt-36 mt-24"
        )}
      />
      <div className="relative flex min-h-screen flex-col place-items-center justify-center">
        <h2 className="font-heading m-10 text-center text-6xl font-black leading-[5rem] sm:text-7xl sm:leading-[7rem] lg:text-8xl lg:leading-[7rem]">
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            404
          </span>
          <span className="">⏳</span>
        </h2>
        <p className="m-5 max-w-3xl px-6 text-center text-2xl font-thin text-slate-800 dark:text-slate-100 md:text-3xl">
          Did you take a wrong turn?
        </p>
      </div>
    </div>
  );
}
