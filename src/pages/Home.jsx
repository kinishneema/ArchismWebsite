import { ArrowRight } from "lucide-react";
import FooterCTA from "../components/Home/FooterCTA";
import HeroSection from "../components/Home/HeroSection";
import RolesSection from "../components/Home/RolesSection";
import ServicesSection from "../components/Home/ServicesSection";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <section className="text-center p-20">
        <h2 className="text-4xl font-bold">
          Do you have{" "}
          <span className="text-gray-500">
            a Construction Project we can <br /> help you with?
          </span>
        </h2>
        <a
          href="#"
          className="text-white underline font-medium mt-12 inline-flex items-center"
        >
          Get a Quote Today <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </section>
      <ServicesSection />
      <RolesSection />
      <FooterCTA />
    </div>
  );
}
