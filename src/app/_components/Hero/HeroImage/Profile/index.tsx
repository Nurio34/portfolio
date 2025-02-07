import Image from "next/image";
import IntroduceMe from "./IntroduceMe";
import Avatar from "./Avatar";

function Profile() {
  return (
    <div className=" flex gap-x-[1vw]">
      <IntroduceMe />
      <Avatar />
    </div>
  );
}
export default Profile;
