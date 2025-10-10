"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PrivacyRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/?section=privacy-policy");
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white text-xl">Redirecting to privacy policy...</div>
    </div>
  );
}
