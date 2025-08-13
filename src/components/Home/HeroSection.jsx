import { ArrowRight } from "lucide-react";
import bgPattern from "/bg.png"; // or put in /public/bg.png and use "/bg.png"

export default function HeroSection() {
  return (
    <section
      className="flex flex-col lg:flex-row items-center gap-8 px-6 lg:px-20 relative overflow-hidden"
      style={{
        backgroundColor: "#060606",
        width: "1920px",
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
          Software for the <br /> Building Industry
        </h1>

        {/* Button with pattern background */}
        <div className="relative inline-block mt-6">
          {/* Pattern from left edge to button */}
          <img
            src={bgPattern}
            alt=""
            className="absolute left-[-200px] top-1/2 -translate-y-1/2 opacity-70 h-auto w-[300px] object-cover"
          />
          {/* Button */}
          <button className="relative inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-white font-semibold z-10">
            View More <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Image side */}
      <div className="flex-1 relative z-10 opacity-100">
        <img
          src="https://via.placeholder.com/500x400"
          alt="Building"
          className="rounded-lg shadow-lg"
        />
        <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded text-sm font-bold">
          8.05 x 8.05
        </span>
      </div>
    </section>
  );
}
