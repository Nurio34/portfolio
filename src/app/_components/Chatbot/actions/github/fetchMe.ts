"use server";

export const fetchMe = async () => {
  try {
    const response = await fetch("https://api.github.com/users/nurio34");

    if (!response.ok) {
      throw new Error("Response not OK !");
    }

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
