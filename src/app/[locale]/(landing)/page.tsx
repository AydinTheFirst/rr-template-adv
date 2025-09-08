import { motion } from "framer-motion";
// RandomWheelSVG.tsx
import React, { useState } from "react";

const colors = [
  "#f87171",
  "#fbbf24",
  "#34d399",
  "#60a5fa",
  "#a78bfa",
  "#f472b6",
  "#facc15",
  "#22d3ee",
];

interface RandomWheelSVGProps {
  options?: string[];
  size?: number;
}

function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${x} ${y} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

const RandomWheelSVG: React.FC<RandomWheelSVGProps> = ({
  options = ["Pizza", "Sushi", "Burger", "Salad", "Pasta", "Ice Cream"],
  size = 300,
}) => {
  const [rotation, setRotation] = useState(0);
  const [selected, setSelected] = useState<null | string>(null);
  const [spinning, setSpinning] = useState(false);

  const radius = size / 2;
  const sliceAngle = 360 / options.length;

  const spinWheel = () => {
    if (spinning) return; // Prevent multiple spins
    setSpinning(true);
    const randomIndex = Math.floor(Math.random() * options.length);
    // The pointer is at 0deg (top), so rotate the wheel so that the selected index aligns with 0deg
    const targetRotation =
      360 * 5 + (360 - randomIndex * sliceAngle - sliceAngle / 2);
    setRotation(targetRotation);
    setTimeout(() => {
      setSelected(options[randomIndex]);
      setSpinning(false);
    }, 3000); // match animation duration
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 z-10 h-0 w-0 -translate-x-1/2 border-r-8 border-b-16 border-l-8 border-r-transparent border-b-red-500 border-l-transparent"></div>
        <motion.svg
          animate={{ rotate: rotation }}
          className="origin-center"
          height={size}
          transition={{ duration: 3, ease: "easeOut" }}
          viewBox={`0 0 ${size} ${size}`}
          width={size}
        >
          {options.map((opt, i) => {
            const startAngle = i * sliceAngle;
            const endAngle = startAngle + sliceAngle;
            return (
              <g key={i}>
                <path
                  d={describeArc(radius, radius, radius, startAngle, endAngle)}
                  fill={colors[i % colors.length]}
                />
                <text
                  dominantBaseline="middle"
                  fill="white"
                  fontSize={14}
                  fontWeight="bold"
                  textAnchor="middle"
                  transform={`rotate(${startAngle + sliceAngle / 2} ${radius} ${radius}) translate(0,-${radius * 0.65})`}
                  x={radius}
                  y={radius}
                >
                  {opt}
                </text>
              </g>
            );
          })}
        </motion.svg>
      </div>
      <button
        className={`rounded-lg bg-blue-500 px-6 py-2 text-white shadow transition hover:bg-blue-600 ${spinning ? "cursor-not-allowed opacity-50" : ""}`}
        disabled={spinning}
        onClick={spinWheel}
      >
        {spinning ? "Spinning..." : "Spin"}
      </button>
      {selected && (
        <p className="text-xl font-semibold">Selected: {selected}</p>
      )}
    </div>
  );
};

export default RandomWheelSVG;
