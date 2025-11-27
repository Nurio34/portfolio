import Image from "next/image";

function MernImages() {
  const images = [
    {
      src: "/hero/mern/mongo.webp",
      title: "M",
      subtitle: "ongoDB",
    },
    {
      src: "/hero/mern/express.webp",
      title: "E",
      subtitle: "xpress",
    },
    {
      src: "/hero/mern/react.webp",
      title: "R",
      subtitle: "eact",
    },
    {
      src: "/hero/mern/node.webp",
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
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </figure>
          <div className="Contrast flex items-baseline justify-center">
            <p className=" font-bold text-2xl md:text-3xl">{image.title}</p>
            <p className=" text-[8px] md:text-xs">{image.subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default MernImages;
