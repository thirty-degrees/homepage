"use client";

import { useState, useEffect, useRef, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ThirtyDegreesTextBg from "../components/ThirtyDegreesTextBg";
import Projects from "../components/Projects";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TitleSection from "../components/TitleSection";

function HomeContent() {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollAccumulator, setScrollAccumulator] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const sections = ["Projects", "Privacy Policy"];
  const sectionNames = useMemo(() => ["projects", "privacy-policy"], []);
  const SCROLL_THRESHOLD = 200;
  const SWIPE_THRESHOLD = 30;

  // Read URL on mount and set initial section
  useEffect(() => {
    const sectionParam = searchParams.get("section");
    if (sectionParam) {
      const index = sectionNames.indexOf(sectionParam);
      if (index !== -1) {
        setActiveSection(index);
      }
    }
  }, [searchParams, sectionNames]); // Run only on mount

  // Update URL when section changes
  useEffect(() => {
    const sectionName = sectionNames[activeSection];
    router.push(`/?section=${sectionName}`, { scroll: false });
  }, [activeSection, router, sectionNames]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > SWIPE_THRESHOLD;
    const isRightSwipe = distance < -SWIPE_THRESHOLD;

    if (isLeftSwipe && activeSection < sections.length - 1) {
      setActiveSection(activeSection + 1);
    }
    if (isRightSwipe && activeSection > 0) {
      setActiveSection(activeSection - 1);
    }

    // Reset touch values
    setTouchStart(null);
    setTouchEnd(null);
  };

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
          borderColor="#ffffff"
        />
      </div>

      <main className="flex flex-col h-screen md:h-screen relative z-10">
        <div className="main-content-gradient h-[100%] flex flex-col px-4 md:px-8">
          {/* Title Section */}
          <div className="flex flex-col items-start justify-center w-full h-[40%] md:h-[50%]">
            <TitleSection />
          </div>

          {/* Mobile Layout: Tabs at top, content below */}
          <div className="md:hidden flex flex-col w-full h-[60%]">
            {/* Navigation Tabs */}
            <div className="flex flex-row items-center justify-center w-full mb-4">
              <div className="flex flex-row gap-4 w-full justify-center">
                {sections.map((section, index) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(index)}
                    className={`transition-all duration-300 text-center hover:opacity-80 relative px-4 py-2 ${
                      activeSection === index
                        ? "text-white text-lg font-semibold"
                        : "text-gray-400 text-base hover:text-gray-300"
                    }`}
                  >
                    {activeSection === index && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white rounded-full"></div>
                    )}
                    <span className="relative z-10">{section}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div
              className="flex-1 overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="h-full flex flex-row transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${activeSection * 100}%)` }}
              >
                {sections.map((_, index) => (
                  <div
                    key={index}
                    className="h-full w-full flex-shrink-0 flex items-center justify-center"
                    style={{ minWidth: "100%" }}
                  >
                    {renderSection(index)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout: Side navigation with horizontal sections */}
          <div className="hidden md:flex flex-row w-full h-[50%]">
            {/* Navigation - Desktop: vertical */}
            <div className="flex flex-col items-start justify-start w-1/4">
              <div className="flex flex-col gap-2 w-full h-full justify-center">
                {sections.map((section, index) => (
                  <div key={section} className="h-12 flex items-center">
                    <button
                      onClick={() => setActiveSection(index)}
                      className={`transition-all duration-300 text-left hover:opacity-80 relative ${
                        activeSection === index
                          ? "text-white text-3xl scale-105"
                          : "text-gray-400 text-2xl hover:text-gray-300"
                      }`}
                    >
                      {activeSection === index && (
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-full"></div>
                      )}
                      <span className="relative z-10">{section}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Area - Desktop */}
            <div
              ref={scrollContainerRef}
              className="w-3/4 h-full overflow-hidden"
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

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
