import { useEffect, useRef, useState } from "react";
import { ControlType } from "..";
import { AnimatePresence, motion } from "framer-motion";

function FakePasswordInput({ control }: { control: ControlType }) {
  const messagess = ["Just kidding :)", "This input will self-destruct in"];
  const messages = ["Just :)", "This "];

  const [isFocused, setIsFocused] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [valueStream, setValueStream] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const InputRef = useRef<HTMLInputElement | null>(null);
  const [areMessagesComplated, setAreMessagesComplated] = useState(false);
  const [countDown, setCountDown] = useState({ value: 1, isChanging: false });
  const countdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isDestructStarted, setIsDestructStarted] = useState(false);
  const [isGotLarge, setIsGotLarge] = useState(false);
  console.log({ isGotLarge });
  const streamMessage = () => {
    let i = 0;
    intervalRef.current = setInterval(() => {
      if (i === messages[currentMessageIndex].length + 1) {
        if (currentMessageIndex < messages.length - 1) {
          setTimeout(() => {
            setCurrentMessageIndex((pre) => pre + 1);
          }, 100);
        }
        if (
          currentMessageIndex === messages.length - 1 &&
          i === messages[currentMessageIndex].length + 1
        ) {
          setAreMessagesComplated(true);
        }
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        return;
      }

      setValueStream(messages[currentMessageIndex].slice(0, i));
      i++;
    }, 100);
  };

  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        streamMessage();
      }, 100);
    }
    if (InputRef.current) {
      InputRef.current.style.width = `0px`;
    }
  }, [currentMessageIndex, isFocused]);

  useEffect(() => {
    if (InputRef.current) {
      InputRef.current.style.width = `${InputRef.current.scrollWidth}px`;
    }
  }, [valueStream]);

  useEffect(() => {
    if (areMessagesComplated && !countDown.isChanging) {
      if (countDown.value !== 0) {
        countdownTimeout.current = setTimeout(() => {
          setCountDown((prev) => ({ ...prev, isChanging: true }));

          if (countdownTimeout.current) {
            clearInterval(countdownTimeout.current);
          }
        }, 1000);
      } else {
        setIsDestructStarted(true);
      }
    }

    if (countDown.isChanging) {
      countdownTimeout.current = setTimeout(() => {
        setCountDown((pre) => ({ isChanging: false, value: pre.value - 1 }));
      }, 600);
    }

    return () => {
      if (countdownTimeout.current) {
        clearTimeout(countdownTimeout.current);
      }
    };
  }, [areMessagesComplated, countDown.isChanging]);

  return (
    <motion.div
      key={control.name}
      className={` rounded-lg border-2 border-base-100
        flex items-center ${areMessagesComplated ? "" : "gap-x-[0.5vw]"}
        ${isDestructStarted ? "bg-red-500" : "relative"}    
    `}
      onClick={(e) => {
        setIsFocused(true);
      }}
      animate={{
        width: isDestructStarted ? "calc(100vw - 200px)" : undefined,
        height: isDestructStarted ? "calc(50vh - 200px)" : undefined,
        borderRadius: isDestructStarted ? "100%" : undefined,
      }}
      transition={{ duration: 3 }}
      onAnimationComplete={() => {
        setIsGotLarge(true);
      }}
    >
      <input
        ref={InputRef}
        type={control.type}
        className="py-[1vh] pl-[2vw] w-0 rounded-lg bg-base-content text-base-100 border-base-100 outline-none caret-transparent"
        value={valueStream}
        onChange={(e) => {
          setValueStream((pre) => pre);
        }}
      />
      <motion.span
        className="absolute left-0 min-w-max text-base-100  px-1 rounded-md pointer-events-none"
        animate={{
          fontSize: isFocused ? "12px" : "16px",
          fontWeight: isFocused ? 900 : 500,
          opacity: isFocused ? 1 : 0.5,
          top: isFocused ? "0%" : "50%",
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
      <AnimatePresence>
        {areMessagesComplated && !countDown.isChanging && (
          <motion.span
            className="text-base-100"
            initial={{ opacity: 0, y: "-50%", filter: "blur(10px)" }}
            animate={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
            exit={{ opacity: 0, y: "50%", filter: "blur(10px)" }}
            transition={{ type: "tween" }}
          >
            {countDown.value}
          </motion.span>
        )}
      </AnimatePresence>
      {isFocused && !areMessagesComplated && (
        <motion.span
          className={`h-full border-l-2 border-base-100 text-transparent`}
          animate={{
            opacity: [0, 1, 0],
            transition: { duration: 1.3, repeat: Infinity },
          }}
        >
          l
        </motion.span>
      )}
    </motion.div>
  );
}
export default FakePasswordInput;
