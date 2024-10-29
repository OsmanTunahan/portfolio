import Link from "next/link";
import { GitHubIcon } from "./icons";

type Props = {
  title: string;
  url: string;
  icon: React.ReactNode;
  description: React.ReactNode;
};

export function Project(props: Props) {
  return (
    <div className="border border-zinc-900 p-4 rounded-md bg-background">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {props.icon}
          <h2 className="text-white font-medium">{props.title}</h2>
        </div>

        <Link
          href={props.url}
          target="_blank"
          className="text-zinc-200 hover:text-white transition-colors"
        >
          <GitHubIcon className="size-4" />
        </Link>
      </div>

      <p className="text-zinc-300 mt-3">{props.description}</p>
    </div>
  );
}