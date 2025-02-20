import { track } from "@vercel/analytics";
import Image from "next/image";
import Link from "next/link";

function SocialLinks() {
  const links = [
    {
      name: "github",
      src: "/hero/social/github.webp",
      href: "https://github.com/Nurio34",
    },
    {
      name: "linkedin",
      src: "/hero/social/linkedin.webp",
      href: "https://www.linkedin.com/in/nuri-salih-ersoy-12777627a/",
    },
    {
      name: "x",
      src: "/hero/social/x.webp",
      href: "https://x.com/NurioonSoftware",
    },
    {
      name: "youtube",
      src: "/hero/social/youtube.webp",
      href: "https://www.youtube.com/@NurioonSoftware",
    },
  ];

  return (
    <nav className=" w-4 h-full ">
      <ul className="grid gap-y-[2vh] md:gap-y-[1vh]">
        {links.map((link) => (
          <li
            key={link.name}
            className={` transition-all hover:scale-125 ${
              link.name === "x" ? "rounded-md overflow-hidden" : ""
            }`}
          >
            <Link
              href={link.href}
              target="_blank"
              onClick={() => {
                track("Button Clicked", { buttonId: `Button-${link.name}` });
              }}
            >
              <figure className=" relative w-8 aspect-square">
                <Image
                  src={link.src}
                  fill
                  alt={link.name}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default SocialLinks;
