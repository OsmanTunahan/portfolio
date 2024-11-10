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
      )
      .slice(0, 5);

    const getUserStats = await GET_STATS();

    return NextResponse.json({
      status: true,
      repos,
      stats: getUserStats?.data,
    });
  } catch (error: any) {
    return NextResponse.json({ status: false, error: error.message });
  }
}

async function GET_STATS() {
  const username = process.env.GITHUB_USERNAME!;
  const urls = [
    `https://api.github.com/users/${username}`,
    `https://api.github.com/search/commits?q=author:${username}`,
    `https://api.github.com/search/issues?q=author:${username}+type:pr`,
    `https://api.github.com/users/${username}/repos`,
  ];

  try {
    const [userResponse, commitsResponse, prsResponse, reposResponse] =
      await Promise.all(
        urls.map((url) =>
          fetch(url, {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          })
        )
      );

    const user = await userResponse.json();
    const commits = await commitsResponse.json();
    const prs = await prsResponse.json();
    const repos = await reposResponse.json();

    const totalStars = repos.reduce(
      (acc: number, repo: IRepo) => acc + repo.stargazers_count,
      0
    );

    const stats = {
      followers: user.followers,
      totalCommits: commits.total_count,
      totalPRs: prs.total_count,
      totalStars,
    };

    return {
      status: true,
      data: stats,
    };
  } catch (error: any) {
    return {
      status: false,
      error: error.message,
    };
  }
}