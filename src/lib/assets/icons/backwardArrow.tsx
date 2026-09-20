import React from "react";
import { BaseComponentProps } from "@/types";

const BackwardArrow: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <svg
  className={className}
  width="9"
  height="18"
  viewBox="0 0 9 18"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.37158 0.5L0.944547 7.92704C0.351965 8.51962 0.351965 9.48038 0.944546 10.073L8.37158 17.5"
    stroke="currentColor"
    strokeLinecap="round"
  />
</svg>
  );
};

export default BackwardArrow;
