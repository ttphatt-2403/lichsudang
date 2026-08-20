import { useState } from "react";
import { C } from "@/tokens";

interface ImageSlotProps {
  label?: string;
  caption?: string;
  height?: number;
  dark?: boolean;
  src?: string;
  objectFit?: "cover" | "contain";
}

export function ImageSlot({ label = "Hình ảnh", caption, height = 220, dark = false, src, objectFit = "cover" }: ImageSlotProps) {
  const [hovered, setHovered] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const bg    = dark ? "rgba(0,0,0,0.25)"          : "rgba(139,107,63,0.07)";
  const bgHover = dark ? "rgba(201,164,92,0.08)"    : "rgba(139,26,26,0.04)";
  const bdr   = dark ? "rgba(201,164,92,0.2)"       : "rgba(139,107,63,0.25)";
  const bdrHover = dark ? "rgba(201,164,92,0.6)"    : "rgba(139,26,26,0.4)";
  const cross = dark ? "rgba(201,164,92,0.22)"      : "rgba(139,107,63,0.25)";
  const txt   = dark ? "rgba(201,164,92,0.28)"      : "rgba(139,107,63,0.38)";
  const txtHover = dark ? "rgba(201,164,92,0.8)"    : "rgba(139,26,26,0.8)";
  const cap   = dark ? "rgba(201,164,92,0.3)"       : C.muted;

  const showImage = src && !hasError;

  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: showImage ? "pointer" : "crosshair" }}
    >
      <div style={{
        height,
        background: hovered ? bgHover : bg,
        border: showImage ? `1px solid ${hovered ? C.accent : C.border}` : `1px dashed ${hovered ? bdrHover : bdr}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        position: "relative",
        userSelect: "none",
        transition: "all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
        transform: hovered ? "scale(1.02) translateY(-4px)" : "scale(1) translateY(0)",
        boxShadow: hovered ? `0 12px 24px -10px ${dark ? 'rgba(0,0,0,0.5)' : 'rgba(139,26,26,0.15)'}` : "none",
        zIndex: hovered ? 10 : 1,
        overflow: "hidden",
      }}>
        {showImage ? (
          <img 
            src={src} 
            alt={label} 
            onError={() => setHasError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: objectFit,
              filter: hovered ? "sepia(0) contrast(1) brightness(1)" : "sepia(0.35) contrast(1.05) brightness(0.92)",
              transition: "filter 0.5s ease-out, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
              transform: hovered && objectFit === "cover" ? "scale(1.06)" : "scale(1)",
            }}
          />
        ) : (
          <>
            {/* cross-hair */}
            <div style={{ 
              position: "relative", width: 24, height: 24,
              transform: hovered ? "rotate(90deg) scale(1.2)" : "rotate(0deg) scale(1)",
              transition: "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)"
            }}>
              <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: hovered ? bdrHover : cross, transition: "background 0.4s" }}/>
              <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: hovered ? bdrHover : cross, transition: "background 0.4s" }}/>
            </div>
            <p style={{
              fontFamily: C.sans, fontSize: 10, fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: hovered ? txtHover : txt, textAlign: "center", lineHeight: 1.5,
              maxWidth: "70%",
              transition: "color 0.4s",
            }}>
              {label}
            </p>
          </>
        )}
      </div>
      {caption && (
        <p style={{
          fontFamily: C.sans, fontSize: 11, color: cap,
          fontStyle: "italic", marginTop: hovered ? 11 : 7, lineHeight: 1.5,
          paddingLeft: 2,
          transition: "margin-top 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}>
          {caption}
        </p>
      )}
    </div>
  );
}

