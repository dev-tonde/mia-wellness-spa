import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #fcfaf7, #dbe7d7)",
          color: "#201b17",
          display: "flex",
          fontFamily: "Georgia, serif",
          fontSize: 68,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        MW
      </div>
    ),
    size,
  );
}
