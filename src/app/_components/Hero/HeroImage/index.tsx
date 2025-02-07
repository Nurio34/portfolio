import MernImages from "./MernImages";
import Profile from "./Profile";

function HeroImage() {
  return (
    <div className="flex flex-col justify-center gap-y-[4vh] px-[1vw] md:px-[4vw]">
      <Profile />
      <MernImages />
    </div>
  );
}
export default HeroImage;
