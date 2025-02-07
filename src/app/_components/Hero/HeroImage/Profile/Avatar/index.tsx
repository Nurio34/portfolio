import Image from "next/image";

function Avatar() {
  return (
    <figure className="relative w-28 md:w-40 aspect-square rounded-full overflow-hidden">
      <Image src="/hero/avatar.webp" fill alt="avatar" />
    </figure>
  );
}
export default Avatar;
