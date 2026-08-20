import { C } from "@/tokens";
import {
  S2_DAI_HOI_I,
  S2_HOINGHI_THUONGHAI,
  S2_NHIEM_VU_LIST,
  S2_NHIEM_VU_POINTS,
  S2_LEVELS,
  S2_FRONT_TIMELINE,
  S2_FLOW,
} from "@/data/content";
import { Reveal } from "@/app/components/ui/Reveal";
import { Badge } from "@/app/components/ui/Badge";
import { MagazinePullQuote } from "@/app/components/ui/MagazinePullQuote";
import { DottedRule } from "@/app/components/ui/DottedRule";
import { TimelineEntry } from "@/app/components/ui/TimelineEntry";
import { ArticleHeader } from "@/app/components/ui/ArticleHeader";
import { ImageSlot } from "@/app/components/ui/ImageSlot";
import { imgS2DaiHoi1, imgS2HoiNghiThuongHai, imgS2MatTranDanChu } from "@/assets/images";

// ── colour helper ──────────────────────────────────────────────────────────────
const toneColor = (t: string) =>
  t === "red" ? C.red : t === "brown" ? C.brown : C.accent;

export function Section2() {
  return (
    <section id="nhiem-vu" style={{ paddingBottom: 48 }}>

      {/* ── Article header ─────────────────────────────────────────────── */}
      <Reveal>
        <ArticleHeader
          category="Phần II · Điều chỉnh nhiệm vụ"
          headline="Bằng cách nào?"
          sub="Sự điều chỉnh nhiệm vụ và lực lượng cách mạng"
          period="1935 – 1938"
          intro="Từ Cương lĩnh 1930 đến Hội nghị Thượng Hải 1936, Đảng từng bước nhận thức lại mối quan hệ giữa nhiệm vụ phản đế và điền địa — điều chỉnh đồng bộ trọng tâm nhiệm vụ, phạm vi lực lượng và phương thức tập hợp quần chúng."
        />
      </Reveal>

      {/* ══════════════════════════════════════════════
          2.1 — Nhiệm vụ trước năm 1936
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="2.1 — Nhiệm vụ cách mạng trước năm 1936 và yêu cầu điều chỉnh" color={C.red}/>
      </Reveal>

      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0, marginBottom: 40 }}>
          {/* Left: context text */}
          <div style={{ paddingRight: 32 }}>
            <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.85, color: C.dark, opacity: 0.82, marginBottom: 20 }}>
              Từ <em style={{ fontWeight: 600 }}>Cương lĩnh chính trị đầu tiên (10/1930)</em>, Đảng xác định
              cách mạng Việt Nam là cuộc cách mạng tư sản dân quyền có tính chất thổ địa và phản đế,
              hướng tới phát triển thẳng lên chủ nghĩa xã hội. Tuy nhiên, trong những năm đầu 1930,
              mối quan hệ giữa nhiệm vụ phản đế và điền địa có lúc được nhìn nhận một cách cứng nhắc.
            </p>
            {/* Limitation quote */}
            <div style={{ padding: "14px 18px", background: `rgba(139,26,26,0.06)`, borderLeft: `3px solid ${C.red}` }}>
              <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.red, marginBottom: 6 }}>
                Hạn chế cần khắc phục
              </p>
              <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.78, color: C.dark, opacity: 0.82 }}>
                {S2_DAI_HOI_I.limitation}
              </p>
            </div>
            
            <div style={{ marginTop: 32 }}>
              <ImageSlot label="Hình ảnh — Đại hội I (1935)" caption="Đại biểu tham dự Đại hội Đảng lần thứ I tại Ma Cao" height={240} objectFit="contain" src={imgS2DaiHoi1} />
            </div>
          </div>

          <div style={{ borderLeft: `1px dotted ${C.border}` }}/>

          {/* Right: Đại hội I card */}
          <div style={{ paddingLeft: 32 }}>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
              <span style={{ fontFamily: C.serif, fontWeight: 900, fontSize: 32, color: C.brown, opacity: 0.3, lineHeight: 1 }}>I</span>
              <div>
                <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.brown, marginBottom: 2 }}>
                  Đại hội đại biểu lần thứ nhất
                </p>
                <p style={{ fontFamily: C.sans, fontSize: 11, color: C.muted }}>
                  {S2_DAI_HOI_I.date} · {S2_DAI_HOI_I.location}
                </p>
              </div>
            </div>
            <p style={{ fontFamily: C.sans, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.dark, marginBottom: 10, opacity: 0.5 }}>
              Ba nhiệm vụ trước mắt
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {S2_DAI_HOI_I.tasks.map((t, i) => (
                <div key={i} style={{
                  display: "flex", gap: 14,
                  padding: "12px 0",
                  borderBottom: `1px dotted ${C.border}`,
                }}>
                  <span style={{ fontFamily: C.serif, fontWeight: 700, fontSize: 20, color: C.accent, opacity: 0.35, lineHeight: 1, flexShrink: 0 }}>
                    {i + 1}
                  </span>
                  <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.72, color: C.dark, opacity: 0.82 }}>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════════════
          2.2 — Hội nghị Thượng Hải — pivot event
      ══════════════════════════════════════════════ */}
      <Reveal>
        <div style={{
          background: C.dark,
          borderLeft: `4px solid ${C.accent}`,
          marginBottom: 40,
          display: "grid",
          gridTemplateColumns: "160px 1fr",
          overflow: "hidden",
          position: "relative",
        }}>
          {/* Dot pattern */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: `radial-gradient(circle, rgba(201,164,92,0.06) 1px, transparent 1px)`, backgroundSize: "24px 24px" }}/>
          {/* Date block */}
          <div style={{ background: "rgba(0,0,0,0.25)", padding: "28px 24px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 1 }}>
            <p style={{ fontFamily: C.serif, fontWeight: 900, fontSize: 42, color: C.accent, lineHeight: 1, marginBottom: 4 }}>
              {S2_HOINGHI_THUONGHAI.date}
            </p>
            <p style={{ fontFamily: C.sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,164,92,0.45)" }}>
              {S2_HOINGHI_THUONGHAI.location}
            </p>
          </div>
          {/* Info block */}
          <div style={{ padding: "28px 28px", position: "relative", zIndex: 1 }}>
            <p style={{ fontFamily: C.sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,164,92,0.45)", marginBottom: 10 }}>
              Hội nghị Ban Chấp hành Trung ương Đảng
            </p>
            <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.78, color: "rgba(245,230,200,0.85)", marginBottom: 10 }}>
              Chủ trì: <em style={{ color: C.accent, fontWeight: 600 }}>{S2_HOINGHI_THUONGHAI.chair}</em>.
              {" "}Tham dự: {S2_HOINGHI_THUONGHAI.participants}.
            </p>
            <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.7, color: "rgba(245,230,200,0.55)" }}>
              {S2_HOINGHI_THUONGHAI.significance}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "6.5fr 3.5fr", gap: 32, marginBottom: 40 }}>
          <ImageSlot label="Hình ảnh — Hội nghị Thượng Hải 7/1936" caption="Tổng Bí thư Lê Hồng Phong chủ trì hội nghị" height={330} dark={false} src={imgS2HoiNghiThuongHai}/>
          <div style={{ paddingLeft: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 10 }}>
            <p style={{ fontFamily: C.sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.brown }}>
              Bước ngoặt lịch sử
            </p>
            <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.82, color: C.dark, opacity: 0.8 }}>
              Hội nghị Thượng Hải (26/7/1936) đánh dấu bước chuyển căn bản trong tư duy lãnh đạo —
              phân biệt rõ nhiệm vụ trước mắt và mục tiêu chiến lược lâu dài, mở ra thời kỳ đấu tranh
              công khai, hợp pháp.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════════════
          2.2 — Điều chỉnh nhiệm vụ trước mắt
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="2.2 — Điều chỉnh nhiệm vụ trước mắt trong giai đoạn 1936–1939" color={C.red}/>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0, marginBottom: 40 }}>
        {/* Left: 4 immediate tasks */}
        <div style={{ paddingRight: 32 }}>
          <p style={{ fontFamily: C.sans, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.dark, opacity: 0.45, marginBottom: 14 }}>
            Bốn nhiệm vụ trước mắt được xác định
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {S2_NHIEM_VU_LIST.map((task, i) => (
              <Reveal key={i} delay={i * 45}>
                <div 
                  className="hover-list-item"
                  style={{
                    display: "flex", alignItems: "center", gap: 16,
                    padding: "14px 16px",
                    background: i % 2 === 0 ? `rgba(139,26,26,0.07)` : C.bg2,
                    borderLeft: `3px solid ${i < 2 ? C.red : C.brown}`,
                  }}
                >
                  <span style={{ fontFamily: C.serif, fontWeight: 900, fontSize: 24, color: i < 2 ? C.red : C.brown, opacity: 0.25, lineHeight: 1, flexShrink: 0 }}>
                    {i + 1}
                  </span>
                  <p style={{ fontFamily: C.body, fontSize: 18, fontWeight: 600, color: C.dark, lineHeight: 1.4 }}>
                    {task}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div style={{ borderLeft: `1px dotted ${C.border}` }}/>

        {/* Right: 3 recognition points */}
        <div style={{ paddingLeft: 32 }}>
          <p style={{ fontFamily: C.sans, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.dark, opacity: 0.45, marginBottom: 14 }}>
            Quá trình nhận thức và điều chỉnh
          </p>
          {S2_NHIEM_VU_POINTS.map((pt, i) => (
            <Reveal key={i} delay={i * 55}>
              <div 
                className="hover-list-item"
                style={{
                  display: "flex", gap: 14,
                  padding: "16px 0",
                  borderBottom: `1px dotted ${C.border}`,
                }}
              >
                <span style={{
                  fontFamily: C.sans, fontWeight: 700, fontSize: 11,
                  letterSpacing: "0.1em",
                  color: C.ivory, background: C.red,
                  padding: "3px 7px", flexShrink: 0,
                  alignSelf: "flex-start", marginTop: 2,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p style={{ fontFamily: C.sans, fontSize: 14, fontWeight: 700, color: C.dark, marginBottom: 5 }}>
                    {pt.title}
                  </p>
                  <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.78, color: C.dark, opacity: 0.78 }}>
                    {pt.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          2.3 — Nhận thức lại phản đế vs điền địa
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="2.3 — Nhận thức lại mối quan hệ giữa nhiệm vụ phản đế và điền địa" color={C.red}/>
      </Reveal>

      <Reveal>
        <MagazinePullQuote
          text='"Nếu phát triển cuộc tranh đấu chia đất mà ngăn trở cuộc đấu tranh phản đế thì phải lựa chọn vấn đề nào quan trọng hơn mà giải quyết trước."'
          attribution='Văn kiện "Chung quanh vấn đề chiến sách mới", 10/1936'
        />
      </Reveal>

      <Reveal delay={40}>
        <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.85, color: C.dark, opacity: 0.8, marginBottom: 40 }}>
          Đây là biểu hiện của <em style={{ fontWeight: 600 }}>sự thích ứng chiến lược</em>: không phải nhiệm vụ phản đế
          và điền địa bị phủ nhận, mà <em style={{ fontWeight: 600 }}>thứ tự ưu tiên được xem xét lại</em> theo hoàn cảnh
          — khắc phục cách nhìn máy móc trước đó của Đại hội I.
        </p>
      </Reveal>

      <DottedRule my={36}/>

      {/* ══════════════════════════════════════════════
          2.4 & 2.5 — Mở rộng lực lượng + Mặt trận
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="2.4 & 2.5 — Từ điều chỉnh nhiệm vụ đến mở rộng lực lượng và xây dựng mặt trận" color={C.red}/>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0, marginBottom: 40 }}>
        {/* Left — 3 levels */}
        <div style={{ paddingRight: 32 }}>
          <h3 
            className="hover-glow-title"
            style={{ fontFamily: C.serif, fontSize: 21, fontWeight: 700, color: C.dark, marginBottom: 20 }}
          >
            Ba cấp độ mở rộng lực lượng
          </h3>
          {S2_LEVELS.map((level, i) => (
            <Reveal key={i} delay={i * 60}>
              <div 
                className="hover-list-item"
                style={{ display: "flex", gap: 14, marginBottom: 22 }}
              >
                <span style={{
                  fontFamily: C.sans, fontWeight: 700, fontSize: 11,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: C.ivory, background: C.red,
                  padding: "3px 8px", flexShrink: 0, alignSelf: "flex-start",
                  marginTop: 2,
                }}>
                  Cấp {i + 1}
                </span>
                <div>
                  <p style={{ fontFamily: C.sans, fontSize: 14, fontWeight: 700, color: C.dark, marginBottom: 5 }}>
                    {level.title}
                  </p>
                  <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.78, color: C.dark, opacity: 0.78 }}>
                    {level.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={80}>
            <div style={{ padding: "14px 18px", background: C.bg2, borderLeft: `4px solid ${C.brown}` }}>
              <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.78, color: C.dark, opacity: 0.82, fontStyle: "italic" }}>
                "Nhiệm vụ càng cần sự đồng thuận rộng rãi → lực lượng cần tập hợp càng phải rộng."
              </p>
            </div>
          </Reveal>
        </div>

        <div style={{ borderLeft: `1px dotted ${C.border}` }}/>

        {/* Right — Front timeline */}
        <div style={{ paddingLeft: 32 }}>
          <Reveal>
            <ImageSlot label="Hình ảnh — Cuộc mít tinh khổng lồ của 2.5 vạn người tại khu Đấu Xảo - Hà Nội" caption="Cuộc mít tinh khổng lồ của 2.5 vạn người tại khu Đấu Xảo - Hà Nội" height={180} src={imgS2MatTranDanChu}/>
          </Reveal>
          <div style={{ marginBottom: 20 }}/>
          <h3 
            className="hover-glow-title"
            style={{ fontFamily: C.serif, fontSize: 21, fontWeight: 700, color: C.dark, marginBottom: 4 }}
          >
            Quá trình phát triển Mặt trận (2.5)
          </h3>
          <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.72, color: C.dark, opacity: 0.65, marginBottom: 20 }}>
            Chủ trương xây dựng mặt trận liên tục được bổ sung và phát triển — không phải một quyết định cố định.
          </p>
          {S2_FRONT_TIMELINE.map((m, i) => (
            <Reveal key={i} delay={i * 60}>
              <TimelineEntry date={m.date} title={m.title} body={m.body}/>
            </Reveal>
          ))}
        </div>
      </div>

      <DottedRule my={36}/>

      {/* ══════════════════════════════════════════════
          2.6 — Bối cảnh → Nhiệm vụ → Lực lượng → Mặt trận
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="2.6 — Mối quan hệ: Bối cảnh → Nhiệm vụ → Lực lượng → Mặt trận" color={C.red}/>
      </Reveal>

      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginBottom: 40 }}>
          {S2_FLOW.map((step, i) => (
            <div key={i} style={{ position: "relative" }}>
              {/* Card */}
              <div 
                className="hover-card"
                style={{
                  padding: "20px 18px",
                  background: i % 2 === 0 ? C.bg2 : C.ivory,
                  borderTop: `3px solid ${toneColor(step.tone)}`,
                  height: "100%",
                }}
              >
                <p style={{
                  fontFamily: C.sans, fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.13em", textTransform: "uppercase",
                  color: toneColor(step.tone), marginBottom: 10,
                }}>
                  {step.label}
                </p>
                <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.75, color: C.dark, opacity: 0.8 }}>
                  {step.desc}
                </p>
              </div>
              {/* Arrow between steps */}
              {i < 3 && (
                <div style={{
                  position: "absolute", right: -10, top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2, width: 20, textAlign: "center",
                }}>
                  <span style={{ fontFamily: C.serif, fontSize: 17, color: C.accent, opacity: 0.5 }}>›</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <DottedRule my={36}/>

      {/* ══════════════════════════════════════════════
          2.7 — Phân biệt mục tiêu chiến lược vs nhiệm vụ trước mắt
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="2.7 — Điều chỉnh nhiệm vụ trước mắt không đồng nghĩa với thay đổi mục tiêu chiến lược" color={C.red}/>
      </Reveal>

      {/* Table header */}
      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", gap: 0, marginBottom: 3 }}>
          <div style={{ padding: "10px 14px", background: C.dark }}/>
          <div style={{ padding: "10px 18px", background: C.dark, borderLeft: `1px solid rgba(201,164,92,0.1)` }}>
            <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(201,164,92,0.6)" }}>
              Mục tiêu chiến lược lâu dài
            </p>
          </div>
          <div style={{ padding: "10px 18px", background: C.dark, borderLeft: `1px solid rgba(201,164,92,0.1)` }}>
            <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.red, opacity: 0.8 }}>
              Nhiệm vụ trước mắt 1936–1939
            </p>
          </div>
        </div>
      </Reveal>

      {[
        { label: "Phạm vi",    left: "Định hướng cho tiến trình cách mạng lâu dài",              right: "Gắn với điều kiện lịch sử cụ thể của giai đoạn" },
        { label: "Trọng tâm",  left: "Giải phóng dân tộc và mục tiêu cách mạng xã hội",          right: "Chống phát xít, phản động thuộc địa; đòi dân chủ, dân sinh" },
        { label: "Tính chất",  left: "Có tính định hướng chiến lược, ổn định",                   right: "Linh hoạt, điều chỉnh theo tình hình thực tế" },
        { label: "Vai trò",    left: "Xác định hướng đi lâu dài cho toàn bộ tiến trình",         right: "Tập hợp lực lượng, tích lũy kinh nghiệm cho mục tiêu lâu dài" },
      ].map((row, i) => (
        <Reveal key={i} delay={i * 40}>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", gap: 0, marginBottom: 2 }}>
            <div style={{ padding: "14px 14px", background: C.bg2, display: "flex", alignItems: "center" }}>
              <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted }}>
                {row.label}
              </p>
            </div>
            <div style={{ padding: "14px 18px", background: C.ivory, borderLeft: `2px solid ${C.border}` }}>
              <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.7, color: C.dark, opacity: 0.8 }}>{row.left}</p>
            </div>
            <div style={{ padding: "14px 18px", background: i % 2 === 0 ? `rgba(139,26,26,0.05)` : C.bg2, borderLeft: `2px solid ${C.red}`, borderLeftWidth: "2px" }}>
              <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.7, color: C.dark, opacity: 0.85 }}>{row.right}</p>
            </div>
          </div>
        </Reveal>
      ))}

      <DottedRule my={36}/>

      {/* ══════════════════════════════════════════════
          2.8 — Đánh giá và kết luận
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="2.8 — Đánh giá sự điều chỉnh về nhiệm vụ và lực lượng" color={C.red}/>
      </Reveal>

      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0 }}>
          <div style={{ paddingRight: 32 }}>
            <p style={{ fontFamily: C.body, fontSize: 18, lineHeight: 1.88, color: C.dark, opacity: 0.85 }}>
              Sự điều chỉnh nhiệm vụ và lực lượng trong phong trào 1936–1939 thể hiện
              <em style={{ fontWeight: 600 }}> khả năng thích ứng tuyệt vời của Đảng</em>. Trước những biến chuyển
              lịch sử, Đảng từng bước điều chỉnh trọng tâm nhiệm vụ, linh hoạt tạm gác vấn đề ruộng đất
              để tập trung vào kẻ thù nguy hiểm nhất. Từ đó, phạm vi tập hợp lực lượng được mở rộng thông
              qua Mặt trận Dân chủ Đông Dương.
            </p>
          </div>
          <div style={{ borderLeft: `1px dotted ${C.border}` }}/>
          <div style={{ paddingLeft: 32 }}>
            <div style={{ padding: "22px 24px", background: C.dark, borderLeft: `4px solid ${C.accent}` }}>
              <p style={{ fontFamily: C.sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(201,164,92,0.45)", marginBottom: 12 }}>
                Kết luận Phần II
              </p>
              <p style={{ fontFamily: C.serif, fontSize: 20, fontStyle: "italic", color: C.bg, lineHeight: 1.6 }}>
                "Đảng linh hoạt trong việc xác định nhiệm vụ trước mắt và phương thức tập hợp lực lượng,
                nhưng hoàn toàn không từ bỏ mục tiêu chiến lược lâu dài của cách mạng."
              </p>
            </div>
          </div>
        </div>
      </Reveal>

    </section>
  );
}
