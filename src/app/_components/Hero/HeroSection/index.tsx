import { useHeroContext } from "../HeroContext";
import N_Svg from "@/app/svg/N";
import U_Svg from "@/app/svg/U";
import R_Svg from "@/app/svg/R";
import I_Svg from "@/app/svg/I";
import O_Svg from "@/app/svg/O";
import Three_Svg from "@/app/svg/3";
import Four_Svg from "@/app/svg/4";

function HeroSection() {
  const { curtainsState } = useHeroContext();

  return (
    <div className="Contrast relative grid place-content-center px-[1vw] md:px-[4vw]">
      <div className="min-h-[91.25px]">
        {curtainsState.isOpened && (
          <div
            className={`relative md:absolute self-start top-0 left-0 px-[2vw] py-[2vh] flex items-baseline`}
          >
            <N_Svg />
            <U_Svg />
            <R_Svg />
            <I_Svg />
            <O_Svg />
            <div className="px-[1vw]"></div>
            <Three_Svg />
            <Four_Svg />
          </div>
        )}
      </div>
      <h1 className=" text-3xl font-semibold md:text-6xl md:font-extrabold font-geist pb-[1vh] md:pb-[4vh]">
        Crafting Scalable & Intelligent Web Solutions – FullStack Developer
      </h1>
      <p className="self-start  text-sm md:text-lg font-geistMono">
        I&apos;m a passionate full-stack web developer with a focus on building
        scalable, high-performance applications. From intuitive UI/UX to
        powerful backend systems, I turn ideas into reality using modern web
        technologies. Let&apos;s build something amazing together!
      </p>
    </div>
  );
}
export default HeroSection;
