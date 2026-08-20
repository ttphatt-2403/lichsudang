import { C } from "@/tokens";
import {
  S3_INTL_CONDITIONS,
  S3_PARTY_DECISIONS,
  S3_FORMS,
  S3_BAOCHI_BOOKS,
  S3_COMBINATIONS,
  S3_WHY_FORMS,
} from "@/data/content";
import { Reveal } from "@/app/components/ui/Reveal";
import { Badge } from "@/app/components/ui/Badge";
import { MagazinePullQuote } from "@/app/components/ui/MagazinePullQuote";
import { DottedRule } from "@/app/components/ui/DottedRule";
import { ArticleHeader } from "@/app/components/ui/ArticleHeader";
import { ImageSlot } from "@/app/components/ui/ImageSlot";
import { imgS3MatTranPhap, imgS3NghiTruong, imgS3BaoChi, imgS3MitTinh } from "@/assets/images";

export function Section3() {
  return (
    <section id="hinh-thuc" style={{ paddingBottom: 48 }}>

      {/* ── Article header ─────────────────────────────────────────────── */}
      <Reveal>
        <ArticleHeader
          category="Phần III · Hình thức đấu tranh"
          headline="Hình thức"
          sub="Sự điều chỉnh phương pháp và hình thức đấu tranh"
          period="1936 – 1939"
          intro="Phong trào 1936–1939 đánh dấu bước chuyển lịch sử về phương thức đấu tranh — từ bí mật, bất hợp pháp sang kết hợp linh hoạt công khai và bí mật. Đây là biểu hiện của tư duy chỉ đạo chiến lược nhuần nhuyễn, thể hiện khả năng tận dụng mọi điều kiện lịch sử có lợi của Đảng."
        />
      </Reveal>

      {/* ══════════════════════════════════════════════
          1. Điều kiện chính trị mới
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="1. Điều kiện chính trị mới và khả năng mở rộng phương thức hoạt động" color={C.red}/>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0, marginBottom: 40 }}>
        {/* 1.1 International */}
        <div style={{ paddingRight: 32 }}>
          <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.red, marginBottom: 16 }}>
            1.1 — Điều kiện quốc tế
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {S3_INTL_CONDITIONS.map((cond, i) => (
              <Reveal key={i} delay={i * 55}>
                <div style={{
                  display: "grid", gridTemplateColumns: "28px 1fr", gap: 14,
                  paddingBottom: 18, marginBottom: 18,
                  borderBottom: i < 2 ? `1px dotted ${C.border}` : "none",
                }}>
                  <span style={{ fontFamily: C.serif, fontWeight: 900, fontSize: 26, color: C.red, opacity: 0.2, lineHeight: 1 }}>
                    {i + 1}
                  </span>
                  <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.82, color: C.dark, opacity: 0.82 }}>
                    {cond}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div style={{ borderLeft: `1px dotted ${C.border}` }}/>

        {/* 1.2 Party decisions */}
        <div style={{ paddingLeft: 32 }}>
          <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.red, marginBottom: 6 }}>
            1.2 — Chủ trương của Đảng
          </p>
          <p style={{ fontFamily: C.sans, fontSize: 12, color: C.muted, marginBottom: 16 }}>
            Hội nghị BCH TW Đảng · 26/7/1936 · Thượng Hải
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {S3_PARTY_DECISIONS.map((dec, i) => (
              <Reveal key={i} delay={i * 50}>
                <div style={{
                  display: "flex", gap: 14,
                  padding: "12px 14px",
                  background: i === 3 ? `rgba(139,26,26,0.07)` : i % 2 === 0 ? C.bg2 : C.ivory,
                  borderLeft: i === 3 ? `3px solid ${C.red}` : `3px solid transparent`,
                }}>
                  {i === 3 && (
                    <span style={{ fontFamily: C.sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.red, flexShrink: 0, alignSelf: "flex-start", marginTop: 2, whiteSpace: "nowrap" }}>
                      Mấu chốt
                    </span>
                  )}
                  <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.75, color: C.dark, opacity: i === 3 ? 0.9 : 0.78, fontWeight: i === 3 ? 500 : 400 }}>
                    {dec}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── Ảnh 3 — sau điều kiện chính trị ── */}
      <Reveal>
        <ImageSlot label="Hình ảnh — Chính phủ Mặt trận Nhân dân Pháp 1936" caption="Léon Blum và Chính phủ Mặt trận Nhân dân Pháp, 1936" height={330} src={imgS3MatTranPhap}/>
      </Reveal>

      <DottedRule my={36}/>

      {/* ══════════════════════════════════════════════
          2. Các hình thức đấu tranh
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="2. Các hình thức đấu tranh được sử dụng" color={C.red}/>
      </Reveal>

      {/* Forms as editorial numbered rows */}
      <div style={{ marginBottom: 40 }}>
        {S3_FORMS.map((f, i) => (
          <Reveal key={i} delay={i * 50}>
            <div 
              className="hover-row"
              style={{
                display: "grid",
                gridTemplateColumns: "72px 1fr",
                borderTop: `1px solid ${C.border}`,
                paddingTop: 22, paddingBottom: 22,
              }}
            >
              {/* Number */}
              <div style={{ paddingTop: 2 }}>
                <span 
                  className="decorative-number"
                  style={{
                    fontFamily: C.serif, fontWeight: 900, fontSize: 52,
                    lineHeight: 1, letterSpacing: "-0.04em",
                    color: C.red, opacity: 0.15, display: "block",
                  }}
                >
                  {i + 1}
                </span>
              </div>
              {/* Content */}
              <div style={{ borderLeft: `2px solid ${C.red}`, paddingLeft: 24 }}>
                <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.red, marginBottom: 8 }}>
                  {f.title}
                </p>
                <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.82, color: C.dark, opacity: 0.82 }}>
                  {f.desc}
                </p>
                {/* Extra: books for báo chí section */}
                {i === 1 && (
                  <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                    <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.brown, marginBottom: 4 }}>
                      Các tác phẩm tiêu biểu
                    </p>
                    {S3_BAOCHI_BOOKS.map((book, j) => (
                      <div 
                        key={j} 
                        className="hover-list-item"
                        style={{ display: "flex", gap: 10, alignItems: "baseline", padding: "8px 12px", background: C.bg2 }}
                      >
                        <span style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, color: C.accent, flexShrink: 0 }}>{book.year}</span>
                        <span style={{ fontFamily: C.body, fontSize: 16, color: C.dark, opacity: 0.75 }}>
                          {book.author} — <em style={{ color: C.dark }}>{book.title}</em>
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
        <div style={{ borderTop: `1px solid ${C.border}` }}/>
      </div>

      <Reveal>
        <ImageSlot label="Hình ảnh — Sách Vấn đề dân cày, 1938" caption="Sách Vấn đề dân cày, 1938" height={340} src={imgS3NghiTruong}/>
      </Reveal>

      <DottedRule my={36}/>

      {/* ══════════════════════════════════════════════
          3. Sự kết hợp giữa các hình thức
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="3. Sự kết hợp giữa các hình thức đấu tranh — Ba tầng kết hợp" color={C.red}/>
      </Reveal>

      <Reveal>
        <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.82, color: C.dark, opacity: 0.8, marginBottom: 24 }}>
          Đây là nét đặc sắc nhất của phong trào, thể hiện qua nguyên tắc kết hợp tổ chức
          bí mật và công khai để tập hợp quần chúng. Sự kết hợp này giúp phong trào
          vừa đảm bảo an toàn, vừa lan rộng thu hút được đông đảo các tầng lớp nhân dân.
        </p>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0, marginBottom: 40 }}>
        <div style={{ paddingRight: 32, display: "flex", flexDirection: "column", gap: 16 }}>
          {S3_COMBINATIONS.slice(0, 2).map((combo, i) => (
            <Reveal key={i} delay={i * 55}>
              <div 
                className="hover-card"
                style={{ padding: "18px 20px", background: C.bg2, borderLeft: `4px solid ${C.red}` }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontFamily: C.serif, fontWeight: 900, fontSize: 20, color: C.red, opacity: 0.35 }}>{i + 1}</span>
                  <p style={{ fontFamily: C.sans, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.red }}>
                    {combo.title}
                  </p>
                </div>
                <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.78, color: C.dark, opacity: 0.82 }}>
                  {combo.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ borderLeft: `1px dotted ${C.border}` }}/>

        <div style={{ paddingLeft: 32, display: "flex", flexDirection: "column", gap: 16 }}>
          {S3_COMBINATIONS.slice(2).map((combo, i) => (
            <Reveal key={i} delay={i * 55}>
              <div 
                className="hover-card"
                style={{ padding: "18px 20px", background: C.bg2, borderLeft: `4px solid ${C.brown}` }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontFamily: C.serif, fontWeight: 900, fontSize: 20, color: C.brown, opacity: 0.35 }}>3</span>
                  <p style={{ fontFamily: C.sans, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.brown }}>
                    {combo.title}
                  </p>
                </div>
                <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.78, color: C.dark, opacity: 0.82 }}>
                  {combo.desc}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={80}>
            <MagazinePullQuote
              text="Vừa đảm bảo an toàn, vừa lan rộng thu hút được đông đảo các tầng lớp nhân dân — đó là tính ưu việt của sự kết hợp linh hoạt."
            />
          </Reveal>
        </div>
      </div>

      {/* ── Ảnh 4 — sau sự kết hợp ── */}
      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 0 }}>
          <ImageSlot label="Hình ảnh — Hoạt động báo chí công khai 1936–1939" caption="Báo Tin tức, Dân chúng, hoặc các ấn phẩm công khai" height={280} src={imgS3BaoChi}/>
          <ImageSlot label="Hình ảnh — Nhà yêu nước Nguyễn An Ninh" caption="Nhà yêu nước Nguyễn An Ninh (1900 - 1943) - Linh hồn của phong trào Đông Dương Đại hội và vận động đấu tranh dân chủ công khai" height={280} objectFit="contain" src={imgS3MitTinh}/>
        </div>
      </Reveal>

      <DottedRule my={36}/>

      {/* ══════════════════════════════════════════════
          4. Vì sao chọn những hình thức này?
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="4. Vì sao Đảng lựa chọn những hình thức này trong điều kiện 1936–1939?" color={C.red}/>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 40 }}>
        {S3_WHY_FORMS.map((item, i) => (
          <Reveal key={i} delay={i * 45}>
            <div style={{
              padding: "20px 22px",
              background: i % 2 === 0 ? C.bg2 : C.ivory,
              borderTop: `3px solid ${i < 3 ? C.red : C.brown}`,
              position: "relative",
              // Last item spans full width if odd count
              gridColumn: i === 4 ? "1 / -1" : undefined,
            }}>
              <span style={{
                position: "absolute", top: 12, right: 16,
                fontFamily: C.serif, fontWeight: 900, fontSize: 44,
                color: C.accent, opacity: 0.1, lineHeight: 1, userSelect: "none",
              }}>{item.num}</span>
              <p style={{ fontFamily: C.sans, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: i < 3 ? C.red : C.brown, marginBottom: 10 }}>
                {item.title}
              </p>
              <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.78, color: C.dark, opacity: 0.82 }}>
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <DottedRule my={36}/>

      {/* ══════════════════════════════════════════════
          5. Mối quan hệ biện chứng
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="5. Mối quan hệ biện chứng: Nhiệm vụ → Lực lượng → Hình thức đấu tranh" color={C.red}/>
      </Reveal>

      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, marginBottom: 16 }}>
          {[
            { step: "Nhiệm vụ trước mắt thay đổi",  color: C.red,    desc: "Nhẹ hơn, cụ thể hơn — đòi dân sinh dân chủ, chống phản động thuộc địa. Không còn đặt ngay mục tiêu toàn bộ giải phóng dân tộc." },
            { step: "Lực lượng mở rộng",             color: C.brown,  desc: "Đa dạng thành phần: công nông, tiểu tư sản, tư sản dân tộc, địa chủ yêu nước cùng tham gia Mặt trận Dân chủ Đông Dương." },
            { step: "Hình thức đấu tranh linh hoạt", color: C.accent, desc: "Lực lượng đa dạng đòi hỏi hình thức phải công khai, hợp pháp để mọi tầng lớp đều có thể tiếp cận và tham gia." },
          ].map((item, i) => (
            <div key={i} style={{ position: "relative" }}>
              <div style={{
                padding: "22px 20px",
                background: i % 2 === 0 ? C.bg2 : C.ivory,
                borderTop: `3px solid ${item.color}`,
                height: "100%",
              }}>
                <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: item.color, marginBottom: 10 }}>
                  Bước {i + 1} — {item.step}
                </p>
                <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.78, color: C.dark, opacity: 0.8 }}>
                  {item.desc}
                </p>
              </div>
              {i < 2 && (
                <div style={{ position: "absolute", right: -8, top: "50%", transform: "translateY(-50%)", zIndex: 2 }}>
                  <span style={{ fontFamily: C.serif, fontSize: 20, color: C.accent, opacity: 0.45 }}>›</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={60}>
        <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.82, color: C.dark, opacity: 0.72, fontStyle: "italic", marginBottom: 40, paddingLeft: 8, borderLeft: `2px solid ${C.border}` }}>
          Tóm lại, nhiệm vụ quyết định lực lượng, lực lượng quyết định hình thức tổ chức — đây là biểu hiện của tư duy chỉ đạo chiến lược nhuần nhuyễn của Đảng.
        </p>
      </Reveal>

      <DottedRule my={36}/>

      {/* ══════════════════════════════════════════════
          6. Linh hoạt về phương thức, không thay đổi về mục tiêu
      ══════════════════════════════════════════════ */}
      <Reveal>
        <Badge label="6. Sự linh hoạt về phương thức — Không thay đổi tùy tiện về mục tiêu" color={C.red}/>
      </Reveal>

      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 0 }}>
          <div style={{ paddingRight: 32 }}>
            <p style={{ fontFamily: C.body, fontSize: 18, lineHeight: 1.88, color: C.dark, opacity: 0.85, marginBottom: 20 }}>
              Việc điều chỉnh hình thức đấu tranh <em style={{ fontWeight: 600 }}>không đồng nghĩa</em> với việc
              Đảng từ bỏ mục tiêu chiến lược (độc lập dân tộc, ruộng đất cho dân cày).
              Sự chuyển hướng sang kết hợp hoạt động công khai, hợp pháp chỉ là sự thích ứng
              linh hoạt về sách lược trước một hoàn cảnh chính trị có lợi tạm thời.
            </p>
            <div style={{ padding: "14px 18px", background: `rgba(139,107,63,0.07)`, borderLeft: `4px solid ${C.brown}` }}>
              <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.brown, marginBottom: 8 }}>
                Nguyên tắc cốt lõi
              </p>
              <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.78, color: C.dark, opacity: 0.85 }}>
                Hình thức đấu tranh luôn phục vụ mục tiêu chiến lược — và Đảng sẵn sàng thay đổi phương thức ngay khi điều kiện lịch sử không còn cho phép.
              </p>
            </div>
          </div>

          <div style={{ borderLeft: `1px dotted ${C.border}` }}/>

          <div style={{ paddingLeft: 32 }}>
            <div style={{ padding: "22px 24px", background: C.dark, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle, rgba(201,164,92,0.06) 1px, transparent 1px)`, backgroundSize: "24px 24px", pointerEvents: "none" }}/>
              <p style={{ fontFamily: C.sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,164,92,0.4)", marginBottom: 10, position: "relative", zIndex: 1 }}>
                Minh chứng lịch sử — 9/1939
              </p>
              <p style={{ fontFamily: C.body, fontSize: 17, lineHeight: 1.82, color: "rgba(245,230,200,0.8)", position: "relative", zIndex: 1 }}>
                Khi Chiến tranh thế giới thứ hai bùng nổ, thực dân Pháp quay lại đàn áp cách mạng,
                Đảng <em style={{ color: C.accent, fontStyle: "normal", fontWeight: 600 }}>lập tức rút vào hoạt động bí mật</em>,
                cuộc vận động dân chủ kết thúc. Điều này chứng tỏ hình thức đấu tranh luôn
                phục vụ mục tiêu chiến lược — không bao giờ là bản thân mục tiêu.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

    </section>
  );
}
