import { LogoSvg } from "@/app/svg/Logo";
import { useHeroContext } from "../HeroContext";

function HeroSection() {
  const { curtainsState } = useHeroContext();

  return (
    <div className="Contrast relative grid place-content-center px-[1vw] md:px-[4vw]">
      {curtainsState.isOpened && (
        <div className="absolute top-0 left-0 px-[2vw]">
          <LogoSvg />
        </div>
      )}
      <h1 className=" text-3xl font-semibold md:text-6xl md:font-extrabold font-geist pb-[1vh] md:pb-[4vh]">
        Crafting Scalable & Intelligent Web Solutions – FullStack Developer
      </h1>
      <p className=" text-sm md:text-lg font-geistMono">
        I&apos;m a passionate full-stack web developer with a focus on building
        scalable, high-performance applications. From intuitive UI/UX to
        powerful backend systems, I turn ideas into reality using modern web
        technologies. Let&apos;s build something amazing together!
      </p>
    </div>
  );
}
export default HeroSection;
