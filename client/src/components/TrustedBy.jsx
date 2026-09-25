import { motion } from "framer-motion";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Netflix",
  "Adobe",
  "OpenAI",
  "Stripe",
];

const TrustedBy = () => {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="text-center mb-10">
        <p className="text-violet-400 font-semibold uppercase tracking-[0.3em]">
          Trusted Inspiration
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Built for Future Engineers
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Practice interview experiences inspired by hiring standards at the
          world's leading technology companies.
        </p>
      </div>

      {/* Left Fade */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#060816] to-transparent z-20" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#060816] to-transparent z-20" />

      <div className="overflow-hidden">

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
          className="flex w-max gap-6"
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-10 py-5 text-gray-300 text-lg font-semibold transition-all duration-300 hover:border-violet-500 hover:text-white hover:scale-105"
            >
              {company}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TrustedBy;