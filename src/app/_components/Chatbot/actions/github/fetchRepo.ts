"use server";

export const fetchRepo = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/Nurio34/lms-learn/contents",
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3.raw",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Response not OK !");
    }

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
