import { type ReactNode } from "react";
import { classNames } from "@/app/lib/utils";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
  onDark?: boolean;
};

export function SectionLabel({
  children,
  className,
  onDark = false,
}: SectionLabelProps) {
  return (
    <div className={classNames("flex items-center gap-3", className)}>
      <span
        className={classNames(
          "h-2 w-8 shrink-0",
          onDark ? "bg-accent-bright" : "bg-accent"
        )}
        aria-hidden
      />
      <h4
        className={classNames(
          "text-sm font-semibold uppercase tracking-wide",
          onDark ? "text-accent-on-dark" : "text-accent-on-light"
        )}
      >
        {children}
      </h4>
    </div>
  );
}
