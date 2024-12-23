"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export function Navbar() {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 border-b border-zinc-900 bg-background z-50">
        <div className="flex items-center">
          <Link href="/" className="text-white text-xl">
            (-_-)
          </Link>
        </div>
        <div className="flex items-center">
          {session ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2"
              >
                <Image
                  src={
                    session.user?.image ||
                    "https://avatars.githubusercontent.com/u/154083945?v=4"
                  }
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full border border-zinc-900"
                />
                <span className="text-white">{session.user?.name}</span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background border border-zinc-900 rounded-md shadow-lg z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800"
                  >
                    Profile
                  </Link>
                  {session?.user?.name == "Osman Tunahan ARIKAN" && (
                    <Link
                      href="/admin"
                      className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800"
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 text-zinc-300 hover:bg-zinc-800"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="px-4 py-2 rounded-full bg-white text-black"
            >
              Login
            </button>
          )}
        </div>
      </nav>
      <br />
    </>
  );
}
