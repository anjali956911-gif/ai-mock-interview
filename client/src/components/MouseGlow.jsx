import { motion, useMotionValue, useSpring } from "framer-motion";

const MouseGlow = () => {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
  });

  const move = (e) => {
    mouseX.set(e.clientX - 200);
    mouseY.set(e.clientY - 200);
  };

  return (
    <div
      onMouseMove={move}
      className="fixed inset-0 pointer-events-none z-0"
    >
      <motion.div
        style={{
          x,
          y,
        }}
        className="absolute h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[130px]"
      />

      <motion.div
        style={{
          x: x,
          y: y,
        }}
        className="absolute h-[260px] w-[260px] rounded-full bg-cyan-400/10 blur-[110px]"
      />
    </div>
  );
};

export default MouseGlow;