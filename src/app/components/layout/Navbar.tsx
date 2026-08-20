import { Menu, X } from "lucide-react";
import { C } from "@/tokens";
import { CHAPTERS } from "@/data/content";

interface NavbarProps {
  scrolled: boolean;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  issue: { num: string; date: string };
  currentPage: "landing" | "game" | "museum";
  onChangePage: (page: "landing" | "game" | "museum") => void;
}

export function Navbar({ scrolled, mobileOpen, setMobileOpen, issue, currentPage, onChangePage }: NavbarProps) {
  const handleChapterClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (currentPage !== "landing") {
      e.preventDefault();
      onChangePage("landing");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(245,230,200,0.97)" : "rgba(245,230,200,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: `2px solid ${C.dark}`,
        transition: C.tr,
      }}>
        {/* Top thin strip */}
        <div style={{ background: C.red, padding: "4px 6%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: C.sans, fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: C.accent }}>
            Tạp chí Lịch sử &amp; Cuộc sống
          </span>
          <span style={{ fontFamily: C.sans, fontSize: 10, color: "rgba(201,164,92,0.7)", letterSpacing: "0.12em" }}>
            Số {issue.num} — {issue.date}
          </span>
        </div>
        {/* Main nav row */}
        <div style={{ padding: "0 6%", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); onChangePage("landing"); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <polygon points="16,2 18.8,10.5 28,10.5 20.8,16 23.4,24.5 16,19.5 8.6,24.5 11.2,16 4,10.5 13.2,10.5" fill={C.accent}/>
            </svg>
            <span style={{ fontFamily: C.serif, fontWeight: 800, fontSize: 18, color: C.dark, letterSpacing: "-0.01em" }}>Lịch sử Đảng</span>
          </a>
          
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0">
            {CHAPTERS.map(ch => (
              <a 
                key={ch.id} 
                href={`#${ch.id}`} 
                onClick={(e) => handleChapterClick(e, ch.id)}
                className="hover-magnetic-link" 
                style={{
                  textDecoration: "none", fontFamily: C.sans, fontSize: 14,
                  color: C.dark, opacity: 0.7, padding: "8px 16px",
                  borderRight: `1px dotted ${C.border}`,
                  transition: C.tr, display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap",
                }}
              >
                <span style={{ fontFamily: C.serif, fontWeight: 700, fontSize: 12, color: C.accent }}>{ch.roman}.</span>
                {ch.label}
              </a>
            ))}
            
            {/* New Quiz Page Link */}
            <button 
              onClick={() => onChangePage("game")} 
              className="hover-magnetic-link"
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: C.sans, fontSize: 13, fontWeight: 700,
                color: currentPage === "game" ? C.red : C.dark,
                opacity: currentPage === "game" ? 1 : 0.8,
                padding: "8px 14px",
                display: "flex", alignItems: "center", gap: 6,
                borderRight: `1px dotted ${C.border}`,
                borderLeft: `1px dotted ${C.border}`,
                marginLeft: 12
              }}
            >
              🎮 Thử thách Lịch sử
            </button>
            
            {/* New 3D Museum Link */}
            <button 
              onClick={() => onChangePage("museum")} 
              className="hover-magnetic-link"
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: C.sans, fontSize: 13, fontWeight: 700,
                color: currentPage === "museum" ? C.accent : C.dark,
                opacity: currentPage === "museum" ? 1 : 0.8,
                padding: "8px 14px",
                display: "flex", alignItems: "center", gap: 6,
              }}
            >
              🏛️ Bảo tàng 3D
            </button>
          </nav>
          
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: C.dark }}>
            {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6"
          style={{ background: "rgba(245,230,200,0.98)", paddingTop: 96 }}>
          {CHAPTERS.map(ch => (
            <a 
              key={ch.id} 
              href={`#${ch.id}`}
              style={{ color: C.dark, textDecoration: "none", fontSize: 22, fontFamily: C.serif, fontWeight: 700 }}
              onClick={(e) => {
                setMobileOpen(false);
                handleChapterClick(e, ch.id);
              }}
            >
              <span style={{ color: C.accent, marginRight: 12 }}>{ch.roman}.</span>{ch.title}
            </a>
          ))}
          
          <div style={{ width: 100, height: 1, background: C.border, margin: "10px 0" }}/>
          
          <button 
            onClick={() => { setMobileOpen(false); onChangePage("game"); }}
            style={{ background: "none", border: "none", cursor: "pointer", color: C.red, fontSize: 22, fontFamily: C.serif, fontWeight: 700 }}
          >
            🎮 Thử thách Lịch sử
          </button>
          
          <button 
            onClick={() => { setMobileOpen(false); onChangePage("museum"); }}
            style={{ background: "none", border: "none", cursor: "pointer", color: C.accent, fontSize: 22, fontFamily: C.serif, fontWeight: 700 }}
          >
            🏛️ Bảo tàng 3D
          </button>
        </div>
      )}
    </>
  );
}
