import Link from "next/link";
import { ArrowUpRightIcon, LinkedInIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <main className="mx-auto md:pt-24 pt-16 max-w-screen-sm container relative">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-white">Osman Tunahan ARIKAN</h1>

          <Link
            href="https://www.linkedin.com/in/osmantunahan/"
            target="_blank"
            className="text-zinc-200 hover:text-white transition-colors"
          >
            <LinkedInIcon className="size-4" />
          </Link>
        </div>
      </main>
    </>
  );
}
