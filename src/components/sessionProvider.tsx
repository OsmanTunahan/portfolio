"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";

export function GetSessionProvider({
  session,
  children,
}: SessionProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
