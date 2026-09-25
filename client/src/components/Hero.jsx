import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import AuroraBackground from "./AuroraBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Animated Aurora */}
      <AuroraBackground />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl"
        >
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

          <span className="text-sm text-gray-300">
            Trusted by Students & Professionals
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl text-5xl font-black leading-tight md:text-7xl lg:text-8xl"
        >
          Crack Your Next

          <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            AI Mock Interview
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl"
        >
          Practice Technical, HR, DSA and System Design interviews powered by
          AI. Receive detailed feedback, performance analytics and personalized
          improvement suggestions in real time.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-12 flex flex-col gap-5 sm:flex-row"
        >
          <Link
            to="/signup"
            className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 px-8 py-4 text-lg font-semibold shadow-[0_0_60px_rgba(139,92,246,.35)] transition-all duration-300 hover:scale-105"
          >
            Start Free

            <ArrowRight
              size={20}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg backdrop-blur-xl transition hover:bg-white/10">
            <PlayCircle size={22} />
            Watch Demo
          </button>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid gap-10 md:grid-cols-3"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 px-10 py-8 backdrop-blur-xl">
            <h2 className="text-5xl font-bold text-violet-400">
              <CountUp
                end={10000}
                duration={3}
                separator=","
                enableScrollSpy
                scrollSpyOnce
              />
              +
            </h2>

            <p className="mt-3 text-gray-400">
              Interviews Completed
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 px-10 py-8 backdrop-blur-xl">
            <h2 className="text-5xl font-bold text-cyan-400">
              <CountUp
                end={95}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />
              %
            </h2>

            <p className="mt-3 text-gray-400">
              Interview Success Rate
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 px-10 py-8 backdrop-blur-xl">
            <h2 className="text-5xl font-bold text-pink-400">
              <CountUp
                end={24}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />
              ×7
            </h2>

            <p className="mt-3 text-gray-400">
              AI Availability
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;