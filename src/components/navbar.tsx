"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 border-b border-zinc-900 bg-background">
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
              <img
                src={session.user?.image!}
                alt="Profile"
                className="w-8 h-8 rounded-full border border-zinc-900"
              />
              <span className="text-white">{session.user?.name}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-background border border-zinc-900 rounded-md shadow-lg">
                <Link href="/profile" className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800">
                  Profile
                </Link>
                {/* TODO: Add database query */}
                {session.user?.name === "Osman Tunahan ARIKAN" && (
                  <Link href="/admin" className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800">
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
  );
}