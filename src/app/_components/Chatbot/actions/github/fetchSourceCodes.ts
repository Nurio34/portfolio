"use server";

export const fetchSourceCodes = async () => {
  try {
    // Step 1: Fetch the tree recursively
    const response = await fetch(
      "https://api.github.com/repos/Nurio34/lms-learn/git/trees/main?recursive=1",
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch tree: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    // Step 2: Filter for files (type: "blob")
    const files = data.tree
      .filter((item) => item.type === "blob" && !item.path.includes("public"))
      .map((item) => item.path);
    return files; // Step 3: Fetch and decode the content of each file
    const sourceCodes = [];
    for (const file of files) {
      const blobResponse = await fetch(file.url, {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      if (!blobResponse.ok) {
        console.error(
          `Failed to fetch blob for ${file.path}: ${blobResponse.status} ${blobResponse.statusText}`
        );
        continue;
      }

      const blobData = await blobResponse.json();
      // Decode the Base64 content (Node.js compatible)
      const sourceCode = Buffer.from(blobData.content, "base64").toString(
        "utf-8"
      );

      // Store the source code along with the file path
      sourceCodes.push({
        path: file.path,
        content: sourceCode,
      });
    }
    // Return the source codes (or do something else with them)
    return sourceCodes;
  } catch (error) {
    console.error("Error fetching source code:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};
