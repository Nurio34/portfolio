import { useEffect } from "react";
import { fetchSourceCodes } from "./actions/github/fetchSourceCodes";
import { fetchRepos } from "./actions/github/fetchRepos";

function Chatbot() {
  const githubAction = async () => {
    const repos = await fetchRepos(1);
    //TODO = efficienly fetch sourceCodes
    //const sourceCodes = await Promise.all(
    // repos.map(async (repo) => {
    // try {
    // const files = await fetchSourceCodes(repo);
    //return {
    //repositoryName: repo,
    //files: files,
    //};
    //} catch (error) {
    //console.error(`Error fetching files for ${repo}:`, error);
    //}
    //})
    //);

    //console.log(sourceCodes);
  };

  useEffect(() => {
    githubAction();
  }, []);

  return (
    <section
      className="Cutout_Section relative w-full h-screen grid place-content-center justify-items-center px-[2vw] overflow-hidden"
      style={
        {
          "--x1": "-10%",
          "--y1": "-5%",
          "--bg1": "url('/background-1.webp')",
          "--mask1": "url('/mask-images/3.webp')",
          "--size1": "50% 80%",
          "--x2": "110%",
          "--y2": "110%",
          "--bg2": "url('/background-1.webp')",
          "--mask2": "url('/mask-images/1.webp')",
          "--size2": "60% 60%",
        } as React.CSSProperties
      }
    ></section>
  );
}
export default Chatbot;
