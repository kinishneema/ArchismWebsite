import { ArrowRight } from "lucide-react";
import bgPattern from "/bg.png"; // or put in /public/bg.png and use "/bg.png"

export default function HeroSection() {
  return (
    <section
      className="flex flex-col lg:flex-row items-center gap-8 px-6 lg:px-20 relative overflow-hidden"
      style={{
        backgroundColor: "#060606",
        height: "550px",
      }}
    >
      {/* Glows */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[200px]"
        style={{ background: "#FE632FCC" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[200px]"
        style={{ background: "#FE632F7D" }}
      />

      {/* Text side */}
      <div className="flex-1 relative z-10">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white">
          Software for the
          <span className="block mt-4">Building Industry</span>
        </h1>

        {/* Button with pattern background */}
        <div className="relative inline-block mt-6">
          {/* Pattern from left edge to button */}
          <img
            src={bgPattern}
            alt=""
            className="absolute left-[-80px] top-[73%] -translate-y-1/2 opacity-70 h-auto w-[300px] object-cover"
          />
          {/* Button */}
          <button className="relative inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-white font-semibold z-10">
            View More <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Image side */}
      <div className="flex-1 relative z-10 flex justify-start lg:ml-20">
        <div className="relative w-[600px] h-[400px]">
          {/* Background corner image */}
          <img
            src="/image.png"
            alt="Building"
            className="rounded-lg shadow-lg w-[250px] h-[250px] object-cover absolute -bottom-8 -left-16 z-10"
          />

          {/* Main Image slightly smaller to reveal corner */}
          <img
            src="/building.jpg"
            alt="Building"
            className="rounded-lg shadow-lg w-[680px] h-[400px] object-cover relative z-20"
          />
          {/* Top-right background image */}

          <img
            src="/topright.png"
            alt="Building"
            className="rounded-lg shadow-lg w-[350px] h-[120px] object-cover absolute -top-24 -right-40 z-10"
          />
        </div>
      </div>
    </section>
  );
}
