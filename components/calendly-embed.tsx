"use client";

import { useEffect } from "react";

export const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const node = document.createElement("script");
    node.src = "https://assets.calendly.com/assets/external/widget.js";
    node.async = true;
    document.head.appendChild(node);
    return () => { document.head.removeChild(node); };
  }, []);
  
  return (
    <div
      className="calendly-inline-widget h-[700px] w-full"
      data-url={url}
    />
  );
};