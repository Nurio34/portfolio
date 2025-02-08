import Image from "next/image";
import IntroduceMe from "./IntroduceMe";
import Avatar from "./Avatar";
import SocialLinks from "./SocialLinks";

function Profile() {
  return (
    <div className="grid grid-cols-[32px,1fr,112px] md:grid-cols-[32px,1fr,160px] gap-x-[4vw] items-center">
      <SocialLinks />
      <IntroduceMe />
      <Avatar />
    </div>
  );
}
export default Profile;
