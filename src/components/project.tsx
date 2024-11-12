import Link from "next/link";
import { GitHubIcon } from "./icons";
import { ProjectProps } from "@/lib/types/components";

export function Project({
  title,
  url,
  icon,
  description,
  username,
}: ProjectProps) {
  return (
    <div className="border border-zinc-900 p-4 rounded-md bg-background">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="text-white font-medium">
            <span className="text-zinc-400">{username}/</span>
            {title}
          </h2>
        </div>

        <Link
          href={url}
          target="_blank"
          className="text-zinc-200 hover:text-white transition-colors"
        >
          <GitHubIcon className="size-4" />
        </Link>
      </div>

      <p className="text-zinc-300 mt-3">{description}</p>
    </div>
  );
}
