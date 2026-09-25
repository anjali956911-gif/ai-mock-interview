import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Software Engineer",
    company: "Google",
    review:
      "The AI feedback was incredibly detailed. It helped me improve my confidence and communication before my interviews.",
  },
  {
    name: "Priya Patel",
    role: "SDE Intern",
    company: "Microsoft",
    review:
      "The mock interviews felt surprisingly realistic. I finally understood where I was losing marks.",
  },
  {
    name: "Rahul Verma",
    role: "Backend Engineer",
    company: "Amazon",
    review:
      "Beautiful interface, excellent analytics, and the coding interview experience is outstanding.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="reviews"
      className="relative py-28 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.3em] text-violet-400 font-semibold">
          Testimonials
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Loved by
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}Developers
          </span>
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
          Thousands of students and professionals use AI Mock Interview to
          prepare with confidence.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="fill-yellow-400 text-yellow-400"
                  size={18}
                />
              ))}
            </div>

            <p className="mt-6 leading-8 text-gray-300">
              "{item.review}"
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-lg font-bold text-white">
                {item.name.charAt(0)}
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-400">
                  {item.role} • {item.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;