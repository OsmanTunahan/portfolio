import { NextResponse } from "next/server";

interface IRepo {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
  };
  description: string;
  html_url: string;
  stargazers_count: number;
}

export async function GET() {
  const url = `https://api.github.com/users/${process.env
    .GITHUB_USERNAME!}/repos`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    let repos = await response.json();
    repos = repos
      .sort((a: IRepo, b: IRepo) => b.stargazers_count - a.stargazers_count)
      .filter(
        (repo: IRepo) => repo.owner.login === process.env.GITHUB_USERNAME!
      ).slice(0, 5);

    return NextResponse.json({ status: true, data: repos });
  } catch (error: any) {
    return NextResponse.json({ status: false, error: error.message });
  }
}
