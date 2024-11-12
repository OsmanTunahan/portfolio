import { NextResponse } from "next/server";
import { IRepository, IGitHubStats } from "@/lib/types/apis";

export async function GET() {
  const username = process.env.GITHUB_USERNAME!;
  const urls = [
    `https://api.github.com/users/${username}`,
    `https://api.github.com/users/${username}/repos`,
    `https://api.github.com/search/commits?q=author:${username}`,
    `https://api.github.com/search/issues?q=author:${username}+type:pr`,
  ];

  try {
    const [userResponse, reposResponse, commitsResponse, prsResponse] =
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
    let repos = await reposResponse.json();

    const totalStars = repos.reduce(
      (acc: number, repo: IRepository) => acc + repo.stargazers_count,
      0
    );

    repos = repos
      .sort(
        (a: IRepository, b: IRepository) =>
          b.stargazers_count - a.stargazers_count
      )
      .slice(0, 5);

    const stats: IGitHubStats = {
      followers: user.followers,
      totalCommits: commits.total_count,
      totalPRs: prs.total_count,
      totalStars,
    };

    return NextResponse.json({
      status: true,
      repos,
      stats,
    });
  } catch (error: any) {
    return NextResponse.json({ status: false, error: error.message });
  }
}
