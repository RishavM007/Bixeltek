"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Call the GSAP animation whenever the route changes
    if ((window as any).pageTransition) {
      (window as any).pageTransition();
    }
  }, [pathname]);

  return <>{children}</>;
}
