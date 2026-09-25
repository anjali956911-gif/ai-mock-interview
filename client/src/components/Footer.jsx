import { Link } from "react-router-dom";
import {
  BrainCircuit,
  Globe,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 text-2xl font-bold text-white"
            >
              <BrainCircuit className="h-9 w-9 text-violet-400" />

              <span>
                AI<span className="text-violet-400">Mock</span>
              </span>
            </Link>

            <p className="mt-5 leading-7 text-gray-400">
              AI-powered mock interviews with personalized feedback to help
              students and professionals prepare for technical interviews and
              land their dream jobs.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#features">Features</a></li>
              <li><a href="#how">How It Works</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 p-3 text-gray-300"
              >
                <Globe size={20} />
              </a>

              <a
                href="mailto:hello@aimock.ai"
                className="rounded-xl border border-white/10 p-3 text-gray-300"
              >
                <Mail size={20} />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AI Mock Interview Platform. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;