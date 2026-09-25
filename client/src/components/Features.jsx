import {
  Brain,
  BarChart3,
  Mic,
  Code2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "AI Interviewer",
    desc: "Experience realistic AI-powered HR and technical interviews with natural conversations.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Receive detailed reports with strengths, weaknesses, and personalized improvement tips.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Mic,
    title: "Voice Interaction",
    desc: "Answer interview questions naturally using speech for a real interview experience.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Code2,
    title: "Coding Challenges",
    desc: "Solve DSA and coding interview questions with instant AI evaluation.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Smart Feedback",
    desc: "Get AI-generated suggestions to improve communication, confidence, and technical skills.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Industry Ready",
    desc: "Prepare for interviews inspired by hiring processes at leading technology companies.",
    color: "from-indigo-500 to-violet-500",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-28 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.3em] text-violet-400 font-semibold">
          Features
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Everything You Need to
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            Crack Interviews
          </span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          Our AI platform combines interview simulation, coding evaluation,
          analytics, and personalized coaching into one modern experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div
                  className={`absolute -top-20 right-0 h-48 w-48 rounded-full bg-gradient-to-r ${feature.color} blur-3xl opacity-25`}
                />
              </div>

              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${feature.color} p-4 shadow-lg`}
              >
                <Icon className="text-white" size={30} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {feature.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;