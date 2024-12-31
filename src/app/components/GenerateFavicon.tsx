"use client";

import { useEffect } from "react";

export default function GenerateFavicon() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#FF69B4"; // Rose vif
      ctx.fillRect(0, 0, 64, 64);
      ctx.fillStyle = "white";
      ctx.font = "40px Arial";
      ctx.fillText("🎂", 12, 48); // Emoji gâteau

      const link = document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href = canvas.toDataURL("image/x-icon");
      document.getElementsByTagName("head")[0].appendChild(link);
    }
  }, []);

  return null;
}
