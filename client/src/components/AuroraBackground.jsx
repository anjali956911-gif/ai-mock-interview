import { motion } from "framer-motion";

const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Purple */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-48 left-1/3 h-[650px] w-[650px] rounded-full bg-violet-500/20 blur-[170px]"
      />

      {/* Cyan */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -80, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-220px] left-[-180px] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[170px]"
      />

      {/* Pink */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-[-180px] h-[550px] w-[550px] rounded-full bg-fuchsia-500/20 blur-[170px]"
      />

    </div>
  );
};

export default AuroraBackground;
