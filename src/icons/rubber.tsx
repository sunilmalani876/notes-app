import React from "react";

const Rubber = ({
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
      <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"></path>
      <path d="M22 21H7"></path>
      <path d="m5 11 9 9"></path>
    </svg>
  );
};

export default Rubber;
