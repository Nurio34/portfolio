"use server";

export const fetchMeAuthed = async () => {
  try {
    const response = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error("Response not OK !");
    }

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
