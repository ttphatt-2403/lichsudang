import { useState } from "react";
import { ArrowLeft, RefreshCw, Trophy, CheckCircle2, XCircle, Eye, HelpCircle } from "lucide-react";
import { C } from "@/tokens";
import { imgS2MatTranDanChu } from "@/assets/images";

interface MiniGamePageProps {
  onBack: () => void;
}

interface Question {
  id: number;
  text: string;
  options: string[];
  checksum: number; // Obfuscated correct answer: (correctOptionIndex + 7) * 4
  explanation: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Đại hội VII Quốc tế Cộng sản (7/1935) xác định kẻ thù nguy hiểm trước mắt của nhân dân thế giới là gì?",
    options: [
      "Chủ nghĩa đế quốc",
      "Chủ nghĩa phát xít",
      "Chủ nghĩa phong kiến",
      "Chủ nghĩa tư bản"
    ],
    checksum: 32, // B (index 1) -> (1+7)*4 = 32
    explanation: "Đại hội VII của Quốc tế Cộng sản (7/1935) đã xác định chủ nghĩa phát xít là kẻ thù nguy hiểm nhất trước mắt của nhân dân thế giới, kêu gọi thành lập Mặt trận Nhân dân rộng rãi để chống phát xít và nguy cơ chiến tranh."
  },
  {
    id: 2,
    text: "Chính phủ Mặt trận Nhân dân Pháp năm 1936 đã tạo điều kiện gì cho phong trào cách mạng ở Đông Dương?",
    options: [
      "Cho phép đấu tranh vũ trang",
      "Mở rộng không gian hoạt động công khai, hợp pháp",
      "Trao độc lập cho Đông Dương",
      "Xóa bỏ chế độ thuộc địa"
    ],
    checksum: 32, // B (index 1) -> (1+7)*4 = 32
    explanation: "Sự lên nắm quyền của Mặt trận Nhân dân Pháp vào năm 1936 cùng các chính sách tự do, dân chủ (như đại xá tù chính trị, tự do báo chí, hội họp...) đã tạo điều kiện thuận lợi để Đảng ta mở rộng hoạt động công khai và nửa hợp pháp."
  },
  {
    id: 3,
    text: "Hội nghị Trung ương ngày 26/7/1936 xác định nhiệm vụ trước mắt nào sau đây?",
    options: [
      "Đánh đổ hoàn toàn chế độ phong kiến",
      "Chống phát xít, chống chiến tranh, đòi tự do, dân chủ, cơm áo, hòa bình",
      "Tiến hành cách mạng ruộng đất ngay lập tức",
      "Thành lập chính quyền công nông"
    ],
    checksum: 32, // B (index 1) -> (1+7)*4 = 32
    explanation: "Hội nghị BCH Trung ương do đồng chí Lê Hồng Phong chủ trì họp tại Thượng Hải (7/1936) xác định nhiệm vụ trước mắt của cách mạng Đông Dương là đấu tranh chống phát xít, chống chiến tranh, đòi tự do, dân sinh, dân chủ, cơm áo và hòa bình."
  },
  {
    id: 4,
    text: "Điểm nổi bật trong sự điều chỉnh nhiệm vụ của Đảng giai đoạn 1936–1939 là gì?",
    options: [
      "Từ bỏ mục tiêu cách mạng",
      "Thay đổi mục tiêu chiến lược",
      "Điều chỉnh nhiệm vụ trước mắt cho phù hợp tình hình",
      "Chấm dứt đấu tranh cách mạng"
    ],
    checksum: 36, // C (index 2) -> (2+7)*4 = 36
    explanation: "Thời kỳ 1936–1939 thể hiện sự linh hoạt sách lược của Đảng: không thay đổi mục tiêu chiến lược lâu dài (giải phóng dân tộc, cách mạng ruộng đất) mà chỉ khôn khéo điều chỉnh nhiệm vụ trước mắt để thích ứng với tình hình mới."
  },
  {
    id: 5,
    text: "Vì sao Đảng chủ trương mở rộng phạm vi tập hợp lực lượng?",
    options: [
      "Vì lực lượng công – nông không còn tồn tại",
      "Vì nhiệm vụ trước mắt cần sự đồng thuận rộng rãi",
      "Vì muốn từ bỏ đấu tranh giai cấp",
      "Vì Pháp yêu cầu"
    ],
    checksum: 32, // B (index 1) -> (1+7)*4 = 32
    explanation: "Để thực hiện các nhiệm vụ dân chủ, dân sinh, chống bọn phản động thuộc địa, Đảng cần tập hợp mọi lực lượng tiến bộ, dân chủ và yêu nước rộng rãi nhất có thể, vượt qua phạm vi liên minh công - nông đơn thuần."
  },
  {
    id: 6,
    text: "Mặt trận nhân dân phản đế rộng rãi năm 1936 hướng tới việc tập hợp lực lượng nào?",
    options: [
      "Chỉ công nhân và nông dân",
      "Chỉ trí thức",
      "Các giai cấp, đảng phái, đoàn thể, tín ngưỡng, tôn giáo và các dân tộc Đông Dương",
      "Chỉ các đảng phái"
    ],
    checksum: 36, // C (index 2) -> (2+7)*4 = 36
    explanation: "Mặt trận hướng đến tập hợp mọi giai cấp, đảng phái, đoàn thể chính trị, tín ngưỡng tôn giáo, các dân tộc ở Đông Dương có tinh thần dân chủ, chống phát xít và bọn phản động thuộc địa Pháp."
  },
  {
    id: 7,
    text: "Đến tháng 3/1938, chủ trương xây dựng mặt trận được cụ thể hóa bằng sự kiện nào?",
    options: [
      "Thành lập Mặt trận Dân chủ Đông Dương",
      "Thành lập Chính phủ Mặt trận Nhân dân",
      "Thành lập Hội Truyền bá Quốc ngữ",
      "Thành lập Đông Dương Đại hội"
    ],
    checksum: 28, // A (index 0) -> (0+7)*4 = 28
    explanation: "Hội nghị Trung ương tháng 3/1938 quyết định thành lập Mặt trận Dân chủ Đông Dương (thay thế cho Mặt trận Thống nhất Nhân dân Phản đế Đông Dương) nhằm mục tiêu tập hợp rộng rãi quần chúng đấu tranh dân chủ."
  },
  {
    id: 8,
    text: "Văn kiện “Chung quanh vấn đề chiến sách mới” (10/1936) nhấn mạnh điều gì?",
    options: [
      "Phải giải quyết đồng thời mọi nhiệm vụ",
      "Phải chọn địch nhân chính, nguy hiểm nhất để tập trung lực lượng",
      "Phải từ bỏ nhiệm vụ phản đế",
      "Phải tiến hành đấu tranh vũ trang"
    ],
    checksum: 32, // B (index 1) -> (1+7)*4 = 32
    explanation: "Văn kiện xác định phải biết phân hóa kẻ thù, chọn ra kẻ thù chính, trực tiếp và nguy hiểm nhất trước mắt (bọn phản động thuộc địa Pháp) để chĩa mũi nhọn đấu tranh, tránh đánh đồng mọi kẻ thù cùng một lúc."
  },
  {
    id: 9,
    text: "Hình thức đấu tranh nào được mở rộng trong giai đoạn 1936–1939?",
    options: [
      "Chỉ bí mật, bất hợp pháp",
      "Chỉ đấu tranh vũ trang",
      "Công khai, nửa công khai, hợp pháp, nửa hợp pháp kết hợp bí mật",
      "Chỉ đấu tranh nghị trường"
    ],
    checksum: 36, // C (index 2) -> (2+7)*4 = 36
    explanation: "Đây là thời kỳ đặc sắc nhất về nghệ thuật sử dụng phương pháp cách mạng của Đảng: kết hợp linh hoạt giữa tổ chức bí mật (xương sống) với các hoạt động công khai, hợp pháp, nửa hợp pháp của quần chúng nhân dân."
  },
  {
    id: 10,
    text: "Đâu là một hình thức đấu tranh nghị trường trong phong trào 1936–1939?",
    options: [
      "Đưa người tham gia các cơ quan dân cử",
      "Khởi nghĩa vũ trang",
      "Đấu tranh du kích",
      "Phá bỏ cơ quan chính quyền"
    ],
    checksum: 28, // A (index 0) -> (0+7)*4 = 28
    explanation: "Đấu tranh nghị trường thể hiện ở việc Đảng đưa người của Mặt trận Dân chủ ra ứng cử vào các cơ quan đại diện thuộc địa như Viện Dân biểu Bắc Kỳ, Trung Kỳ, Hội đồng Quản hạt Nam Kỳ để vạch trần chính sách phản động và bảo vệ quyền lợi nhân dân."
  },
  {
    id: 11,
    text: "Vì sao Đảng vẫn duy trì hoạt động bí mật bên cạnh các hoạt động công khai?",
    options: [
      "Vì các hoạt động công khai không có tác dụng",
      "Vì tổ chức Đảng vẫn là tổ chức bất hợp pháp dưới chính quyền thực dân",
      "Vì Đảng không muốn tập hợp quần chúng",
      "Vì phong trào chưa có lực lượng"
    ],
    checksum: 32, // B (index 1) -> (1+7)*4 = 32
    explanation: "Chính quyền thực dân Pháp không bao giờ công nhận tính hợp pháp của Đảng Cộng sản Đông Dương. Do đó, Đảng phải giữ vững mạng lưới tổ chức bí mật làm xương sống để lãnh đạo, tránh bị thực dân Pháp tiêu diệt hoàn toàn."
  },
  {
    id: 12,
    text: "Mối quan hệ nào thể hiện đúng logic thích ứng của Đảng?",
    options: [
      "Lực lượng → Bối cảnh → Nhiệm vụ → Hình thức",
      "Hình thức → Nhiệm vụ → Bối cảnh → Lực lượng",
      "Bối cảnh → Nhiệm vụ → Lực lượng → Hình thức đấu tranh",
      "Nhiệm vụ → Bối cảnh → Hình thức → Lực lượng"
    ],
    checksum: 36, // C (index 2) -> (2+7)*4 = 36
    explanation: "Logic thích ứng khoa học của Đảng: từ những chuyển biến của bối cảnh lịch sử -> xác định nhiệm vụ cách mạng cụ thể -> tổ chức lực lượng quần chúng thích hợp -> đề ra hình thức đấu tranh phù hợp."
  },
  {
    id: 13,
    text: "Nội dung nào sau đây không phải là nhiệm vụ trước mắt của Đảng trong giai đoạn 1936–1939?",
    options: [
      "Chống phát xít",
      "Chống chiến tranh đế quốc",
      "Đòi tự do, dân chủ, cơm áo và hòa bình",
      "Tiến hành cách mạng ruộng đất ngay lập tức"
    ],
    checksum: 40, // D (index 3) -> (3+7)*4 = 40
    explanation: "Để tập hợp mọi lực lượng rộng rãi bao gồm cả địa chủ yêu nước và tư sản dân tộc, Đảng đã quyết định tạm gác các khẩu hiệu cực đoan như tịch thu ruộng đất của địa chủ chia cho dân cày và thành lập chính quyền công nông."
  },
  {
    id: 14,
    text: "Khi Chiến tranh thế giới thứ hai bùng nổ tháng 9/1939, Đảng đã phản ứng như thế nào?",
    options: [
      "Tiếp tục hình thức đấu tranh công khai như trước",
      "Rút vào hoạt động bí mật và tiếp tục điều chỉnh chiến lược",
      "Giải thể các tổ chức cách mạng",
      "Từ bỏ mục tiêu giải phóng dân tộc"
    ],
    checksum: 32, // B (index 1) -> (1+7)*4 = 32
    explanation: "Khi chiến tranh bùng nổ, Pháp thực hiện quân sự hóa và khủng báo gắt gao. Đảng nhanh chóng rút toàn bộ lực lượng công khai vào bí mật, chuyển hướng nhiệm vụ sang chuẩn bị khởi nghĩa vũ trang giải phóng dân tộc."
  },
  {
    id: 15,
    text: "Đâu là bản chất cốt lõi của sự thích ứng chiến lược giai đoạn 1936–1939?",
    options: [
      "Thay đổi mục tiêu để phù hợp hoàn cảnh",
      "Từ bỏ đấu tranh cách mạng",
      "Linh hoạt điều chỉnh nhiệm vụ, lực lượng và phương thức nhưng không từ bỏ mục tiêu chiến lược",
      "Chỉ thay đổi hình thức tuyên truyền"
    ],
    checksum: 36, // C (index 2) -> (2+7)*4 = 36
    explanation: "Sự kết hợp hoàn hảo giữa 'kiên định chiến lược' (không từ bỏ mục tiêu độc lập dân tộc và chủ nghĩa xã hội) với 'linh hoạt sách lược' (thay đổi linh hoạt nhiệm vụ, lực lượng và hình thức đấu tranh theo tình thế)."
  }
];

// Helper function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export function MiniGamePage({ onBack }: MiniGamePageProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>(() => shuffleArray(QUESTIONS));
  const [activeIdx, setActiveIdx] = useState<number | null>(null); // Index of the piece (0-14) currently being solved
  const [answeredPieces, setAnsweredPieces] = useState<boolean[]>(Array(15).fill(false)); // Solved state of the 15 pieces
  const [revealedPieces, setRevealedPieces] = useState<boolean[]>(Array(15).fill(false)); // Revealed images of the 15 pieces
  
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [shakeQuestion, setShakeQuestion] = useState(false);
  const [gameState, setGameState] = useState<"quiz" | "result">("quiz");

  const handleSelectPiece = (idx: number) => {
    if (answeredPieces[idx]) return; // Cannot select already solved piece
    if (answered) return; // Cannot switch questions while answering one
    setActiveIdx(idx);
    setSelectedAns(null);
    setAnswered(false);
  };

  const handleSelectAnswer = (idx: number) => {
    if (answered || activeIdx === null) return;
    setSelectedAns(idx);
    setAnswered(true);
    
    // Check answer of the question mapped to the activeIdx
    const currentQuestion = shuffledQuestions[activeIdx];
    const isCorrect = (idx + 7) * 4 === currentQuestion.checksum;
    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      setShakeQuestion(true);
      setTimeout(() => setShakeQuestion(false), 350);
    }

    // Set active piece as solved and revealed
    setRevealedPieces(prev => {
      const next = [...prev];
      next[activeIdx] = true;
      return next;
    });
    setAnsweredPieces(prev => {
      const next = [...prev];
      next[activeIdx] = true;
      return next;
    });
  };

  const handleConfirmNext = () => {
    setSelectedAns(null);
    setAnswered(false);
    
    // Check if all pieces are solved
    const allDone = answeredPieces.every(Boolean);
    if (allDone) {
      setGameState("result");
    } else {
      setActiveIdx(null);
    }
  };

  const resetGame = () => {
    setShuffledQuestions(shuffleArray(QUESTIONS));
    setActiveIdx(null);
    setSelectedAns(null);
    setAnswered(false);
    setScore(0);
    setRevealedPieces(Array(15).fill(false));
    setAnsweredPieces(Array(15).fill(false));
    setGameState("quiz");
  };

  const activeQuestion = activeIdx !== null ? shuffledQuestions[activeIdx] : null;

  return (
    <div className="game-bg min-h-screen py-10 px-4 md:px-8" style={{ fontFamily: C.body, color: C.dark }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* Header toolbar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <button 
            onClick={onBack}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: C.sans,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: C.brown,
              transition: C.tr,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = C.red; e.currentTarget.style.transform = "translateX(-4px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = C.brown; e.currentTarget.style.transform = "translateX(0)"; }}
          >
            <ArrowLeft size={16}/> Trở về trang chủ
          </button>
          
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, color: C.brown, textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Mảnh ghép đã mở: <strong style={{ color: C.red, fontSize: 14 }}>{revealedPieces.filter(Boolean).length}/15</strong>
            </span>
          </div>
        </div>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <span style={{ fontFamily: C.sans, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.red }}>
            Trò chơi tập thể tương tác ngẫu nhiên
          </span>
          <h1 style={{ fontFamily: C.serif, fontSize: 32, fontWeight: 900, color: C.dark, marginTop: 6 }}>
            Thử thách ghép tranh Lịch sử
          </h1>
          <p style={{ fontFamily: C.body, fontSize: 15, color: C.dark, opacity: 0.72, maxWidth: 700, margin: "6px auto 0" }}>
            Bấm chọn **bất kỳ mảnh ghép số nào** ở bảng bên phải để bắt đầu giải câu hỏi ngẫu nhiên được ẩn giấu bên dưới mảnh ghép đó!
          </p>
        </div>

        {/* MAIN GAME LAYOUT */}
        {gameState === "quiz" ? (
          <div style={{ display: "grid", gridTemplateColumns: "1fr", lg: "1.2fr 1fr", gap: 32, alignItems: "start" }} className="grid lg:grid-cols-[1.2fr_1fr]">
            
            {/* Left Column — Quiz card / placeholder */}
            {activeIdx !== null && activeQuestion ? (
              <div className={`game-card p-6 md:p-8 ${shakeQuestion ? "shake-anim" : ""}`} style={{ borderTop: `4px solid ${C.red}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px dotted rgba(139,107,63,0.25)`, paddingBottom: 12, marginBottom: 20 }}>
                  <span style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, color: C.red, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                    Đang giải mảnh ghép số: <strong style={{ fontSize: 13 }}>{activeIdx + 1}</strong>
                  </span>
                  <span style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, color: C.brown, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                    Trả lời đúng: <strong style={{ color: C.red }}>{score} / {answeredPieces.filter(Boolean).length}</strong>
                  </span>
                </div>

                {/* Progress bar */}
                <div style={{ height: 3, background: "rgba(139,107,63,0.1)", borderRadius: 99, marginBottom: 24, overflow: "hidden" }}>
                  <div style={{ height: "100%", background: C.red, width: `${(answeredPieces.filter(Boolean).length / QUESTIONS.length) * 100}%`, transition: "width 0.4s" }}/>
                </div>

                {/* Question Text */}
                <div style={{ marginBottom: 24 }}>
                  <h2 style={{ fontFamily: C.serif, fontSize: 20, fontWeight: 700, color: C.dark, lineHeight: 1.45 }}>
                    {activeQuestion.text}
                  </h2>
                </div>

                {/* Options list */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: answered ? 24 : 0 }}>
                  {activeQuestion.options.map((opt, i) => {
                    let statusClass = "";
                    if (answered) {
                      const isCorrectOption = (i + 7) * 4 === activeQuestion.checksum;
                      if (isCorrectOption) {
                        statusClass = "correct";
                      } else if (i === selectedAns) {
                        statusClass = "wrong";
                      }
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => handleSelectAnswer(i)}
                        disabled={answered}
                        className={`game-option-btn ${statusClass}`}
                      >
                        <span style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 26, height: 26,
                          borderRadius: "50%",
                          border: "1px solid currentColor",
                          fontSize: 12,
                          fontWeight: 700,
                          flexShrink: 0
                        }}>
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation box */}
                {answered && (
                  <div style={{
                    background: (selectedAns !== null && (selectedAns + 7) * 4 === activeQuestion.checksum) ? "rgba(34, 197, 94, 0.04)" : "rgba(239, 68, 68, 0.04)",
                    borderLeft: `4px solid ${(selectedAns !== null && (selectedAns + 7) * 4 === activeQuestion.checksum) ? "#22c55e" : "#ef4444"}`,
                    padding: "16px 20px",
                    borderRadius: 2,
                    animation: "fadeIn 0.4s ease-out forwards",
                    marginBottom: 24,
                    marginTop: 20
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      {selectedAns !== null && (selectedAns + 7) * 4 === activeQuestion.checksum ? (
                        <span style={{ color: "#22c55e", display: "flex", alignItems: "center", gap: 6, fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          <CheckCircle2 size={16}/> Trả lời chính xác!
                        </span>
                      ) : (
                        <span style={{ color: "#ef4444", display: "flex", alignItems: "center", gap: 6, fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          <XCircle size={16}/> Trả lời chưa đúng!
                        </span>
                      )}
                    </div>
                    <p style={{ fontFamily: C.body, fontSize: 15, lineHeight: 1.65, color: C.dark, opacity: 0.85, margin: 0 }}>
                      {activeQuestion.explanation}
                    </p>
                  </div>
                )}

                {/* Confirm & Next button */}
                {answered && (
                  <button
                    onClick={handleConfirmNext}
                    style={{
                      background: C.dark,
                      color: "#fff",
                      fontFamily: C.sans,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      padding: "12px 28px",
                      border: "none",
                      borderRadius: 2,
                      cursor: "pointer",
                      float: "right",
                      transition: C.tr,
                      marginTop: 8
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = C.red}
                    onMouseLeave={(e) => e.currentTarget.style.background = C.dark}
                  >
                    Xác nhận &amp; Chọn mảnh ghép tiếp theo
                  </button>
                )}
                <div style={{ clear: "both" }}/>

              </div>
            ) : (
              <div className="game-card p-12 text-center" style={{ borderTop: `4.5px dashed ${C.accent}`, background: "rgba(201,164,92,0.03)" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 18, color: C.accent }}>
                  <HelpCircle size={48} className="animate-pulse"/>
                </div>
                <h3 style={{ fontFamily: C.serif, fontSize: 20, fontWeight: 700, color: C.dark, marginBottom: 8 }}>
                  Chưa chọn mảnh ghép
                </h3>
                <p style={{ fontFamily: C.body, fontSize: 15, color: C.dark, opacity: 0.65, maxWidth: 400, margin: "0 auto" }}>
                  Hãy nhấp chọn bất kỳ ô số chưa được giải nào ở bảng bên phải để hiển thị câu hỏi và lật mở mảnh ghép tranh tương ứng!
                </p>
              </div>
            )}

            {/* Right Column — 3x5 Interactive Puzzle Board */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{
                fontFamily: C.sans, fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "0.1em", color: C.brown, display: "flex", alignItems: "center", gap: 8
              }}>
                <Eye size={14}/> Bảng chọn mảnh ghép (5 cột x 3 dòng)
              </div>
              
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                gap: 3,
                background: "#e9e4d9",
                border: `3px solid ${C.accent}`,
                boxShadow: "0 8px 24px rgba(62,47,28,0.18)",
                width: "100%",
                aspectRatio: "1000/360",
                borderRadius: 2,
                overflow: "hidden"
              }}>
                {Array(15).fill(null).map((_, idx) => {
                  const isRevealed = revealedPieces[idx];
                  const isSolved = answeredPieces[idx];
                  const isActive = activeIdx === idx;
                  const c = idx % 5;
                  const r = Math.floor(idx / 5);
                  
                  return (
                    <div 
                      key={idx} 
                      onClick={() => handleSelectPiece(idx)}
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        background: isSolved ? "#1c1815" : isActive ? "rgba(139,26,26,0.15)" : "#221c17",
                        cursor: isSolved ? "default" : answered ? "not-allowed" : "pointer",
                        border: isActive ? `2.5px solid ${C.red}` : "1px solid rgba(201,164,92,0.15)",
                        boxShadow: isActive ? "inset 0 0 10px rgba(139,26,26,0.5)" : "none",
                        transition: "all 0.3s ease"
                      }}
                      className={(!isSolved && !answered) ? "hover:scale-[1.03] hover:border-amber-500" : ""}
                    >
                      {isRevealed ? (
                        <div 
                          style={{
                            backgroundImage: `url(${imgS2MatTranDanChu})`,
                            backgroundSize: "500% 300%",
                            backgroundPosition: `${(c * 100) / 4}% ${(r * 100) / 2}%`,
                            width: "100%",
                            height: "100%",
                            animation: "fadeIn 0.6s ease-out forwards"
                          }}
                        />
                      ) : (
                        <div style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: isActive ? C.red : "rgba(201,164,92,0.65)",
                          fontFamily: C.sans,
                          fontSize: "clamp(13px, 2.8vw, 20px)",
                          fontWeight: 800,
                        }}>
                          {idx + 1}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <p style={{ fontFamily: C.serif, fontSize: 13, fontStyle: "italic", color: C.brown, textAlign: "center", opacity: 0.8 }}>
                * Click chọn mảnh ghép số nhấp nháy để mở câu hỏi *
              </p>
            </div>

          </div>
        ) : (
          /* RESULT STATE */
          <div className="game-card p-8 md:p-12 text-center" style={{ borderTop: `4px solid ${C.red}`, maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <div style={{
                width: 64, height: 64,
                borderRadius: "50%",
                background: `rgba(201,164,92,0.1)`,
                border: `2px solid ${C.accent}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: C.accent
              }}>
                <Trophy size={32}/>
              </div>
            </div>

            <span style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.brown }}>
              Thành tựu tập thể
            </span>
            
            <h1 style={{ fontFamily: C.serif, fontSize: 32, fontWeight: 900, color: C.dark, marginTop: 12, marginBottom: 18 }}>
              Hoàn thành bức tranh Lịch sử!
            </h1>

            {/* Fully unlocked photo container */}
            <div style={{
              border: `3px solid ${C.accent}`,
              boxShadow: "0 15px 35px rgba(62,47,28,0.25)",
              borderRadius: 2,
              overflow: "hidden",
              marginBottom: 20
            }}>
              <img 
                src={imgS2MatTranDanChu} 
                alt="Cuộc mít tinh 1/5/1938 tại Nhà Đấu Xảo" 
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            
            <h3 style={{ fontFamily: C.serif, fontSize: 18, fontWeight: 700, color: C.red, marginBottom: 8 }}>
              Mít tinh ngày Quốc tế Lao động 1/5/1938 tại Khu Đấu Xảo (Hà Nội)
            </h3>
            
            <p style={{ fontFamily: C.body, fontSize: 16, lineHeight: 1.7, color: C.dark, opacity: 0.8, maxWidth: 750, margin: "0 auto 36px" }}>
              Bức tranh đã được lật mở trọn vẹn! Đây là cuộc mít tinh khổng lồ của hơn 2.5 vạn người tham gia biểu dương lực lượng công khai, hợp pháp lớn nhất của quần chúng nhân dân dưới sự lãnh đạo của Đảng trong thời kỳ Mặt trận Dân chủ Đông Dương (1936-1939).
            </p>

            <div style={{ borderTop: `1px dotted rgba(139,107,63,0.3)`, paddingTop: 28, display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", marginBottom: 36 }}>
              <span style={{ fontFamily: C.sans, fontSize: 13, color: C.brown, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Số mảnh ghép mở khóa: <strong style={{ color: C.red }}>15 / 15</strong>
              </span>
              <span style={{ fontFamily: C.sans, fontSize: 13, color: C.brown, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Số câu trả lời đúng: <strong style={{ color: C.red }}>{score} / 15</strong>
              </span>
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <button
                onClick={resetGame}
                style={{
                  background: "none",
                  border: `1.5px solid ${C.brown}`,
                  color: C.brown,
                  fontFamily: C.sans,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "12px 28px",
                  borderRadius: 2,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: C.tr
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(139,107,63,0.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
              >
                <RefreshCw size={14}/> Chơi lại từ đầu
              </button>
              
              <button
                onClick={onBack}
                style={{
                  background: C.red,
                  color: "#fff",
                  fontFamily: C.sans,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "13px 28px",
                  border: `1.5px solid rgba(201,164,92,0.3)`,
                  borderRadius: 2,
                  cursor: "pointer",
                  transition: C.tr,
                  boxShadow: "0 8px 20px -5px rgba(139,26,26,0.2)"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 25px -5px rgba(139,26,26,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 20px -5px rgba(139,26,26,0.2)"; }}
              >
                Về trang chủ
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
