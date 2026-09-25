import { motion } from "framer-motion";
import {
  UserPlus,
  MessageSquareText,
  BrainCircuit,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    desc: "Sign up and personalize your interview experience based on your target role and skill level.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: MessageSquareText,
    title: "Start AI Interview",
    desc: "Practice HR, Technical, DSA, or System Design interviews with an intelligent AI interviewer.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: BrainCircuit,
    title: "AI Evaluates You",
    desc: "Our AI analyzes confidence, communication, correctness, and overall interview performance.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: BarChart3,
    title: "Improve & Repeat",
    desc: "Receive detailed insights, personalized recommendations, and track your progress over time.",
    color: "from-green-500 to-emerald-500",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how"
      className="relative py-28 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-20">
        <p className="uppercase tracking-[0.3em] text-violet-400 font-semibold">
          Process
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          How It
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}Works
          </span>
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
          A simple four-step workflow designed to help you become interview-ready
          with AI-powered guidance.
        </p>
      </div>

      <div className="relative">

        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />

        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/2 px-6">
                  <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-300 hover:border-violet-500">
                    <div
                      className={`inline-flex rounded-2xl bg-gradient-to-r ${step.color} p-4`}
                    >
                      <Icon size={30} className="text-white" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-400">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 hidden lg:flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-xl">
                    {index + 1}
                  </div>
                </div>

                <div className="lg:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;