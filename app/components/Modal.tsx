"use client";

import type { ReactNode } from "react";

/** Centered modal with a dimmed, blurred backdrop. Click outside to close. */
export function Modal({
  children,
  onClose,
  className = "max-w-[410px]",
}: {
  children: ReactNode;
  onClose: () => void;
  className?: string;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`w-full rounded-[32px] bg-white ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
