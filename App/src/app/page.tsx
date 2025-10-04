"use client";

import { useState, useEffect, useRef } from "react";
import ThirtyDegreesTextBg from "../components/ThirtyDegreesTextBg";
import Projects from "../components/Projects";
import PrivacyPolicy from "../components/PrivacyPolicy";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollAccumulator, setScrollAccumulator] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sections = ["Projects", "Privacy Policy"];
  const SCROLL_THRESHOLD = 200;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;

      const newAccumulator = scrollAccumulator + e.deltaY;
      setScrollAccumulator(newAccumulator);

      if (Math.abs(newAccumulator) >= SCROLL_THRESHOLD) {
        setIsScrolling(true);

        if (newAccumulator > 0) {
          setActiveSection((prev) => Math.min(sections.length - 1, prev + 1));
        } else {
          setActiveSection((prev) => Math.max(0, prev - 1));
        }

        setScrollAccumulator(0);
        setTimeout(() => {
          setIsScrolling(false);
        }, 600);
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [sections.length, isScrolling, scrollAccumulator]);

  const renderSection = (index: number) => {
    console.log(`Rendering section ${index}, activeSection: ${activeSection}`);
    switch (index) {
      case 0:
        return <Projects />;
      case 1:
        return <PrivacyPolicy />;
      default:
        return <Projects />;
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 z-0">
        <ThirtyDegreesTextBg
          speed={0.25}
          triangleSize={75}
          direction="diagonal"
          borderColor="#e9ecef"
        />
      </div>

      <main className="flex flex-col h-screen relative z-10">
        <div className="h-[40vh] flex items-center justify-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-2 text-black">
              Thirty Degrees
            </h1>
            <h3>A software project by damian and robin</h3>
          </div>
        </div>

        <div className="w-full flex-1 min-h-0 pt-[10px] px-[10px] flex flex-col">
          <div className="bg-black rounded-t-lg flex-1 min-h-0 flex items-center justify-center px-8">
            <div className="flex flex-col space-y-4 w-1/2">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(index)}
                  className={`text-white text-2xl transition-all duration-300 text-left hover:opacity-80 ${
                    activeSection === index ? "font-bold" : "font-semibold"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div
              ref={scrollContainerRef}
              className="w-1/2 h-full overflow-hidden"
            >
              <div
                className="h-full flex flex-col transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${activeSection * 100}%)` }}
              >
                {sections.map((_, index) => (
                  <div
                    key={index}
                    className="h-full w-full flex-shrink-0 flex items-center justify-center"
                    style={{ minHeight: "100%" }}
                  >
                    {renderSection(index)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
