import { useState } from "react";
import { C } from "@/tokens";
import { CHAPTERS } from "@/data/content";
import { imgCover1936, imgCover1937, imgCover1939 } from "@/assets/images";

interface CoverCellProps {
  src: string;
  year: string;
  subtitle: string;
  style?: React.CSSProperties;
  onHoverTranslate?: string;
}

function CoverCell({ src, year, subtitle, style, onHoverTranslate = "translateY(0)" }: CoverCellProps) {
  const [hovered, setHovered] = useState(false);
  const [error, setError] = useState(false);
  const showImage = src && !error;

  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "rgba(62,47,28,0.35)",
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        transition: "all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
        cursor: "pointer",
        overflow: "hidden",
        transform: hovered ? `${onHoverTranslate} scale(1.02)` : "translate(0) scale(1)",
        ...style
      }}
    >
      {showImage && (
        <img 
          src={src} 
          alt={year} 
          onError={() => setError(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "sepia(0.4) contrast(1.1) brightness(0.65)",
            opacity: hovered ? 0.8 : 0.6,
            transition: "all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        />
      )}
      
      <span style={{ 
        position: "relative", 
        zIndex: 1,
        fontFamily: C.sans, 
        fontSize: 11, 
        fontWeight: 700, 
        letterSpacing: "0.2em", 
        textTransform: "uppercase", 
        color: hovered ? "rgba(245,230,200,0.9)" : "rgba(245,230,200,0.2)",
        transition: "color 0.4s"
      }}>
        {year}
      </span>
      
      <div style={{ 
        position: "absolute", 
        bottom: 12, 
        left: 14, 
        zIndex: 1,
        fontFamily: C.sans, 
        fontSize: 11, 
        fontWeight: 700, 
        letterSpacing: "0.18em", 
        textTransform: "uppercase", 
        color: "rgba(255,255,255,0.8)", 
        background: hovered ? C.red : "rgba(62,47,28,0.6)", 
        padding: "3px 10px",
        transition: "background 0.4s"
      }}>
        {subtitle}
      </div>
    </div>
  );
}

interface HeroCoverProps {
  onChangePage: (page: "landing" | "game" | "museum") => void;
}

export function HeroCover({ onChangePage }: HeroCoverProps) {
  return (
    <section style={{
      paddingTop: 104,
      background: C.dark,
      position: "relative", overflow: "hidden",
    }}>
      {/* Dot pattern - with parallax scrolling via CSS */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle, rgba(201,164,92,0.08) 1px, transparent 1px)`, 
          backgroundSize: "30px 30px",
          backgroundAttachment: "fixed" 
        }}
      />
      {/* Horizontal rule */}
      <div style={{ position: "absolute", top: 104, left: 0, right: 0, height: 1, background: `rgba(201,164,92,0.25)` }}/>

      <div style={{ padding: "56px 8% 64px", position: "relative", zIndex: 1 }}>
        {/* Masthead label */}
        <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(201,164,92,0.55)", marginBottom: 20 }}>
          Lịch sử Đảng Cộng sản Việt Nam · Giai đoạn 1936–1939
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,4vw,64px)", alignItems: "end" }}>
          {/* Left — Big title */}
          <div style={{ animation: "fadeUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards" }}>
            <h1 style={{
              fontFamily: C.serif, fontWeight: 900,
              fontSize: "clamp(38px,6vw,84px)",
              color: C.bg, lineHeight: 1.12,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              marginBottom: 16,
              transition: "transform 0.5s ease-out",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateX(10px)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateX(0)"; }}>
              Kiên Định<br/>
              <span style={{ color: C.red }}>Chiến Lược</span><br/>
              Linh Hoạt<br/>
              Sách Lược
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{ height: 2, width: 40, background: C.accent }}/>
              <span style={{ fontFamily: C.serif, fontSize: "clamp(17px,2.4vw,24px)", fontStyle: "italic", color: "rgba(201,164,92,0.85)" }}>
                Nhiệm vụ và hình thức đấu tranh 1936–1939
              </span>
            </div>
            <p style={{ fontFamily: C.body, fontSize: 18, color: "rgba(245,230,200,0.65)", lineHeight: 1.82, maxWidth: 440, marginBottom: 24 }}>
              Trước nguy cơ phát xít và những chuyển biến lớn của bối cảnh quốc tế — trong nước,
              Đảng Cộng sản Đông Dương linh hoạt điều chỉnh nhiệm vụ, lực lượng và phương thức
              đấu tranh, nhưng kiên định không từ bỏ mục tiêu chiến lược lâu dài.
            </p>

            {/* New CTA Buttons for Game and Museum */}
            <div style={{ display: "flex", gap: 16, marginTop: 24, marginBottom: 28, flexWrap: "wrap" }}>
              <button 
                onClick={() => onChangePage("game")}
                style={{
                  background: C.red,
                  color: "#fff",
                  fontFamily: C.sans,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "12px 24px",
                  border: `1.5px solid rgba(201,164,92,0.4)`,
                  borderRadius: 2,
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  boxShadow: "0 8px 20px -5px rgba(139,26,26,0.4)"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03) translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 25px -5px rgba(139,26,26,0.6)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1) translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 20px -5px rgba(139,26,26,0.4)"; }}
              >
                🎮 Thử thách Lịch sử
              </button>
              
              <button 
                onClick={() => onChangePage("museum")}
                style={{
                  background: "transparent",
                  color: C.accent,
                  fontFamily: C.sans,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "12px 24px",
                  border: `1.5px solid ${C.accent}`,
                  borderRadius: 2,
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03) translateY(-2px)"; e.currentTarget.style.background = "rgba(201,164,92,0.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1) translateY(0)"; e.currentTarget.style.background = "transparent"; }}
              >
                🏛️ Bảo tàng Lịch sử 3D
              </button>
            </div>

            {/* Chapter nav pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 0 }}>
              {CHAPTERS.map(ch => (
                <a key={ch.id} href={`#${ch.id}`} style={{
                  fontFamily: C.sans, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em",
                  padding: "6px 14px", border: `1px solid rgba(201,164,92,0.35)`,
                  color: "rgba(245,230,200,0.6)", textDecoration: "none",
                  background: "rgba(201,164,92,0.06)", transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)", whiteSpace: "nowrap",
                }}
                  onMouseEnter={e => { 
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = C.accent; 
                    (e.currentTarget as HTMLAnchorElement).style.color = C.accent; 
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 4px 12px rgba(201,164,92,0.15)`;
                  }}
                  onMouseLeave={e => { 
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,164,92,0.35)"; 
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,230,200,0.6)"; 
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  }}
                >
                  <span style={{ fontFamily: C.serif, color: C.accent, marginRight: 6, transition: "color 0.4s" }}>{ch.roman}.</span>{ch.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — 3 image cover cells (magazine cover style) */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gridTemplateRows: "1fr 1fr",
            gap: 4,
            height: 520,
            width: "100%",
            animation: "fadeUp 1.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
          }}>
            {/* Cell 1 — dominant, spans full height */}
            <CoverCell 
              src={imgCover1936}
              year="1936"
              subtitle="Đại hội VII · 7/1935"
              onHoverTranslate="translateX(-2px)"
              style={{ gridRow: "1 / 3" }}
            />
            {/* Cell 2 — top-right */}
            <CoverCell 
              src={imgCover1937}
              year="1937"
              subtitle="Mặt trận Nhân dân"
              onHoverTranslate="translateY(-2px) translateX(2px)"
            />
            {/* Cell 3 — bottom-right */}
            <CoverCell 
              src={imgCover1939}
              year="1939"
              subtitle="Mặt trận Dân chủ Đông Dương"
              onHoverTranslate="translateY(2px) translateX(2px)"
            />
          </div>
        </div>
      </div>
      {/* Gold rule bottom */}
      <div style={{ height: 3, background: `linear-gradient(to right, ${C.accent}, rgba(201,164,92,0.3))` }}/>
    </section>
  );
}

