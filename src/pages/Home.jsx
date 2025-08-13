import FooterCTA from "../components/Home/FooterCTA";
import HeroSection from "../components/Home/HeroSection";
import RolesSection from "../components/Home/RolesSection";
import ServicesSection from "../components/Home/ServicesSection";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <section className="text-center py-12">
        <h2 className="text-2xl font-semibold">
          Do you have a Construction Project we can help you with?
        </h2>
        <a
          href="#"
          className="text-orange-500 underline font-medium mt-2 inline-block"
        >
          Get a Quote Today
        </a>
      </section>
      <ServicesSection />
      <RolesSection />
      <FooterCTA />
    </div>
  );
}
