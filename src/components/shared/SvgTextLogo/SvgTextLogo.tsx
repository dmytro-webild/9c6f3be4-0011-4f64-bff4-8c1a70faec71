import React from "react";

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: string | number;
  fill?: string;
  opacity?: number;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = "",  fontSize = 48,
  fontWeight = "bold",  fill = "currentColor",  opacity = 1,
}) => {
  // Calculate approximate SVG dimensions
  const textLength = text.length;
  const estimatedWidth = textLength * (fontSize * 0.6);
  const viewBoxWidth = estimatedWidth + 20;
  const viewBoxHeight = fontSize + 20;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      className={className}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="10"
        y={fontSize}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill={fill}
        opacity={opacity}
        dominantBaseline="hanging"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
