import React from "react";

const Tick = ({
  className,
  height = "1em",
  width = "1em",
}: {
  className?: string;
  height: string;
  width: string;
}) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

export default Tick;
