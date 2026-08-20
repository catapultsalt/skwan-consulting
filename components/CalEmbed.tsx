"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { track } from "@vercel/analytics/react";
import { site } from "@/site.config";

const Cal = dynamic(() => import("@calcom/embed-react"), {
  ssr: false,
  loading: () => <div className="cal-loading">Loading the calendar...</div>,
});

export function CalEmbed({ compact = false }: { compact?: boolean }) {
  useEffect(() => {
    if (!site.calLink) return;

    void (async () => {
      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi({ namespace: "fit-call" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#185C43" },
          dark: { "cal-brand": "#DDE8E0" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("on", {
        action: "bookingSuccessfulV2",
        callback: () => track("cal_booking_completed"),
      });
    })();
  }, []);

  if (!site.calLink) {
    return (
      <div className={`cal-shell cal-placeholder ${compact ? "cal-shell-compact" : ""}`.trim()}>
        <span className="cal-placeholder-kicker">Calendar connection pending</span>
        <strong>Fit-call scheduling will appear here.</strong>
        <p>The preview is ready. Connect the final Cal.com link before launch.</p>
        <a className="button button-secondary" href={`mailto:${site.email}`}>
          Email {site.email}
        </a>
      </div>
    );
  }

  return (
    <div className={`cal-shell ${compact ? "cal-shell-compact" : ""}`.trim()}>
      <Cal
        namespace="fit-call"
        calLink={site.calLink}
        style={{ width: "100%", height: "100%", overflow: "auto" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
