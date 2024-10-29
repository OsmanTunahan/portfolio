import Link from "next/link";
import { ChatBubbleIcon, LinkedInIcon } from "@/components/icons";
import { Project } from "@/components/project";
import { DotPattern } from "@/components/dot-pattern";
import { cn } from "@/lib/cn";

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

        <p className="mt-6">
          Hello, I&apos;m a cyber security expert based in the Turkey. I am also
          a full stack developer. I create projects in languages like next.js,
          python, etc...{" "}
          <Link
            href="https://github.com/OsmanTunahan"
            target="_blank"
            className="underline"
          >
            GitHub
          </Link>
          .
        </p>


        {/* TODO: This section will be rewritten soon to automatically fetch projects from GitHub */}
        <section className="mt-12 space-y-4 bg-background z-50 relative">
          <Project
            title="drive-backup"
            url="https://github.com/OsmanTunahan/drive-backup"
            icon={<ChatBubbleIcon className="size-4" />}
            description={
              <>
                Automatically upload your backups to Google Drive with using this small tool.
              </>
            }
          />
        </section>

        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] md:mt-36 mt-24"
          )}
        />
      </main>
    </>
  );
}
