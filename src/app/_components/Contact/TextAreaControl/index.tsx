import { motion } from "framer-motion";
import { ControlType } from "..";
import { useEffect, useState } from "react";

function TextAreaControl({
  control,
  isSubmitted,
  error,
}: {
  control: ControlType;
  isSubmitted: boolean;
  error: string | undefined;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (isSubmitted) {
      setValue("");
    }
  }, [isSubmitted]);

  return (
    <div
      key={control.name}
      className="relative rounded-lg"
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        if (!value) {
          setIsFocused(false);
        }
      }}
    >
      <textarea
        key={control.name}
        className=" border-2 border-base-100 py-[1vh] pl-[1vw] rounded-lg w-full bg-base-content text-base-100 outline-none"
        rows={2}
        onChange={(e) => {
          setValue(e.target.value);
          e.target.style.height = "auto";
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
        name="message"
      ></textarea>
      <motion.span
        className="absolute left-0 min-w-max text-base-100  px-1 rounded-md pointer-events-none"
        animate={{
          fontSize: isFocused ? "12px" : "16px",
          fontWeight: isFocused ? 900 : 500,
          opacity: isFocused ? 1 : 0.5,
          y: isFocused ? "-50%" : "50%",
          x: isFocused ? 15 : 10,
          backgroundColor: isFocused
            ? "var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity, 1)))"
            : "transparent",
          transition: { duration: 0.3 },
        }}
      >
        {control.placeholder}
      </motion.span>
      <span className="absolute right-0 -translate-x-1/2 top-1/2 -translate-y-1/2">
        {control.icon}
      </span>
      <p className=" text-error text-xs font-extrabold">{error}</p>
    </div>
  );
}
export default TextAreaControl;
