import Link from "next/link";
import { NavButtonType } from "..";
import { useGlobalContext } from "@/app/GlobalContext";
import { AnimatePresence, motion } from "framer-motion";

function NavButton({
  link,
  index,
  total,
}: {
  link: NavButtonType;
  index: number;
  total: number;
}) {
  const { indexState, setIndexState } = useGlobalContext();
  const { start, end } = indexState;
  const isButtonIncluded = end >= index;
  const difference = Math.abs(end - start);

  return (
    <li className="relative">
      <div
        className="relative aspect-square overflow-hidden rounded-full"
        style={{ width: 64 }}
      >
        <div className="absolute top-0 left-0 rounded-full w-full h-full bg-base-content" />
        <AnimatePresence>
          {isButtonIncluded && (
            <motion.div
              className="absolute top-0 left-0 rounded-full w-full h-full bg-primary"
              initial={{ x: "-100%" }}
              animate={{
                x: "0%",
                //TODO : progressive delay ayarla
                transition: {
                  duration: 1,
                  delay: index * 1,
                },
              }}
              exit={{
                x: "-100%",
                transition: {
                  duration: 1,
                  delay: +index - 1 - start,
                },
              }}
            />
          )}
        </AnimatePresence>

        <Link
          href={`#${link.id}`}
          className={`absolute aspect-square top-1 left-1 rounded-full text-xs font-extrabold bg-base-100
            flex justify-center items-center
        `}
          style={{ width: 56 }}
          onClick={() =>
            setIndexState((prev) => ({ ...prev, start: prev.end, end: index }))
          }
        >
          {link.id}
        </Link>
      </div>
      {index < total - 1 && (
        <div
          className=" absolute top-1/2 -translate-y-1/2 h-1 bg-white z-50"
          style={{
            width: window.innerWidth * 0.02,
            right: -window.innerWidth * 0.02,
          }}
        >
          <div></div>
        </div>
      )}
    </li>
  );
}
export default NavButton;
