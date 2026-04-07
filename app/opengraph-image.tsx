import { ImageResponse } from "next/og";

import { businessConfig } from "@/lib/business-config";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Mia Wellness Spa Open Graph brand image";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "radial-gradient(circle at top left, rgba(197,213,192,0.7), transparent 35%), linear-gradient(135deg, #f4efe8 0%, #fcfaf7 55%, #dbe7d7 100%)",
          color: "#201b17",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "flex-start",
            border: "1px solid rgba(32,27,23,0.08)",
            borderRadius: "999px",
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.22em",
            padding: "14px 20px",
            textTransform: "uppercase",
            width: "auto",
          }}
        >
          Mobile House-Call Wellness
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: 860 }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 82, lineHeight: 1.05 }}>
            {businessConfig.name}
          </div>
          <div style={{ display: "flex", fontSize: 34, lineHeight: 1.35 }}>
            Premium mobile massage in {businessConfig.serviceAreaSummary}, designed for calm,
            personalised care at home.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            justifyContent: "space-between",
            opacity: 0.8,
            width: "100%",
          }}
        >
          <div>{businessConfig.location}</div>
          <div>{businessConfig.domain}</div>
        </div>
      </div>
    ),
    size,
  );
}
