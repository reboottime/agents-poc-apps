"use client";

import { cn } from "@repo/ui/cn";

const FullPageLoading = () => {
  return (
    <div
      className={cn(
        "h-full w-full",
        "flex items-center justify-center",
        "bg-background"
      )}
    >
      <div className={cn("flex flex-col items-center gap-4")}>
        <div
          className={cn(
            "w-12 h-12 rounded-full",
            "border-4 border-primary/30 border-t-primary",
            "animate-spin"
          )}
        />
        <p
          className={cn("text-subtitle text-muted-foreground", "animate-pulse")}
        >
          Loading...
        </p>
      </div>
    </div>
  );
};

export default FullPageLoading;
