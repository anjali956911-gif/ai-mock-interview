import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import TrustedBy from "../components/TrustedBy";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#060816]">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;