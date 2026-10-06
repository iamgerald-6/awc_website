import * as React from "react";
import { ArrowRight } from "lucide-react";

type HighlightSphereProps = {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  showArrow?: boolean;
};

export const HighlightSphere: React.FC<HighlightSphereProps> = ({
  children,
  className = "",
  bgColor = "bg-tranparent",
  borderColor = "border-white",
  textColor = "text-black",
  showArrow = true,
}) => {
  return (
    <div className={`relative inline-block cursor-pointer group ${className}`}>
      <span
        className={`absolute top-1/2 left-0 -translate-y-1/2 w-9 h-9 ${bgColor} border ${borderColor} rounded-full transition-all duration-300 ease-out origin-left group-hover:w-full group-hover:rounded-full`}
      ></span>
      <span
        className={`relative z-10 px-4 py-2 font-medium flex items-center gap-2 ${textColor} text-sm md:text-base`}
      >
        {children}
        {showArrow && (
          <ArrowRight
            className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            size={16}
          />
        )}
      </span>
    </div>
  );
};
