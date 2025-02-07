import Image from "next/image";

function MernImages() {
  const images = [
    {
      src: "/hero/mongo.webp",
      title: "M",
      subtitle: "ern",
    },
    {
      src: "/hero/express.webp",
      title: "E",
      subtitle: "xpress",
    },
    {
      src: "/hero/react.webp",
      title: "R",
      subtitle: "eact",
    },
    {
      src: "/hero/node.webp",
      title: "N",
      subtitle: "ode",
    },
  ];

  return (
    <ul className=" flex items-center justify-center gap-x-[4vw] md:gap-x-[1vw]">
      {images.map((image) => (
        <li key={`${image.title}${image.subtitle}`}>
          <figure
            className={`relative w-14 md:w-20 aspect-square 
    ${image.title === "M" ? "rounded-full overflow-hidden" : ""}
    `}
          >
            <Image
              src={image.src}
              fill
              alt={`${image.title}${image.title}`}
              className="object-contain"
            />
          </figure>
          <div className="flex items-baseline justify-center">
            <p className=" font-bold text-xl md:text-3xl">{image.title}</p>
            <p className=" text-xs">{image.subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default MernImages;
