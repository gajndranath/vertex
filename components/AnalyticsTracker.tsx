"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // We only want to track pageviews if we are not in the admin area
    if (!pathname?.startsWith("/admin")) {
      trackEvent("pageview", { path: pathname });
    }
  }, [pathname]);

  return null; // This component does not render anything
}
