import React from "react";
import useInView from "@/hooks/useInView";

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0, 
      transform: inView ? "translateY(0) scale(1)" : "translateY(30px) scale(0.98)",
      transition: `opacity 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms, transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`,
      willChange: "opacity, transform",
    }}>
      {children}
    </div>
  );
}
