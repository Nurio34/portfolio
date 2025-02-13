import { motion } from "framer-motion";
import { ControlType } from "..";
import { useState } from "react";

function TextAreaControl({ control }: { control: ControlType }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div
      key={control.name}
      className="relative rounded-lg border-2 border-base-100"
      onFocus={(e) => {
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
        className="py-[1vh] pl-[2vw] rounded-lg w-full bg-base-content text-base-100 border-base-100 outline-none"
        rows={2}
        required
        onChange={(e) => {
          setValue(e.target.value);
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
          top: isFocused ? "0%" : "25%",
          y: "-50%",
          x: isFocused ? 15 : 10,
          backgroundColor: isFocused
            ? "var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity, 1)))"
            : "transparent",
          transition: { duration: 0.3 },
        }}
      >
        {control.placeholder}
      </motion.span>
    </div>
  );
}
export default TextAreaControl;
