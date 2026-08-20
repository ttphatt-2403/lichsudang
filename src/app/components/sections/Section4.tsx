import { C } from "@/tokens";
import { S4_LESSONS, S4_CONCLUSION, S4_LOGIC_CHAIN, S4_REFERENCES } from "@/data/content";
import { ImageSlot } from "@/app/components/ui/ImageSlot";
import { Reveal } from "@/app/components/ui/Reveal";
import { Badge } from "@/app/components/ui/Badge";
import { MagazinePullQuote } from "@/app/components/ui/MagazinePullQuote";
import { DottedRule } from "@/app/components/ui/DottedRule";
import { LessonRow } from "@/app/components/ui/LessonRow";
import { ArticleHeader } from "@/app/components/ui/ArticleHeader";
import { imgS4PhongTraoDanChu, imgS4ChienTranh, imgS4RenLuyenCanbo } from "@/assets/images";

const PERIODS = [
  {
    year: "1936",
    bg: C.red,
    context: "Xuất hiện điều kiện chính trị mới thuận lợi hơn.",
    nhiem_vu: "Điều chỉnh theo yêu cầu dân chủ, dân sinh, hòa bình.",
    luc_luong: "Mở rộng đối tượng tập hợp vào Mặt trận.",
    phuong_thuc: "Tận dụng không gian chính trị mới mở ra.",
    tinh_chat: "Điều chỉnh",
    logic: "Điều kiện chính trị thay đổi → Xác định lại nhiệm vụ trước mắt → Mở rộng lực lượng → Tạo không gian mới cho phong trào",
    note: "Hội nghị Trung ương 26/7/1936 là bước ngoặt — phân biệt rõ mục tiêu chiến lược và nhiệm vụ trước mắt, không từ bỏ mục tiêu cách mạng.",
  },
  {
    year: "1937–1938",
    bg: C.brown,
    context: "Không gian đấu tranh được khai thác, phong trào phát triển.",
    nhiem_vu: "Tiếp tục triển khai và củng cố nhiệm vụ đã xác định.",
    luc_luong: "Củng cố và phát triển Mặt trận Dân chủ Đông Dương.",
    phuong_thuc: "Mở rộng quy mô hoạt động công khai, hợp pháp.",
    tinh_chat: "Triển khai · Kiểm nghiệm · Củng cố",
    logic: "Điều chỉnh năm 1936 → Phong trào phát triển → Xuất hiện yêu cầu mới → Tiếp tục điều chỉnh → Phong trào được củng cố",
    note: "Phong trào Đông Dương Đại hội (1937) là ví dụ tiêu biểu biến yêu cầu dân sinh thành phong trào quần chúng rộng lớn.",
  },
  {
    year: "1939",
    bg: C.dark,
    context: "9/1939, Chiến tranh bùng nổ. Thực dân Pháp đàn áp, cuộc vận động dân chủ kết thúc.",
    nhiem_vu: "Thay đổi trọng tâm — hướng đến vấn đề giải phóng dân tộc.",
    luc_luong: "Điều chỉnh tổ chức theo yêu cầu hoàn toàn mới.",
    phuong_thuc: "Đảng rút vào hoạt động bí mật.",
    tinh_chat: "Chuyển hướng",
    logic: "Chiến tranh bùng nổ → Không gian chính trị bị thu hẹp → Đảng chuyển hướng kịp thời → Bảo toàn lực lượng cho giai đoạn mới",
    note: "Hội nghị Trung ương tháng 11/1939 đánh dấu bước chuyển hướng chiến lược — Đảng không tuyệt đối hóa phương thức từng đem lại hiệu quả.",
  },
];

const S4_RESULTS = [
  {
    label: "Đối với phong trào",
    color: C.red,
    points: [
      "Mở rộng quy mô, thu hút đông đảo các tầng lớp xã hội tham gia.",
      "Quần chúng được tập hợp, tổ chức và rèn luyện thông qua thực tiễn đấu tranh.",
    ],
  },
  {
    label: "Đối với Đảng",
    color: C.brown,
    points: [
      "Tích lũy kinh nghiệm quý báu về xây dựng mặt trận, tổ chức lực lượng.",
      "Rèn luyện khả năng lãnh đạo phong trào công khai quy mô lớn.",
    ],
  },
  {
    label: "Ý nghĩa chiến lược",
    color: C.accent,
    points: [
      "Cuộc diễn tập lần thứ hai, chuẩn bị nền tảng lực lượng và kinh nghiệm.",
      "Tạo cơ sở xã hội vững chắc cho cuộc vận động giải phóng dân tộc 1939–1945.",
    ],
  },
];

export function Section4() {
  return (
    <section id="ket-qua" style={{ paddingBottom: 48 }}>
      <Reveal>
        <ArticleHeader
          category="Phần IV · Quá trình thích ứng"
          headline="Kết quả"
          sub="Và bài học kinh nghiệm"
          period="1936 – 1939"
          intro="Sự thay đổi đồng bộ giữa nhiệm vụ, lực lượng và phương thức đấu tranh qua ba chặng đường 1936 → 1937–1938 → 1939 thể hiện khả năng ứng biến và thích ứng xuất sắc của Đảng trước những biến động lịch sử."
        />
      </Reveal>

      {/* 3-period process cards */}
      <Reveal>
        <Badge label="1. Quá trình thích ứng qua ba giai đoạn" color={C.red}/>
      </Reveal>

      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, marginBottom: 40, border: `1px solid ${C.border}` }}>
          {PERIODS.map((p, i) => (
            <div key={i} style={{ borderRight: i < 2 ? `1px solid ${C.border}` : "none", display: "flex", flexDirection: "column" }}>
              {/* Header */}
              <div style={{ background: p.bg, padding: "14px 18px" }}>
                <p style={{ fontFamily: C.serif, fontWeight: 900, fontSize: 28, color: C.accent, lineHeight: 1, marginBottom: 4 }}>
                  {p.year}
                </p>
                <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(201,164,92,0.6)" }}>
                  {p.tinh_chat}
                </p>
              </div>
              {/* Rows */}
              <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                {[
                  { label: "Bối cảnh", val: p.context },
                  { label: "Nhiệm vụ", val: p.nhiem_vu },
                  { label: "Lực lượng", val: p.luc_luong },
                  { label: "Phương thức", val: p.phuong_thuc },
                ].map((row, j) => (
                  <div key={j}>
                    <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.muted, marginBottom: 4 }}>{row.label}</p>
                    <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.7, color: C.dark, opacity: 0.82 }}>{row.val}</p>
                  </div>
                ))}
              </div>
              {/* Logic chain */}
              <div style={{ padding: "12px 18px 14px", background: C.bg2, borderTop: `1px dotted ${C.border}` }}>
                <p style={{ fontFamily: C.sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.muted, marginBottom: 6 }}>
                  Logic thích ứng
                </p>
                <p style={{ fontFamily: C.body, fontSize: 14, lineHeight: 1.65, color: C.dark, opacity: 0.65, fontStyle: "italic" }}>
                  {p.logic}
                </p>
              </div>
              {/* Note */}
              <div style={{ padding: "10px 18px 14px", borderTop: `1px solid ${C.border}` }}>
                <p style={{ fontFamily: C.body, fontSize: 14, lineHeight: 1.65, color: C.dark, opacity: 0.58 }}>
                  {p.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ── Ảnh 5 — sau bảng 3 giai đoạn ── */}
      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 32, marginBottom: 40 }}>
          <ImageSlot label="Hình ảnh — Quần chúng đấu tranh 1936 - 1939" caption="Quần chúng đấu tranh 1936 - 1939" height={210} src={imgS4PhongTraoDanChu}/>
          <ImageSlot label="Hình ảnh — Đức tấn công Ba Lan 1939" caption="Đức tấn công Ba Lan 1939" height={210} src={imgS4ChienTranh}/>
        </div>
      </Reveal>

      <DottedRule my={36}/>

      {/* Kết quả của quá trình thích ứng */}
      <Reveal>
        <Badge label="2. Kết quả của quá trình thích ứng" color={C.red}/>
      </Reveal>

      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, marginBottom: 16, border: `1px solid ${C.border}` }}>
          {S4_RESULTS.map((r, i) => (
            <div key={i} className="hover-card" style={{
              borderRight: i < 2 ? `1px solid ${C.border}` : "none",
              borderTop: `4px solid ${r.color}`,
              padding: "20px 20px",
            }}>
              <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: r.color, marginBottom: 12 }}>
                {r.label}
              </p>
              <ul style={{ paddingLeft: 16, margin: 0 }}>
                {r.points.map((pt, j) => (
                  <li key={j} style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.75, color: C.dark, opacity: 0.82, marginBottom: j < r.points.length - 1 ? 8 : 0 }}>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={50}>
        <div style={{ padding: "16px 22px", background: `rgba(201,164,92,0.08)`, borderLeft: `4px solid ${C.accent}`, marginBottom: 40 }}>
          <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.brown, marginBottom: 8 }}>
            Ý nghĩa tổng hợp
          </p>
          <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.82, color: C.dark, opacity: 0.85 }}>
            Phong trào 1936–1939 là <em style={{ fontWeight: 600 }}>cuộc diễn tập lần thứ hai</em> của cách mạng Việt Nam — sau Xô viết Nghệ Tĩnh 1930–1931.
            Nó chuẩn bị nền tảng về lực lượng, tổ chức và kinh nghiệm lãnh đạo cho cuộc vận động giải phóng dân tộc ở giai đoạn tiếp theo 1939–1945.
          </p>
        </div>
      </Reveal>

      <DottedRule my={36}/>

      {/* Bài học kinh nghiệm */}
      <Reveal>
        <Badge label="3. Hạn chế và bài học kinh nghiệm" color={C.red}/>
      </Reveal>

      <Reveal>
        <div style={{ padding: "14px 20px", background: C.bg2, borderLeft: `3px solid ${C.border}`, marginBottom: 24 }}>
          <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.muted, marginBottom: 6 }}>
            Hạn chế cần ghi nhận
          </p>
          <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.75, color: C.dark, opacity: 0.72 }}>
            Việc mở rộng hoạt động công khai đôi lúc tạo ra nguy cơ lệch khỏi yêu cầu củng cố tổ chức bí mật;
            năng lực lãnh đạo giữa các địa bàn chưa đồng đều.
          </p>
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0, marginBottom: 40 }}>
        <div style={{ paddingRight: 32 }}>
          <Reveal>
            <h3 
              className="hover-glow-title"
              style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 700, color: C.dark, marginBottom: 4 }}
            >
              Bốn bài học chiến lược
            </h3>
          </Reveal>
          {S4_LESSONS.map((l, i) => (
            <Reveal key={i} delay={i * 50}>
              <LessonRow num={l.num} title={l.title} desc={l.desc}/>
            </Reveal>
          ))}
        </div>

        <DottedRule vertical/>

        <div style={{ paddingLeft: 32 }}>
          <Reveal>
            <ImageSlot label="Hình ảnh — Đội ngũ cán bộ và cơ quan báo chí công khai" caption="Đội ngũ cán bộ và cơ quan báo chí công khai của Mặt trận Dân chủ Đông Dương (1936 - 1939)" height={230} src={imgS4RenLuyenCanbo}/>
          </Reveal>
          
          <DottedRule my={32}/>

          <Reveal>
            <MagazinePullQuote
              text="Không có hình thức đấu tranh nào là vĩnh cửu — phẩm chất của Đảng là khả năng nhận diện thời cơ và chuyển hướng kịp thời khi điều kiện lịch sử thay đổi."
            />
          </Reveal>
          <Reveal delay={60}>
            <div style={{ padding: "18px 20px", background: C.bg2, borderLeft: `4px solid ${C.accent}`, marginTop: 24 }}>
              <p style={{ fontFamily: C.sans, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.brown, marginBottom: 10 }}>
                Phong trào dân chủ 1936–1939 — Di sản
              </p>
              <ul style={{ paddingLeft: 18, margin: 0 }}>
                {[
                  "Tập hợp được lực lượng rộng rãi, nâng cao giác ngộ chính trị của nhân dân.",
                  "Đảng tích lũy kinh nghiệm lãnh đạo phong trào quần chúng quy mô lớn.",
                  "Xây dựng đội ngũ cán bộ qua thực tiễn đấu tranh đa dạng.",
                  "Tạo cơ sở xã hội vững chắc cho giai đoạn chuyển hướng tiếp theo.",
                ].map((pt, i) => (
                  <li 
                    key={i} 
                    className="hover-list-item"
                    style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.78, color: C.dark, opacity: 0.8, marginBottom: 8 }}
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <DottedRule my={36}/>

      {/* ══════════════════════════════════════════════
          Kết luận — Section V
      ══════════════════════════════════════════════ */}
      <div id="ket-luan">
        <Reveal>
          <Badge label="V. Kết luận — Kết quả, ý nghĩa và bản chất của sự thích ứng" color={C.dark}/>
        </Reveal>

        <Reveal>
          <p style={{ fontFamily: C.body, fontSize: 18, lineHeight: 1.88, color: C.dark, opacity: 0.82, marginBottom: 32 }}>
            Quá trình điều chỉnh đường lối của Đảng trong giai đoạn 1936–1939 không chỉ tạo ra một cao trào dân chủ
            rầm rộ mà còn để lại những giá trị lý luận và thực tiễn sâu sắc. Chúng ta có thể đúc kết toàn bộ
            tiến trình này qua bốn câu hỏi trọng tâm:
          </p>
        </Reveal>

        {/* 4 Q&A cards */}
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, marginBottom: 36 }}>
            {S4_CONCLUSION.map((item, i) => {
              const colors = [C.red, C.brown, C.red, C.dark];
              const bgs = [
                "rgba(139,26,26,0.05)",
                "rgba(139,107,63,0.06)",
                "rgba(139,26,26,0.05)",
                `rgba(30,20,10,0.06)`,
              ];
              return (
                <div 
                  key={i} 
                  className="hover-card"
                  style={{ padding: "22px 24px", background: bgs[i], borderTop: `3px solid ${colors[i]}` }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <span style={{ fontFamily: C.sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: colors[i], background: bgs[i], border: `1px solid ${colors[i]}`, padding: "2px 7px", opacity: 0.8, flexShrink: 0 }}>
                      {item.icon}
                    </span>
                    <p style={{ fontFamily: C.sans, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors[i] }}>
                      {item.q}
                    </p>
                  </div>
                  <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.82, color: C.dark, opacity: 0.85 }}>
                    {item.a}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Logic chain */}
        <Reveal>
          <div style={{ marginBottom: 36 }}>
            <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.muted, marginBottom: 14 }}>
              Chuỗi logic biện chứng — Toàn giai đoạn 1936–1939
            </p>
            <div style={{ display: "flex", alignItems: "stretch", gap: 0, border: `1px solid ${C.border}` }}>
              {S4_LOGIC_CHAIN.map((item, i) => (
                <div key={i} style={{ flex: 1, display: "flex", alignItems: "center", position: "relative" }}>
                  <div style={{
                    flex: 1, padding: "14px 12px",
                    background: i % 2 === 0 ? C.bg2 : C.ivory,
                    borderRight: i < 4 ? `1px solid ${C.border}` : "none",
                    textAlign: "center",
                  }}>
                    <span style={{
                      display: "block",
                      fontFamily: C.serif, fontWeight: 900, fontSize: 24,
                      color: item.color, opacity: 0.35, lineHeight: 1, marginBottom: 4,
                    }}>{i + 1}</span>
                    <p style={{ fontFamily: C.body, fontSize: 15, fontWeight: 600, lineHeight: 1.55, color: C.dark, opacity: 0.95 }}>
                      {item.step}
                    </p>
                  </div>
                  {i < 4 && (
                    <span style={{
                      position: "absolute", right: -9, top: "50%", transform: "translateY(-50%)",
                      fontFamily: C.serif, fontSize: 17, color: C.accent, opacity: 0.5, zIndex: 2,
                    }}>›</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Key quote */}
        <Reveal delay={40}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0, marginBottom: 36 }}>
            <div style={{ paddingRight: 32 }}>
              <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.brown, marginBottom: 10 }}>
                Kim chỉ nam chiến lược
              </p>
              <blockquote style={{
                margin: 0, padding: "16px 20px",
                background: `rgba(139,107,63,0.06)`,
                borderLeft: `4px solid ${C.brown}`,
              }}>
                <p style={{ fontFamily: C.serif, fontSize: 20, fontStyle: "italic", lineHeight: 1.7, color: C.dark, opacity: 0.88 }}>
                  "Cần chọn địch nhân chính, nguy hiểm nhất mà đánh cho toàn thắng."
                </p>
                <p style={{ fontFamily: C.sans, fontSize: 11, color: C.muted, marginTop: 10, letterSpacing: "0.1em" }}>
                  — Chung quanh vấn đề chiến sách mới · 10/1936
                </p>
              </blockquote>
            </div>

            <div style={{ borderLeft: `1px dotted ${C.border}` }}/>

            <div style={{ paddingLeft: 32 }}>
              <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.red, marginBottom: 10 }}>
                Ý nghĩa lịch sử
              </p>
              <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.82, color: C.dark, opacity: 0.82 }}>
                Khả năng thích ứng nhạy bén này đã giúp Đảng bảo toàn và phát triển lực lượng cách mạng to lớn,
                giáo dục chính trị cho hàng triệu quần chúng. Đây chính là{" "}
                <em style={{ fontWeight: 600, fontStyle: "normal" }}>cuộc diễn tập lịch sử vô giá</em>,
                chuẩn bị nền tảng vững chắc để Đảng bước vào Phong trào giải phóng dân tộc 1939–1945.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Dark final quote */}
        <Reveal delay={80}>
          <div style={{ padding: "28px 32px", background: C.dark, borderLeft: `4px solid ${C.accent}`, marginBottom: 60 }}>
            <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,164,92,0.5)", marginBottom: 14 }}>
              Nguyên tắc cốt lõi · Kết luận toàn phần
            </p>
            <p style={{ fontFamily: C.serif, fontSize: "clamp(19px,2.4vw,26px)", fontStyle: "italic", color: C.bg, lineHeight: 1.6 }}>
              "Điều chỉnh sách lược để phù hợp với hoàn cảnh lịch sử — nhưng tuyệt đối không đồng nhất với việc
              từ bỏ mục tiêu chiến lược lâu dài của cách mạng Việt Nam."
            </p>
          </div>
        </Reveal>

        {/* ══════════════════════════════════════════════
            Section VI — Tài liệu tham khảo
        ══════════════════════════════════════════════ */}
        <Reveal>
          <Badge label="VI. Tài liệu tham khảo" color={C.dark}/>
        </Reveal>

        <Reveal>
          <p style={{ fontFamily: C.sans, fontSize: 11, color: C.muted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>
            Trình bày theo chuẩn APA 7th Edition
          </p>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 48 }}>
          {S4_REFERENCES.map((ref, i) => (
            <Reveal key={i} delay={i * 40}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                borderTop: `1px solid ${C.border}`,
                paddingTop: 18, paddingBottom: 18,
              }}>
                <span style={{ fontFamily: C.serif, fontWeight: 900, fontSize: 36, color: C.accent, opacity: 0.15, lineHeight: 1, paddingTop: 4 }}>
                  {i + 1}
                </span>
                <div>
                  <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.78, color: C.dark, opacity: 0.85 }}>
                    <span style={{ fontWeight: 600 }}>{ref.author}</span>{" "}
                    ({ref.year}).{" "}
                    <em>{ref.title}</em>.{" "}
                    <span style={{ color: C.muted }}>{ref.source}.</span>
                  </p>
                  {ref.url && (
                    <p style={{ fontFamily: C.sans, fontSize: 12, color: C.brown, marginTop: 4, wordBreak: "break-all", opacity: 0.75 }}>
                      {ref.url}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
          <div style={{ borderTop: `1px solid ${C.border}` }}/>
        </div>
      </div>
    </section>
  );
}
