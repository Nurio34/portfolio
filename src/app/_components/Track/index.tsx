import Link from "next/link";

function Track() {
  const links = [
    {
      id: "Hero",
    },
    {
      id: "About",
    },
    {
      id: "Skills",
    },
    {
      id: "Projects",
    },
    {
      id: "Contact",
    },
  ];

  return (
    <nav
      className="fixed z-50 top-0 left-1/2 -translate-x-1/2 py-[2vh] w-1/2
        flex justify-center
    "
    >
      <ul className="flex items-center gap-x-[2vw]">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={`#${link.id}`}
              className="w-14 border rounded-full aspect-square text-xs font-extrabold
                    flex justify-center items-center p-4
                "
            >
              {link.id}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Track;
