import NavButton from "./NavButton";

export type NavButtonType = {
  id: string;
};

function Track() {
  const links: NavButtonType[] = [
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
      className="fixed z-40 top-0 left-1/2 -translate-x-1/2 py-[2vh] w-1/2
        flex justify-center
    "
    >
      <ul className="flex items-center gap-x-[2vw]">
        {links.map((link, index) => (
          <NavButton
            key={link.id}
            link={link}
            index={index}
            total={links.length}
          ></NavButton>
        ))}
      </ul>
    </nav>
  );
}
export default Track;
