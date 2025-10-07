"use client";

import { useState, useEffect } from "react";
import { Wrench } from "lucide-react";

export default function MobileWorkInProgress() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          userAgent
        );
      const isSmallScreen = window.innerWidth <= 768;

      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center px-8">
      <div className="text-center">
        {/* Work in progress icon */}
        <div className="mb-8 flex justify-center">
          <Wrench className="w-16 h-16 text-white" />
        </div>

        {/* Text message */}
        <h1 className="text-2xl font-bold text-white mb-4">
          Website currently only for desktop-view available
        </h1>
      </div>
    </div>
  );
}
