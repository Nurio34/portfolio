import Image from "next/image";

function Avatar() {
  return (
    <figure className="relative w-28 md:w-40 aspect-square rounded-full overflow-hidden">
      <Image
        src="/hero/avatar/avatar.webp"
        fill
        alt="avatar"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </figure>
  );
}
export default Avatar;
