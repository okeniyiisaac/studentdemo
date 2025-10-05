import React from "react";

export default function Spinner({ size = 32, stroke = 5, color = "#06b6d4", title = "Loading" }) {
  const view = 50;
  const r = (view - stroke) / 2;
  return (
    <svg
      role="status"
      aria-label={title}
      width={size}
      height={size}
      viewBox={`0 0 ${view} ${view}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <circle
        cx={view / 2}
        cy={view / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${Math.PI * 2 * r * 0.25} ${Math.PI * 2 * r * 0.75}`}
        transform={`rotate(-90 ${view / 2} ${view / 2})`}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${view / 2} ${view / 2}`}
          to={`360 ${view / 2} ${view / 2}`}
          dur="0.9s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
