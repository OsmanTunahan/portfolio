import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const clientId = process.env.GITHUB_ID;
const clientSecret = process.env.GITHUB_SECRET;

if (!clientId || !clientSecret) {
  throw new Error(
    "Please define GITHUB_ID and GITHUB_SECRET environment variables"
  );
}

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [
    GitHubProvider({
      clientId,
      clientSecret,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
