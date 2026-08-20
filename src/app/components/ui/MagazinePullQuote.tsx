import { useState } from "react";
import { C } from "@/tokens";

export function MagazinePullQuote({ text, attribution }: { text: string; attribution?: string }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderLeft: `4px solid ${C.red}`,
        paddingLeft: 24, paddingRight: 8,
        paddingTop: 4, paddingBottom: 4,
        margin: "24px 0",
        position: "relative",
        background: hovered ? "rgba(139,26,26,0.03)" : "transparent",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
        transition: "all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
    >
      <div style={{
        position: "absolute", top: -20, left: 12,
        fontFamily: C.serif, fontSize: 96, lineHeight: 1,
        color: C.red, opacity: 0.25, userSelect: "none", fontWeight: 900,
        pointerEvents: "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}>❝</div>
      <p style={{
        fontFamily: C.serif, fontSize: 22, fontStyle: "italic",
        fontWeight: 600, color: hovered ? C.red : C.dark, lineHeight: 1.65,
        position: "relative", zIndex: 1,
        transition: "color 0.4s",
      }}>{text}</p>
      {attribution && (
        <p style={{
          fontFamily: C.sans, fontSize: 12, fontWeight: 600,
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: C.brown, opacity: 0.7, marginTop: 10,
        }}>— {attribution}</p>
      )}
    </div>
  );
}
