import { motion } from "framer-motion";
import {
  BrainCircuit,
  BarChart3,
  Mic,
  Code2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="relative overflow-hidden bg-[#060816] py-28">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Experience Your AI Dashboard
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-400">
            Track interview performance, monitor progress, and receive
            AI-powered feedback after every mock interview.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">

            {/* Left Side */}
            <div className="space-y-6">

              <div className="rounded-2xl border border-violet-500/20 bg-[#0d1228] p-6">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
                    <BrainCircuit className="text-violet-400" />
                    AI Interview Session
                  </h3>

                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                    Live
                  </span>
                </div>

                <div className="mt-8 space-y-5">

                  <div>
                    <div className="mb-2 flex justify-between text-gray-300">
                      <span>Communication</span>
                      <span>92%</span>
                    </div>

                    <div className="h-2 rounded-full bg-gray-700">
                      <div className="h-2 w-[92%] rounded-full bg-cyan-400" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-gray-300">
                      <span>Technical Skills</span>
                      <span>95%</span>
                    </div>

                    <div className="h-2 rounded-full bg-gray-700">
                      <div className="h-2 w-[95%] rounded-full bg-violet-500" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-gray-300">
                      <span>Confidence</span>
                      <span>88%</span>
                    </div>

                    <div className="h-2 rounded-full bg-gray-700">
                      <div className="h-2 w-[88%] rounded-full bg-pink-500" />
                    </div>
                  </div>

                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">

                <div className="rounded-2xl border border-white/10 bg-[#0d1228] p-5">
                  <Mic className="mb-4 text-cyan-400" />
                  <p className="text-sm text-gray-400">
                    Voice Analysis
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Excellent
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0d1228] p-5">
                  <Code2 className="mb-4 text-violet-400" />
                  <p className="text-sm text-gray-400">
                    Coding Score
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    95%
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0d1228] p-5">
                  <BarChart3 className="mb-4 text-pink-400" />
                  <p className="text-sm text-gray-400">
                    Overall Rank
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Top 5%
                  </h3>
                </div>

              </div>

            </div>

            {/* Right Side */}
            <div className="rounded-2xl border border-white/10 bg-[#0d1228] p-6">

              <div className="mb-6 flex items-center gap-3">
                <Sparkles className="text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">
                  AI Feedback
                </h3>
              </div>

              <div className="space-y-5">

                {[
                  "Strong communication skills",
                  "Excellent DSA problem solving",
                  "Maintain eye contact",
                  "Improve system design explanations",
                  "Use more real-world examples",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2
                      className="mt-1 text-green-400"
                      size={18}
                    />

                    <span className="text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DashboardPreview;