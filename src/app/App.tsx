import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { C } from "@/tokens";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { HeroCover } from "@/app/components/sections/HeroCover";
import { Section1 } from "@/app/components/sections/Section1";
import { Section2 } from "@/app/components/sections/Section2";
import { Section3 } from "@/app/components/sections/Section3";
import { Section4 } from "@/app/components/sections/Section4";
import { MiniGamePage } from "@/app/components/sections/MiniGamePage";
import { Museum3DPage } from "@/app/components/sections/Museum3DPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"landing" | "game" | "museum">("landing");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [showTop, setShowTop]       = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [issue] = useState({ num: "06", date: "1936–1939" });

  useEffect(() => {
    const h = () => { 
      setScrolled(window.scrollY > 40); 
      setShowTop(window.scrollY > 500); 
      
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? `${totalScroll / windowHeight}` : "0";
      setScrollProgress(Number(scroll));
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div style={{ fontFamily: C.body, background: C.bg, color: C.dark, minHeight: "100vh" }}>
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${C.bg2}; }
        ::-webkit-scrollbar-thumb { background: ${C.brown}; border-radius: 99px; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
      
      {/* Scroll Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: 3,
        background: 'transparent',
        zIndex: 100,
        pointerEvents: 'none'
      }}>
        <div style={{
          height: '100%',
          background: C.red,
          width: `${scrollProgress * 100}%`,
          transition: 'width 0.1s ease-out',
          boxShadow: `0 0 10px ${C.red}, 0 0 5px ${C.red}`
        }} />
      </div>

      <Navbar 
        scrolled={scrolled} 
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen} 
        issue={issue}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />

      {currentPage === "landing" ? (
        <>
          <HeroCover onChangePage={setCurrentPage}/>

          <main style={{ maxWidth: 1200, margin: "0 auto", padding: "0 6%" }}>
            <Section1/>
            <div style={{ borderTop: `3px solid ${C.red}`, marginBottom: 48 }}/>
            <Section2/>
            <div style={{ borderTop: `3px solid ${C.red}`, marginBottom: 48 }}/>
            <Section3/>
            <div style={{ borderTop: `3px solid ${C.red}`, marginBottom: 48 }}/>
            <Section4/>
          </main>
        </>
      ) : currentPage === "game" ? (
        <MiniGamePage onBack={() => setCurrentPage("landing")} />
      ) : (
        <Museum3DPage onBack={() => setCurrentPage("landing")} />
      )}

      {currentPage === "landing" && <Footer issue={issue}/>}

      {currentPage === "landing" && showTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1) translateY(-4px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1) translateY(0)"; }}
          style={{
            position: "fixed", bottom: 28, right: 28, width: 44, height: 44,
            background: C.red, color: "#fff",
            border: `1.5px solid rgba(201,164,92,0.4)`,
            cursor: "pointer", boxShadow: "0 10px 25px -5px rgba(62,47,28,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50,
            transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
            borderRadius: 2
          }}>
          <ArrowUp size={18}/>
        </button>
      )}
    </div>
  );
}

