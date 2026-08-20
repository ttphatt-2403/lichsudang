import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Play, Pause, SkipForward } from "lucide-react";
import { C } from "@/tokens";

interface Museum3DPageProps {
  onBack: () => void;
}

interface Artwork {
  id: string;
  src: string;
  year: string;
  caption: string;
  description: string;
  author?: string;
  position: string;
  rotation: string;
  // camera viewing position for auto-tour (slightly in front of painting)
  viewFrom?: string;
}

// Positions derived from GLB spotlight data — circular gallery, radius 7.1
// viewFrom = position 4 units in front of each painting (toward center)
const ARTWORKS: Artwork[] = [
  {
    id: "a01", src: "/src/assets/s2-mattran-danchu.jpg",
    year: "1/5/1938",
    caption: "Mít tinh 1/5/1938 tại khu Đấu Xảo — Hà Nội",
    description: "Đỉnh cao của phong trào Mặt trận Dân chủ Đông Dương. Cuộc mít tinh hợp pháp khổng lồ của hơn 2.5 vạn quần chúng biểu dương lực lượng đòi tự do, cơm áo, hòa bình.",
    position: "-7.1 2.0 0.0", rotation: "0 -90 0", viewFrom: "-3.5 1.65 0.0",
  },
  {
    id: "a02", src: "/src/assets/s1-boicanh-quocte.jpg",
    year: "7/1935",
    caption: "Đại hội VII Quốc tế Cộng sản tại Mát-xcơ-va",
    description: "Đại hội xác định chủ nghĩa phát xít là kẻ thù nguy hiểm trước mắt. Chủ trương lập Mặt trận Nhân dân rộng rãi đấu tranh giành hòa bình, tự do và dân chủ.",
    position: "-6.858 2.0 1.838", rotation: "0 -75 0",
  },
  {
    id: "a03", src: "/src/assets/s2-daihoi-1.jpg",
    year: "3/1935",
    caption: "Đại hội đại biểu lần thứ I của Đảng tại Ma Cao",
    description: "Đánh dấu bước khôi phục quan trọng của tổ chức Đảng sau thời kỳ bị thực dân Pháp khủng bố trắng ác liệt theo sau phong trào Xô Viết Nghệ Tĩnh (1930-1931).",
    position: "-6.149 2.0 3.551", rotation: "0 -60 0",
  },
  {
    id: "a04", src: "/src/assets/s1-phatxit.jpg",
    year: "1933–1939",
    caption: "Chủ nghĩa phát xít — Mối đe dọa toàn cầu",
    description: "Sự trỗi dậy của chủ nghĩa phát xít tại Đức, Ý, Nhật Bản đặt ra thách thức sống còn, thúc đẩy các phong trào dân chủ toàn thế giới đoàn kết chống lại.",
    position: "-5.02 2.0 5.02", rotation: "0 -45 0",
  },
  {
    id: "a05", src: "/src/assets/s1-doisong-nhandan.jpg",
    year: "1929–1933",
    caption: "Đời sống nhân dân dưới ách áp bức thực dân phong kiến",
    description: "Cảnh nông dân, thợ thuyền bần cùng hóa trước khủng hoảng kinh tế toàn cầu và chế độ thuế khóa bóc lột khắc nghiệt, là động lực bùng nổ cao trào đấu tranh.",
    position: "-3.549 2.0 6.149", rotation: "0 -30 0",
  },
  {
    id: "a06", src: "/src/assets/s3-mattran-phap.jpg",
    year: "1936",
    caption: "Chính phủ Mặt trận Nhân dân Pháp lên nắm quyền",
    description: "Sự kiện mở ra không gian pháp lý mới cho Đông Dương: đại xá tù chính trị, nới lỏng kiểm duyệt báo chí và ban hành các cải cách tự do lập hội.",
    position: "-1.838 2.0 6.858", rotation: "0 -15 0",
  },
  {
    id: "a07", src: "/src/assets/s3-mittinh.jpg",
    year: "1900–1943",
    caption: "Nhà báo — nhà yêu nước lỗi lạc Nguyễn An Ninh",
    description: "Linh hồn của phong trào Đông Dương Đại hội tại Nam Kỳ. Ông dùng diễn thuyết và ngòi bút cổ vũ hàng vạn quần chúng đấu tranh đòi quyền tự do ngôn luận.",
    position: "0.0 2.0 7.1", rotation: "0 0 0",
  },
  {
    id: "a08", src: "/src/assets/s3-baochi.jpg",
    year: "1936–1939",
    caption: "Mặt trận báo chí cách mạng công khai",
    description: "Hàng chục tờ báo chữ Quốc ngữ và tiếng Pháp như Dân Chúng, Tin Tức, Lao Động thức tỉnh ý thức giác ngộ chính trị của hàng triệu người lao động Đông Dương.",
    position: "1.838 2.0 6.858", rotation: "0 15 0",
  },
  {
    id: "a09", src: "/src/assets/s4-phongtrao-danchu.jpg",
    year: "1936–1937",
    caption: "Phong trào Đông Dương Đại hội — Thu thập Dân nguyện",
    description: "Tập hợp hàng vạn bản kiến nghị gửi đến phái đoàn chính phủ Pháp đòi cải thiện đời sống, giảm sưu thuế và quyền tự do lập hội, tự do báo chí.",
    position: "3.549 2.0 6.149", rotation: "0 30 0",
  },
  {
    id: "a10", src: "/src/assets/s2-hoinghi-thuonghai.jpg",
    year: "7/1936",
    caption: "Hội nghị BCH Trung ương tại Thượng Hải",
    description: "Quyết định lịch sử: tạm gác khẩu hiệu tịch thu ruộng đất, tập trung lập Mặt trận Nhân dân phản đế đòi quyền dân sinh, dân chủ.",
    position: "5.02 2.0 5.02", rotation: "0 45 0",
  },
  {
    id: "a11", src: "/src/assets/s3-nghitruong.jpg",
    year: "1938",
    author: "Trường Chinh & Võ Nguyên Giáp",
    caption: "Tác phẩm 'Vấn đề dân cày' (1938)",
    description: "Cuốn sách lý luận kinh điển phân tích thực trạng bóc lột của chế độ thực dân phong kiến đối với nông dân Đông Dương, định hướng phương thức tổ chức đấu tranh.",
    position: "6.149 2.0 3.549", rotation: "0 60 0",
  },
  {
    id: "a12", src: "/src/assets/s4-chientranh.jpg",
    year: "9/1939",
    caption: "Chiến tranh thế giới thứ hai — Kết thúc thời kỳ Dân chủ",
    description: "Tháng 9/1939, Chiến tranh thế giới thứ hai bùng nổ. Pháp thực hiện chính sách thời chiến, đàn áp phong trào dân chủ, buộc Đảng chuyển hướng chiến lược.",
    position: "6.858 2.0 1.838", rotation: "0 75 0",
  },
  {
    id: "a13", src: "/src/assets/s4-renluyen-canbo.jpg",
    year: "1936–1939",
    caption: "Công tác huấn luyện, rèn luyện cán bộ cách mạng",
    description: "Đảng đặc biệt chú trọng đào tạo đội ngũ cán bộ, xây dựng lực lượng nòng cốt để chuẩn bị cho giai đoạn cách mạng tiếp theo.",
    position: "7.1 2.0 0.0", rotation: "0 90 0",
  },
  {
    id: "a14", src: "/src/assets/s1-phongtrao-cachmang.jpg",
    year: "1930–1935",
    caption: "Phong trào cách mạng Việt Nam trước giai đoạn Dân chủ",
    description: "Bức tranh toàn cảnh giai đoạn 1930-1935: từ đỉnh cao Xô Viết Nghệ Tĩnh đến thời kỳ khôi phục, tạo tiền đề cho cao trào dân chủ 1936-1939.",
    position: "6.858 2.0 -1.838", rotation: "0 105 0",
  },
  {
    id: "a15", src: "/src/assets/cover-1936.jpg",
    year: "1936",
    caption: "Dấu mốc 1936 — Mặt trận Dân chủ Đông Dương ra đời",
    description: "Năm 1936 đánh dấu bước chuyển biến mạnh mẽ: Đảng chuyển từ đấu tranh bí mật sang kết hợp linh hoạt đấu tranh công khai, hợp pháp với nửa hợp pháp.",
    position: "6.149 2.0 -3.549", rotation: "0 120 0",
  },
];

const PW = 1.85;
const PH = 1.25;

export function Museum3DPage({ onBack }: Museum3DPageProps) {
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);
  const [hoveredArt, setHoveredArt] = useState<Artwork | null>(null);
  const [loadState, setLoadState] = useState<"init" | "loading" | "done">("init");
  const [loadPct, setLoadPct] = useState(0);
  const [tourActive, setTourActive] = useState(false);
  const [tourIdx, setTourIdx] = useState(0);
  const initDone = useRef(false);
  const tourTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Teleport camera to view a painting from in front
  const teleportTo = (art: Artwork) => {
    const rig = document.getElementById("rig") as any;
    if (!rig) return;
    // Compute in-front position: move 3.5 units from wall toward center
    const [px, py, pz] = art.position.split(" ").map(Number);
    // Direction from painting toward center (0,0,0)
    const dx = -px, dz = -pz;
    const len = Math.sqrt(dx * dx + dz * dz) || 1;
    const nx = (dx / len) * 3.5;
    const nz = (dz / len) * 3.5;
    rig.setAttribute("position", { x: px + nx, y: 0, z: pz + nz });
    // Look toward the painting
    const cam = rig.querySelector("a-camera") as any;
    if (cam) {
      const lookControls = cam.components["look-controls"];
      if (lookControls) {
        const yawDeg = Math.atan2(px - (px + nx), pz - (pz + nz)) * 180 / Math.PI;
        lookControls.yawObject.rotation.y = yawDeg * Math.PI / 180;
        lookControls.pitchObject.rotation.x = 0;
      }
    }
  };

  /* ── 1. Load A-Frame + register component ───────────────────────────── */
  useEffect(() => {
    const setup = () => {
      const AF = (window as any).AFRAME;
      if (!AF) return;
      if (!AF.components["museum-art"]) {
        AF.registerComponent("museum-art", {
          schema: { id: { type: "string" } },
          init() {
            const el = this.el;
            const artId: string = this.data.id;
            el.addEventListener("mouseenter", () => {
              el.setAttribute("material", "emissive", "#c9a45c");
              el.setAttribute("material", "emissiveIntensity", "0.28");
              window.dispatchEvent(new CustomEvent("museum:hover", { detail: artId }));
            });
            el.addEventListener("mouseleave", () => {
              el.removeAttribute("material");
              window.dispatchEvent(new CustomEvent("museum:hover", { detail: "" }));
            });
            el.addEventListener("click", () => {
              window.dispatchEvent(new CustomEvent("museum:click", { detail: artId }));
            });
          },
        });
      }
      buildScene();
    };

    const buildScene = () => {
      if (initDone.current) return;
      initDone.current = true;

      const container = document.getElementById("aframe-container");
      if (!container) return;

      setLoadState("loading");
      setLoadPct(5);

      // All images in a-assets for simultaneous preloading
      const imgAssets = ARTWORKS.map(a =>
        `<img id="${a.id}" src="${a.src}" crossorigin="anonymous"/>`
      ).join("\n          ");

      // Painting panels — use asset references (#id) since all images are in a-assets
      const panels = ARTWORKS.map(a => `
        <a-entity position="${a.position}" rotation="${a.rotation}">
          <a-plane width="${(PW + 0.16).toFixed(2)}" height="${(PH + 0.16).toFixed(2)}"
            color="#b8923a" position="0 0 -0.018"
            material="metalness:0.5;roughness:0.4"></a-plane>
          <a-plane width="${(PW + 0.07).toFixed(2)}" height="${(PH + 0.07).toFixed(2)}"
            color="#f5ead0" position="0 0 -0.009"></a-plane>
          <a-plane width="${PW}" height="${PH}"
            src="#${a.id}"
            material="side:front;shader:flat"
            class="clickable"
            museum-art="id:${a.id}"></a-plane>
          <a-plane width="${(PW + 0.18).toFixed(2)}" height="${(PH + 0.18).toFixed(2)}"
            material="opacity:0.001;transparent:true;side:front"
            class="clickable"
            museum-art="id:${a.id}"
            position="0 0 0.006"></a-plane>
        </a-entity>`
      ).join("\n");

      container.innerHTML = `
        <a-scene
          embedded
          style="width:100%;height:100%;display:block;"
          background="color:#1a1208"
          renderer="antialias:true;colorManagement:true"
          loading-screen="enabled:false"
          vr-mode-ui="enabled:false"
        >
          <a-assets timeout="300000">
            <a-asset-item id="gallery-glb" src="/src/assets/BaoTang3D/art_gallery.glb.glb"></a-asset-item>
            ${imgAssets}
          </a-assets>

          <!-- Gallery environment model -->
          <a-entity gltf-model="#gallery-glb" position="0 0 0" shadow="receive:true;cast:false"></a-entity>

          <!-- Historical artwork panels -->
          ${panels}

          <!-- Warm museum lighting -->
          <a-light type="ambient" color="#f5e0b0" intensity="0.85"></a-light>
          <a-light type="directional" color="#ffd080" intensity="0.7" position="0 8 0"></a-light>
          <a-light type="point" color="#ffc060" intensity="0.6" position="-4 3.5 2" distance="18" decay="2"></a-light>
          <a-light type="point" color="#ffc060" intensity="0.6" position="4 3.5 -2" distance="18" decay="2"></a-light>
          <a-light type="point" color="#ffe0a0" intensity="0.5" position="0 3.5 5" distance="15" decay="2"></a-light>
          <a-light type="point" color="#ffe0a0" intensity="0.5" position="0 3.5 -5" distance="15" decay="2"></a-light>

          <!-- First-person camera at eye level -->
          <a-entity id="rig" position="0 0 0">
            <a-camera
              wasd-controls="acceleration:18;fly:false"
              look-controls="pointerLockEnabled:true"
              position="0 1.65 0"
              near="0.05"
              fov="80"
            >
              <a-cursor
                raycaster="objects:.clickable;far:10"
                material="color:#c9a45c;shader:flat;opacity:0.9"
                geometry="primitive:ring;radiusInner:0.007;radiusOuter:0.012"
                position="0 0 -1"
              ></a-cursor>
            </a-camera>
          </a-entity>
        </a-scene>`;

      // Track loading progress
      const scene = container.querySelector("a-scene") as any;
      if (!scene) return;

      // Simulate progress while loading
      let pct = 5;
      const progressInterval = setInterval(() => {
        pct = Math.min(pct + (95 - pct) * 0.04, 94);
        setLoadPct(Math.round(pct));
      }, 400);

      // A-Frame "loaded" fires when all a-assets are ready and scene is initialized
      scene.addEventListener("loaded", () => {
        clearInterval(progressInterval);
        setLoadPct(100);
        setTimeout(() => setLoadState("done"), 600);
      });

      // Hard timeout fallback: let user in after 60s regardless
      setTimeout(() => {
        clearInterval(progressInterval);
        setLoadPct(100);
        setLoadState("done");
      }, 60_000);
    };

    if ((window as any).AFRAME) { setup(); return; }
    if (document.getElementById("aframe-script")) {
      const iv = setInterval(() => {
        if ((window as any).AFRAME) { clearInterval(iv); setup(); }
      }, 100);
      return () => clearInterval(iv);
    }
    const s = document.createElement("script");
    s.id = "aframe-script";
    s.src = "https://aframe.io/releases/1.6.0/aframe.min.js";
    s.onload = setup;
    document.head.appendChild(s);
  }, []);

  /* ── 2. React event listeners ───────────────────────────────────────── */
  useEffect(() => {
    const onHover = (e: Event) => {
      const id = (e as CustomEvent).detail as string;
      setHoveredArt(id ? (ARTWORKS.find(a => a.id === id) ?? null) : null);
    };
    const onClick = (e: Event) => {
      const id = (e as CustomEvent).detail as string;
      const art = ARTWORKS.find(a => a.id === id);
      if (art) setSelectedArt(art);
    };
    window.addEventListener("museum:hover", onHover);
    window.addEventListener("museum:click", onClick);
    return () => {
      window.removeEventListener("museum:hover", onHover);
      window.removeEventListener("museum:click", onClick);
    };
  }, []);

  /* ── 3. Auto-tour logic ─────────────────────────────────────────────── */
  useEffect(() => {
    if (!tourActive || loadState !== "done") return;
    // Teleport to current artwork and show its modal after a short delay
    const art = ARTWORKS[tourIdx];
    teleportTo(art);
    const t1 = setTimeout(() => setSelectedArt(art), 800);
    // Advance to next after 8 seconds
    tourTimer.current = setTimeout(() => {
      setSelectedArt(null);
      setTourIdx(i => (i + 1) % ARTWORKS.length);
    }, 8000);
    return () => { clearTimeout(t1); if (tourTimer.current) clearTimeout(tourTimer.current); };
  }, [tourActive, tourIdx, loadState]);

  /* ── 4. Keyboard shortcut T = toggle tour ───────────────────────────── */
  useEffect(() => {
    if (loadState !== "done") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "t") {
        setTourActive(v => !v);
        if (!tourActive) { setTourIdx(0); setSelectedArt(null); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [loadState, tourActive]);

  /* ── Render ─────────────────────────────────────────────────────────── */
  const isLoading = loadState !== "done";

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "#1a1208", fontFamily: C.body }}>

      {/* A-Frame viewport — ALWAYS in DOM so scene can initialize */}
      <div id="aframe-container" style={{ position: "absolute", inset: 0, zIndex: 1 }}/>

      {/* ── Loading overlay ── */}
      {isLoading && (
        <div style={{
          position: "absolute", inset: 0, zIndex: 150,
          background: "rgba(14,8,2,0.97)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 28,
        }}>
          {/* Museum icon / entrance illustration */}
          <div style={{
            width: 100, height: 160,
            border: `2px solid rgba(201,164,92,0.35)`,
            borderBottom: "none",
            position: "relative",
            boxShadow: `0 0 50px 8px rgba(201,164,92,0.08)`,
            background: "linear-gradient(to bottom, rgba(201,164,92,0.08), transparent)",
            marginBottom: 8,
          }}>
            <div style={{
              position: "absolute", inset: "16px 20px",
              border: `1px solid rgba(201,164,92,0.25)`,
            }}/>
            {/* Arch top */}
            <div style={{
              position: "absolute", top: -20, left: -2, right: -2, height: 20,
              borderRadius: "50px 50px 0 0",
              border: `2px solid rgba(201,164,92,0.35)`,
              borderBottom: "none",
              background: "rgba(201,164,92,0.05)",
            }}/>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{
              fontFamily: C.sans, fontSize: 10, fontWeight: 700,
              color: "rgba(201,164,92,0.45)", letterSpacing: "0.28em",
              textTransform: "uppercase", marginBottom: 10,
            }}>
              Đang tải bảo tàng
            </div>
            <div style={{
              fontFamily: C.serif, fontSize: 22, fontWeight: 800,
              color: "#faf6ed", marginBottom: 4,
            }}>
              Phòng trưng bày 1936–1939
            </div>
            <div style={{
              fontFamily: C.sans, fontSize: 12, color: "rgba(201,164,92,0.55)",
              letterSpacing: "0.04em",
            }}>
              {ARTWORKS.length} hiện vật lịch sử đang được chuẩn bị...
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ width: 320 }}>
            <div style={{
              height: 3,
              background: "rgba(201,164,92,0.12)",
              borderRadius: 2,
              overflow: "hidden",
              marginBottom: 8,
            }}>
              <div style={{
                height: "100%",
                width: `${loadPct}%`,
                background: `linear-gradient(to right, ${C.red}, ${C.accent})`,
                borderRadius: 2,
                transition: "width 0.4s ease-out",
              }}/>
            </div>
            <div style={{
              display: "flex", justifyContent: "space-between",
              fontFamily: C.sans, fontSize: 10, color: "rgba(201,164,92,0.4)",
              letterSpacing: "0.06em",
            }}>
              <span>Mô hình 3D + {ARTWORKS.length} hình ảnh</span>
              <span>{loadPct}%</span>
            </div>
          </div>

          {/* Skip button (only after A-Frame is initialized) */}
          {loadState === "loading" && loadPct > 20 && (
            <button
              onClick={() => setLoadState("done")}
              style={{
                background: "transparent", color: "rgba(201,164,92,0.45)",
                border: `1px solid rgba(201,164,92,0.2)`,
                fontFamily: C.sans, fontSize: 10, fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "8px 22px", cursor: "pointer", transition: C.tr,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = C.accent; e.currentTarget.style.borderColor = "rgba(201,164,92,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(201,164,92,0.45)"; e.currentTarget.style.borderColor = "rgba(201,164,92,0.2)"; }}
            >
              Bỏ qua — Vào bảo tàng ngay →
            </button>
          )}
        </div>
      )}

      {/* ── HUD top bar ── */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 200,
        padding: "10px 20px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "linear-gradient(to bottom, rgba(10,6,2,0.95), transparent)",
        pointerEvents: "none",
      }}>
        <button
          onClick={onBack}
          style={{
            pointerEvents: "all",
            display: "flex", alignItems: "center", gap: 8,
            background: "rgba(40,28,10,0.88)", border: `1.5px solid rgba(201,164,92,0.5)`,
            color: C.accent, cursor: "pointer", fontFamily: C.sans,
            fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", padding: "8px 16px", transition: C.tr,
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(139,26,26,0.88)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(40,28,10,0.88)"}
        >
          <ArrowLeft size={14}/> Thoát bảo tàng
        </button>

        <span style={{
          fontFamily: C.serif, fontSize: 15, fontWeight: 700,
          color: "rgba(201,164,92,0.9)", letterSpacing: "0.08em",
          textShadow: "0 2px 10px rgba(0,0,0,0.95)",
        }}>
          Phòng trưng bày Cách mạng 1936–1939 &nbsp;·&nbsp;
          <span style={{ fontFamily: C.sans, fontSize: 12, fontWeight: 500 }}>{ARTWORKS.length} hiện vật</span>
        </span>

        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          {[["WASD", "Di chuyển"], ["Chuột", "Nhìn"], ["Trỏ tranh", "Thuyết minh"]].map(([k, v]) => (
            <span key={k} style={{ fontFamily: C.sans, fontSize: 10, color: "rgba(201,164,92,0.45)" }}>
              <strong style={{ color: "rgba(201,164,92,0.8)" }}>{k}</strong> — {v}
            </span>
          ))}
        </div>
      </div>

      {/* ── Auto-tour demo control bar ── */}
      {!isLoading && !hoveredArt && !selectedArt && (
        <div style={{
          position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
          zIndex: 200, pointerEvents: "all",
          display: "flex", alignItems: "center", gap: 10,
          background: "rgba(10,6,2,0.82)", border: `1px solid rgba(201,164,92,0.3)`,
          padding: "8px 16px", backdropFilter: "blur(8px)",
        }}>
          {/* Play/pause auto-tour */}
          <button
            onClick={() => { setTourActive(v => !v); if (!tourActive) { setTourIdx(0); setSelectedArt(null); } }}
            style={{
              display: "flex", alignItems: "center", gap: 7,
              background: tourActive ? C.red : "rgba(201,164,92,0.12)",
              border: `1px solid ${tourActive ? C.red : "rgba(201,164,92,0.35)"}`,
              color: tourActive ? "#fff" : C.accent,
              fontFamily: C.sans, fontSize: 10, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              padding: "7px 14px", cursor: "pointer", transition: C.tr,
            }}
          >
            {tourActive ? <><Pause size={12}/> Dừng Auto Tour</> : <><Play size={12}/> Auto Tour Demo</>}
          </button>

          {tourActive && (
            <>
              {/* Skip to next painting */}
              <button
                onClick={() => { if (tourTimer.current) clearTimeout(tourTimer.current); setSelectedArt(null); setTourIdx(i => (i + 1) % ARTWORKS.length); }}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "rgba(201,164,92,0.08)", border: `1px solid rgba(201,164,92,0.3)`,
                  color: "rgba(201,164,92,0.7)", fontFamily: C.sans, fontSize: 10,
                  fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                  padding: "7px 12px", cursor: "pointer", transition: C.tr,
                }}
                onMouseEnter={e => e.currentTarget.style.color = C.accent}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(201,164,92,0.7)"}
              >
                <SkipForward size={12}/> Tiếp
              </button>

              {/* Progress indicator */}
              <span style={{
                fontFamily: C.sans, fontSize: 10, color: "rgba(201,164,92,0.5)",
                letterSpacing: "0.06em", padding: "0 4px",
              }}>
                {tourIdx + 1} / {ARTWORKS.length}
              </span>
            </>
          )}

          <span style={{
            fontFamily: C.sans, fontSize: 10, color: "rgba(201,164,92,0.3)",
            letterSpacing: "0.06em", borderLeft: "1px solid rgba(201,164,92,0.15)", paddingLeft: 10, marginLeft: 4,
          }}>
            T = bật/tắt
          </span>
        </div>
      )}

      {/* ── Hover tooltip (only when not in tour) ── */}
      {hoveredArt && !selectedArt && !isLoading && !tourActive && (
        <div style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          zIndex: 200, pointerEvents: "none", textAlign: "center",
          background: "rgba(10,6,2,0.92)", border: `1.5px solid ${C.accent}`,
          padding: "10px 30px", maxWidth: 520,
          animation: "fadeIn 0.15s ease-out", backdropFilter: "blur(6px)",
        }}>
          <div style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, color: C.red, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3 }}>
            {hoveredArt.year}
          </div>
          <div style={{ fontFamily: C.serif, fontSize: 15, fontWeight: 700, color: "#faf6ed", lineHeight: 1.3, marginBottom: 4 }}>
            {hoveredArt.caption}
          </div>
          <div style={{ fontFamily: C.sans, fontSize: 10, color: "rgba(201,164,92,0.5)", letterSpacing: "0.07em" }}>
            Click để xem thuyết minh chi tiết
          </div>
        </div>
      )}

      {/* ── Artwork detail modal ── */}
      {selectedArt && (
        <div
          onClick={e => { if (e.target === e.currentTarget) setSelectedArt(null); }}
          style={{
            position: "absolute", inset: 0, zIndex: 300,
            background: "rgba(6,3,1,0.9)", backdropFilter: "blur(10px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            animation: "fadeIn 0.22s ease-out",
          }}
        >
          <div style={{
            background: "linear-gradient(135deg, #faf6ed 0%, #f0e3c8 100%)",
            border: `3px solid ${C.accent}`,
            boxShadow: "0 30px 80px rgba(0,0,0,0.75)",
            maxWidth: 920, width: "92%",
            display: "grid", gridTemplateColumns: "1fr 1.2fr",
            overflow: "hidden",
          }}>
            {/* Left: framed image */}
            <div style={{
              padding: 28, background: "#1c1510",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                padding: 12,
                background: "linear-gradient(135deg, #e5c07b 0%, #c9a45c 30%, #9d7d3d 60%, #c9a45c 80%, #e5c07b 100%)",
                boxShadow: "0 8px 36px rgba(0,0,0,0.7), inset 0 0 12px rgba(0,0,0,0.2)",
              }}>
                <img
                  src={selectedArt.src}
                  alt={selectedArt.caption}
                  style={{
                    display: "block", width: 300, height: 210,
                    objectFit: "cover", filter: "sepia(0.08) contrast(1.06)",
                  }}
                />
              </div>
            </div>

            {/* Right: info */}
            <div style={{ padding: "32px 28px", display: "flex", flexDirection: "column" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 12,
                borderBottom: `2.5px solid ${C.red}`, paddingBottom: 12, marginBottom: 18,
              }}>
                <span style={{ fontFamily: C.sans, fontSize: 15, fontWeight: 700, color: C.red, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {selectedArt.year}
                </span>
                <span style={{
                  background: "rgba(139,26,26,0.09)", border: `1px solid rgba(139,26,26,0.25)`,
                  padding: "2px 10px", fontFamily: C.sans, fontSize: 10, fontWeight: 700,
                  color: C.red, textTransform: "uppercase", letterSpacing: "0.08em",
                }}>
                  Hiện vật lịch sử
                </span>
              </div>

              <h2 style={{ fontFamily: C.serif, fontSize: 21, fontWeight: 900, color: C.dark, lineHeight: 1.3, marginBottom: 10 }}>
                {selectedArt.caption}
              </h2>

              {selectedArt.author && (
                <p style={{
                  fontFamily: C.sans, fontSize: 11, fontWeight: 700, color: C.brown,
                  textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12,
                }}>
                  ✦ Tác giả: {selectedArt.author}
                </p>
              )}

              <div style={{ height: 1, background: `linear-gradient(to right, ${C.accent}55, transparent)`, marginBottom: 14 }}/>

              <p style={{
                fontFamily: C.body, fontSize: 16, lineHeight: 1.8,
                color: C.dark, opacity: 0.87, flex: 1, marginBottom: 22,
              }}>
                {selectedArt.description}
              </p>

              <div style={{ display: "flex", gap: 12 }}>
                <button
                  onClick={() => setSelectedArt(null)}
                  style={{
                    background: C.dark, color: "#fff", fontFamily: C.sans,
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
                    textTransform: "uppercase", padding: "11px 26px",
                    border: "none", cursor: "pointer", transition: C.tr,
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = C.red}
                  onMouseLeave={e => e.currentTarget.style.background = C.dark}
                >
                  Tiếp tục tham quan →
                </button>
                <button
                  onClick={() => setSelectedArt(null)}
                  style={{
                    background: "transparent", color: C.brown, fontFamily: C.sans,
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", padding: "11px 20px",
                    border: `1.5px solid rgba(139,107,63,0.4)`, cursor: "pointer", transition: C.tr,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.brown; e.currentTarget.style.background = "rgba(139,107,63,0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(139,107,63,0.4)"; e.currentTarget.style.background = "transparent"; }}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity:0; transform:translateY(5px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}
