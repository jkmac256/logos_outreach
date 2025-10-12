import React from "react";

/**
 * ImageFrame Component
 * 
 * Props:
 * - src: image source (required)
 * - alt: alt text (required)
 * - width: custom width (e.g. "400px" or "100%")
 * - height: custom height (e.g. "auto" or "300px")
 * - rounded: tailwind radius (e.g. "xl", "2xl", "full")
 * - objectFit: "cover" | "contain" | "fill" | "none" | "scale-down"
 * - className: extra tailwind classes
 */
export default function ImageFrame({
  src,
  alt,
  width = "100%",
  height = "auto",
  rounded = "xl",
  objectFit = "cover",
  className = "",
}) {
  return (
    <div
      className={`overflow-hidden rounded-${rounded} shadow-lg bg-gray-100 ${className}`}
      style={{ width, height }}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-${objectFit} transition-transform duration-500 hover:scale-105`}
        loading="lazy"
      />
    </div>
  );
}
