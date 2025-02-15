"use server";

let All_Repos: string[] = [];

export const fetchRepos = async (page: number = 1): Promise<string[]> => {
  const token = process.env.GITHUB_TOKEN;
  const url = `https://api.github.com/user/repos?per_page=100&page=${page}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch repositories: ${response.status} ${response.statusText}`
      );
    }

    const repos = await response.json();
    const repoNames = repos.map((repo: { name: string }) => repo.name);
    All_Repos = [...All_Repos, ...repoNames];

    if (repos.length === 100) {
      return fetchRepos(page + 1);
    } else {
      console.log("All Repositories:", All_Repos);
      return All_Repos;
    }
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};
