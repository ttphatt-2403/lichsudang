import { C } from "@/tokens";
import {
  S1_INTL_POINTS,
  S1_DOM_POINTS,
  S1_REQUIREMENTS,
} from "@/data/content";
import { Reveal } from "@/app/components/ui/Reveal";
import { Badge } from "@/app/components/ui/Badge";
import { MagazinePullQuote } from "@/app/components/ui/MagazinePullQuote";
import { DottedRule } from "@/app/components/ui/DottedRule";
import { ArticleHeader } from "@/app/components/ui/ArticleHeader";
import { ImageSlot } from "@/app/components/ui/ImageSlot";
import { 
  imgS1BoiCanhQuocTe, 
  imgS1PhatXit, 
  imgS1DoiSongNhanDan, 
  imgS1PhongTraoCachMang 
} from "@/assets/images";

export function Section1() {
  return (
    <section id="boi-canh" style={{ paddingTop: 64, paddingBottom: 48 }}>

      {/* ── Article header ── */}
      <Reveal>
        <ArticleHeader
          category="Phần I · Bối cảnh lịch sử"
          headline="Vì sao?"
          sub="Bối cảnh lịch sử và nguyên nhân điều chỉnh đường lối"
          period="1929 – 1936"
          intro="Đảng Cộng sản Đông Dương điều chỉnh đường lối 1936–1939 không phải là sự tuỳ tiện, mà xuất phát từ những chuyển biến khách quan sâu sắc của cả bối cảnh quốc tế lẫn trong nước — đòi hỏi phải thay đổi sách lược để bảo toàn và phát triển lực lượng cách mạng."
        />
      </Reveal>

      {/* ══════════════════════════════════════════════
          1. BỐI CẢNH QUỐC TẾ — 4 nguyên nhân
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="1. Bối cảnh quốc tế — Bốn nguyên nhân then chốt" color={C.red}/>
      </Reveal>

      {/* Editorial numbered rows */}
      <div style={{ marginBottom: 48 }}>
        {S1_INTL_POINTS.map((pt, i) => (
          <Reveal key={i} delay={i * 50}>
            <div 
              className="hover-row"
              style={{
                display: "grid",
                gridTemplateColumns: "72px 1fr",
                borderTop: `1px solid ${C.border}`,
                paddingTop: 24,
                paddingBottom: 24,
                gap: 0,
              }}
            >
              {/* Big decorative number */}
              <div style={{ paddingTop: 2 }}>
                <span 
                  className="decorative-number"
                  style={{
                    fontFamily: C.serif, fontWeight: 900,
                    fontSize: 56, lineHeight: 1,
                    color: i < 2 ? C.red : C.brown,
                    opacity: i < 2 ? 0.18 : 0.14,
                    display: "block",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {i + 1}
                </span>
              </div>

              {/* Content */}
              <div style={{ borderLeft: `2px solid ${i < 2 ? C.red : C.brown}`, paddingLeft: 24 }}>
                <p style={{
                  fontFamily: C.sans, fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: i < 2 ? C.red : C.brown, marginBottom: 8,
                }}>
                  {pt.title}
                </p>
                <p style={{
                  fontFamily: C.body, fontSize: 18, lineHeight: 1.82,
                  color: C.dark, opacity: 0.85,
                }}>
                  {pt.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
        {/* Closing rule */}
        <div style={{ borderTop: `1px solid ${C.border}` }}/>
      </div>

      {/* ── Ảnh 1 — sau bối cảnh quốc tế ── */}
      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 32, marginBottom: 48 }}>
          <ImageSlot label="Hình ảnh — Bối cảnh quốc tế 1935–1936" caption="Đại hội VII Quốc tế Cộng sản, tháng 7/1935" height={230} src={imgS1BoiCanhQuocTe}/>
          <div style={{ borderLeft: `1px dotted ${C.border}` }}/>
          <ImageSlot label="Hình ảnh — Chủ nghĩa phát xít / Chiến tranh" caption="Phe Trục phát xít, nguy cơ chiến tranh thế giới" height={230} src={imgS1PhatXit}/>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════════════
          2. BỐI CẢNH TRONG NƯỚC — dark feature block
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="2. Bối cảnh trong nước" color={C.red}/>
      </Reveal>

      <Reveal>
        <div style={{
          background: C.dark,
          padding: "36px 40px",
          marginBottom: 48,
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Dot pattern */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `radial-gradient(circle, rgba(201,164,92,0.07) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}/>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0, position: "relative", zIndex: 1 }}>
            {/* Left point */}
            <div style={{ paddingRight: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 28, height: 2, background: C.red }}/>
                <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.red }}>
                  {S1_DOM_POINTS[0].title}
                </p>
              </div>
              <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.85, color: "rgba(245,230,200,0.78)" }}>
                {S1_DOM_POINTS[0].body}
              </p>
            </div>

            {/* Dotted divider */}
            <div style={{ borderLeft: `1px dashed rgba(201,164,92,0.2)`, margin: "0 0" }}/>

            {/* Right point */}
            <div style={{ paddingLeft: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 28, height: 2, background: C.accent }}/>
                <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.accent }}>
                  {S1_DOM_POINTS[1].title}
                </p>
              </div>
              <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.85, color: "rgba(245,230,200,0.78)" }}>
                {S1_DOM_POINTS[1].body}
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div style={{ marginBottom: 48 }}>
          <ImageSlot label="Hình ảnh — Đời sống nhân dân Đông Dương" caption="Nông dân, phu cao su trong thời kỳ khủng hoảng kinh tế 1929-1933" height={350} src={imgS1DoiSongNhanDan}/>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════════════
          3. NHỮNG YÊU CẦU MỚI — 2-col with pull quote
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="3. Những yêu cầu mới đặt ra đối với phong trào cách mạng" color={C.red}/>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0 }}>
        {/* Left: 3 requirements as horizontal rows */}
        <div style={{ paddingRight: 36 }}>
          {S1_REQUIREMENTS.map((r, i) => (
            <Reveal key={i} delay={i * 55}>
              <div 
                className="hover-list-item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "52px 1fr",
                  gap: 0,
                  borderBottom: `1px dotted ${C.border}`,
                  paddingBottom: 20,
                  marginBottom: 20,
                }}
              >
                {/* Number badge */}
                <div>
                  <span style={{
                    display: "inline-block",
                    fontFamily: C.sans, fontWeight: 700, fontSize: 11,
                    letterSpacing: "0.1em",
                    color: C.ivory,
                    background: C.red,
                    padding: "3px 7px",
                  }}>
                    {r.num}
                  </span>
                </div>
                {/* Text */}
                <div>
                  <p style={{ fontFamily: C.sans, fontSize: 14, fontWeight: 700, color: C.dark, marginBottom: 6 }}>
                    {r.title}
                  </p>
                  <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.78, color: C.dark, opacity: 0.78 }}>
                    {r.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <DottedRule vertical/>

        {/* Right: ảnh + pull quote + comparison */}
        <div style={{ paddingLeft: 36 }}>
          <Reveal>
            <ImageSlot label="Hình ảnh — Phong trào vận động dân chủ 1936 – 1939 tại Huế" caption="Phong trào vận động dân chủ 1936 – 1939 tại Huế" height={180} src={imgS1PhongTraoCachMang}/>
          </Reveal>

          <DottedRule my={24}/>

          <Reveal>
            <MagazinePullQuote
              text='"Chọn địch nhân chính, nguy hiểm nhất mà đánh cho toàn thắng."'
              attribution='Văn kiện "Chung quanh vấn đề chiến sách mới", 10/1936'
            />
          </Reveal>

          <DottedRule my={24}/>

          <Reveal delay={50}>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Strategic goal row */}
              <div style={{
                display: "grid", gridTemplateColumns: "4px 1fr", gap: 14,
                padding: "14px 0 14px 14px",
                background: `rgba(139,26,26,0.05)`,
                borderLeft: `4px solid ${C.red}`,
              }}>
                <div/>
                <div>
                  <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.red, marginBottom: 5 }}>
                    Mục tiêu chiến lược lâu dài
                  </p>
                  <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.72, color: C.dark, opacity: 0.8 }}>
                    Giải phóng dân tộc, mục tiêu cách mạng xã hội — <em>ổn định, không thay đổi</em>.
                  </p>
                </div>
              </div>

              {/* Immediate task row */}
              <div style={{
                display: "grid", gridTemplateColumns: "4px 1fr", gap: 14,
                padding: "14px 0 14px 14px",
                background: `rgba(139,107,63,0.06)`,
                borderLeft: `4px solid ${C.brown}`,
              }}>
                <div/>
                <div>
                  <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.brown, marginBottom: 5 }}>
                    Nhiệm vụ trước mắt 1936–1939
                  </p>
                  <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.72, color: C.dark, opacity: 0.8 }}>
                    Chống phát xít, chiến tranh, phản động thuộc địa; đòi dân chủ, dân sinh —
                    <em> linh hoạt, điều chỉnh theo tình hình</em>.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

    </section>
  );
}
