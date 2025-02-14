import { motion } from "framer-motion";

function SubmitButton({ isLoading }: { isLoading: boolean }) {
  return (
    <button
      className={`relative overflow-hidden btn w-full btn-secondary -z-0 ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? (
        <div className="flex items-center gap-x-[0.5vw]">
          <p>Compiling Your Request..</p>
          <motion.span
            animate={{
              rotateZ: [0, 180, 180],
              transition: { repeat: Infinity, duration: 0.7 },
            }}
          >
            ⏳
          </motion.span>
          <motion.div
            className="absolute top-0 left-0 w-full h-[200%] bg-white blur-3xl"
            initial={{ rotateZ: -45 }}
            animate={{
              x: ["-100%", "100%", "100%"],
              transition: { repeat: Infinity, duration: 2 },
            }}
          ></motion.div>
        </div>
      ) : (
        "Summon the Developer 🔮"
      )}
    </button>
  );
}
export default SubmitButton;
