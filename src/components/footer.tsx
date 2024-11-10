import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 p-4 border-t border-zinc-900 bg-background text-zinc-300 text-center">
      <p>
        Created by Osman Tunahan ARIKAN. This project is{" "}
        <Link
          href="https://github.com/OsmanTunahan/portfolio"
          target="_blank"
          className="text-zinc-200 hover:text-white transition-colors"
        >
          open-source
        </Link>
        .
      </p>
    </footer>
  );
}