import { C } from "@/tokens";

export function Polaroid({ src, alt, caption, rotate = 0, width = "100%" }: {
  src: string; alt: string; caption: string; rotate?: number; width?: string;
}) {
  return (
    <figure style={{ width, margin: "0 auto" }}>
      <div style={{
        background: "#fff",
        padding: "10px 10px 36px",
        boxShadow: "2px 4px 18px rgba(62,47,28,0.22), 0 1px 4px rgba(0,0,0,0.12)",
        transform: `rotate(${rotate}deg)`,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.transform = `rotate(0deg) scale(1.02)`;
          (e.currentTarget as HTMLDivElement).style.boxShadow = "4px 8px 28px rgba(62,47,28,0.3)";
          (e.currentTarget as HTMLDivElement).style.zIndex = "10";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.transform = `rotate(${rotate}deg) scale(1)`;
          (e.currentTarget as HTMLDivElement).style.boxShadow = "2px 4px 18px rgba(62,47,28,0.22), 0 1px 4px rgba(0,0,0,0.12)";
          (e.currentTarget as HTMLDivElement).style.zIndex = "1";
        }}
      >
        {src ? (
          <img src={src} alt={alt} style={{
            width: "100%", display: "block",
            objectFit: "cover", height: 220,
            filter: "sepia(0.25) contrast(1.06) brightness(0.94)",
          }}/>
        ) : (
          <div style={{
            width: "100%", height: 220, display: "flex",
            alignItems: "center", justifyContent: "center",
            background: C.bg2,
            borderBottom: `1px dashed ${C.border}`,
          }}>
            <span style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: C.muted, opacity: 0.5 }}>
              {alt || "Hình ảnh"}
            </span>
          </div>
        )}
      </div>
      <figcaption style={{
        fontFamily: C.body, fontSize: 14, fontStyle: "italic",
        color: C.muted, textAlign: "center", marginTop: 10, lineHeight: 1.5,
        paddingLeft: 8, paddingRight: 8,
      }}>{caption}</figcaption>
    </figure>
  );
}
