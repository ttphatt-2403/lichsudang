// ─────────────────────────────────────────────────────────────────────────────
// CONTENT — Vì sao và bằng cách nào Đảng điều chỉnh nhiệm vụ 1936–1939
// ─────────────────────────────────────────────────────────────────────────────

export const CHAPTERS = [
  { id: "boi-canh",  roman: "I",   label: "Bối cảnh",  title: "Bối cảnh lịch sử và yêu cầu điều chỉnh", period: "1935–1936" },
  { id: "nhiem-vu",  roman: "II",  label: "Nhiệm vụ",  title: "Điều chỉnh nhiệm vụ và lực lượng",        period: "1936–1938" },
  { id: "hinh-thuc", roman: "III", label: "Hình thức", title: "Điều chỉnh hình thức đấu tranh",          period: "1936–1939" },
  { id: "ket-qua",   roman: "IV",  label: "Kết quả",   title: "Quá trình thích ứng và kết quả",          period: "1936–1939" },
  { id: "ket-luan",  roman: "V",   label: "Kết luận",  title: "Kết luận tổng quan",                      period: "Tổng hợp" },
];

// ─── Section I: Bối cảnh lịch sử ─────────────────────────────────────────────

export const S1_INTL_POINTS = [
  {
    num: "01",
    title: "Hậu quả khủng hoảng kinh tế (1929–1933)",
    body: "Khủng hoảng làm mâu thuẫn dâng cao trên phạm vi toàn cầu. Giai cấp tư sản ở một số nơi chủ trương dùng bạo lực chia lại thị trường thế giới.",
  },
  {
    num: "02",
    title: "Sự trỗi dậy của Chủ nghĩa Phát xít",
    body: "Phe Trục phát xít được hình thành tại Đức, Italia, Nhật Bản. Các thế lực này vừa đàn áp trong nước vừa chuẩn bị chiến tranh, khiến nguy cơ chiến tranh đe dọa nền hòa bình và an ninh quốc tế.",
  },
  {
    num: "03",
    title: "Định hướng chiến lược từ Quốc tế Cộng sản",
    body: "Đại hội VII QTCS (7/1935) xác định kẻ thù nguy hiểm nhất là chủ nghĩa phát xít. Đảng CSĐD điều chỉnh đường lối nhằm \"sửa chữa những sai lầm\" trước đó và \"định lại chính sách mới\" theo nghị quyết QTCS. Tổng bí thư Lê Hồng Phong được bầu vào Ban Chấp hành QTCS.",
  },
  {
    num: "04",
    title: "Sự thay đổi chính trị tại Pháp",
    body: "Thắng lợi của Mặt trận Nhân dân Pháp (1936) và việc chính phủ ban bố chính sách tự do, dân chủ đối với thuộc địa đã tạo ra \"khe hở\" pháp lý vô cùng quan trọng cho phong trào đấu tranh tại Đông Dương.",
  },
];

export const S1_DOM_POINTS = [
  {
    title: "Đời sống nhân dân ngột ngạt",
    body: "Đời sống các tầng lớp nhân dân Việt Nam sau khủng hoảng vô cùng ngột ngạt dưới ách áp bức của thực dân Pháp. Nhu cầu bức thiết nhất của xã hội lúc bấy giờ không chỉ là độc lập mà là các quyền dân sinh, dân chủ cơ bản.",
  },
  {
    title: "Đảng phục hồi tổ chức",
    body: "Hệ thống tổ chức của Đảng sau một thời gian bị khủng bố trắng đã từng bước được phục hồi, cho phép Đảng có đủ năng lực để chớp thời cơ, chuyển hướng chiến lược và tập hợp quần chúng rộng rãi.",
  },
];

// Kept for backward compatibility (used by old grid layout)
export const S1_MILESTONES = [
  { date: "7/1935",     title: "Đại hội VII Quốc tế Cộng sản",     body: "Xác định kẻ thù nguy hiểm nhất là chủ nghĩa phát xít. Tổng bí thư Lê Hồng Phong được bầu vào Ban Chấp hành QTCS." },
  { date: "5/1935",     title: "Mặt trận Nhân dân Pháp thành lập", body: 'Sau thắng lợi tổng tuyển cử 1936, Chính phủ Mặt trận Nhân dân ra đời, tạo "khe hở" pháp lý quan trọng cho phong trào tại Đông Dương.' },
  { date: "1929–1933",  title: "Hậu quả khủng hoảng kinh tế",      body: "Mâu thuẫn xã hội dâng cao. Đời sống nhân dân khó khăn. Nhu cầu cải cách dân chủ, cải thiện đời sống ngày càng rõ rệt." },
];

export const S1_CHANGES = [
  { title: "Trên thế giới",          desc: "Nguy cơ phát xít và chiến tranh trở thành mối đe dọa trước mắt, làm nổi bật yêu cầu chống phát xít, chống chiến tranh, bảo vệ dân chủ và hòa bình." },
  { title: "Ở Pháp và Đông Dương",   desc: "Xuất hiện không gian chính trị thuận lợi hơn cho hoạt động công khai, hợp pháp và nửa hợp pháp tại các xứ thuộc địa." },
  { title: "Trong xã hội Việt Nam",  desc: "Nhu cầu về tự do, dân chủ, cơm áo và hòa bình trở thành những yêu cầu có khả năng thu hút đông đảo quần chúng." },
  { title: "Về phía Đảng",           desc: "Hệ thống tổ chức được phục hồi, tạo cơ sở để tận dụng điều kiện mới và mở rộng lực lượng cách mạng." },
];

export const S1_REQUIREMENTS = [
  { num: "01", title: "Xác định lại nhiệm vụ trước mắt",    desc: "Chống phát xít, chống chiến tranh đế quốc, chống phản động thuộc địa và tay sai; đòi tự do, dân chủ, cơm áo và hòa bình." },
  { num: "02", title: "Mở rộng phạm vi tập hợp lực lượng", desc: "Xây dựng Mặt trận nhân dân phản đế rộng rãi, phân hóa và cô lập kẻ thù trước mắt, tranh thủ mọi thành phần có thể liên kết." },
  { num: "03", title: "Kết hợp các hình thức đấu tranh",    desc: "Chuyển từ hoạt động thuần bí mật sang kết hợp công khai, nửa công khai, hợp pháp, nửa hợp pháp với bí mật và bất hợp pháp." },
];

// ─── Section II: Điều chỉnh nhiệm vụ và lực lượng ────────────────────────────

export const S2_DAI_HOI_I = {
  date: "3/1935",
  location: "Ma Cao, Trung Quốc",
  tasks: [
    "Củng cố và phát triển Đảng.",
    "Đẩy mạnh cuộc vận động tập hợp quần chúng.",
    "Tuyên truyền chống đế quốc, chống chiến tranh, ủng hộ Liên Xô.",
  ],
  limitation: "Đại hội I vẫn duy trì quan điểm hai nhiệm vụ phản đế và điền địa phải tiến hành đồng thời — chưa đặt giải phóng dân tộc lên hàng đầu và chưa sát với tình hình thực tế.",
};

export const S2_NHIEM_VU_LIST = [
  "Chống phát xít",
  "Chống chiến tranh đế quốc",
  "Chống phản động thuộc địa và tay sai",
  "Đòi tự do, dân chủ, cơm áo và hòa bình",
];

export const S2_FLOW = [
  { label: "Bối cảnh thay đổi",               tone: "red",    desc: "Chủ nghĩa phát xít phát triển; nguy cơ chiến tranh thế giới; Mặt trận Nhân dân Pháp nới lỏng chính sách thuộc địa; nhu cầu dân sinh dân chủ trong nước gia tăng." },
  { label: "Nhiệm vụ trước mắt được điều chỉnh", tone: "red",  desc: "Chống phát xít, chống chiến tranh; chống phản động thuộc địa; đòi tự do, dân chủ, cơm áo, hòa bình." },
  { label: "Yêu cầu mở rộng lực lượng",        tone: "brown",  desc: "Hướng tới đa dạng giai cấp, đảng phái, tôn giáo, các dân tộc Đông Dương — nhiệm vụ càng rộng, lực lượng càng phải rộng." },
  { label: "Hình thành mặt trận rộng rãi",      tone: "accent", desc: "Mặt trận nhân dân phản đế (1936) → Mặt trận Dân chủ Đông Dương (29–30/3/1938)." },
];

export const S2_HOINGHI_THUONGHAI = {
  date: "7/1936",
  location: "Thượng Hải, Trung Quốc",
  chair: "Tổng bí thư Lê Hồng Phong",
  participants: "Đồng chí Hà Huy Tập và đồng chí Phùng Chí Kiên",
  significance: "Hội nghị lịch sử đánh dấu sự chuyển hướng chiến lược đồng bộ trên 3 phương diện: Nhận thức/Nhiệm vụ, Lực lượng và Hình thức đấu tranh.",
};

export const S2_NHIEM_VU_POINTS = [
  {
    title: "Nhận thức mới về nhiệm vụ phản đế và điền địa",
    body: "Thay vì cứng nhắc thực hiện cùng lúc, Đảng xác định cần \"chọn địch nhân chính, nguy hiểm nhất mà đánh cho toàn thắng\".",
  },
  {
    title: "Tạm gác khẩu hiệu cách mạng ruộng đất",
    body: "Văn kiện \"Chung quanh vấn đề chiến sách mới\" (10/1936): \"Nếu phát triển cuộc tranh đấu chia đất mà ngăn trở cuộc đấu tranh phản đế thì phải lựa chọn vấn đề nào quan trọng hơn để giải quyết...\"",
  },
  {
    title: "Xác định lại nhiệm vụ cấp bách",
    body: "Chống phát xít, chống chiến tranh đế quốc, chống phản động thuộc địa và tay sai; đòi tự do, dân chủ, cơm áo và hòa bình. Khẩu hiệu \"đánh đổ đế quốc Pháp\" được thu hẹp thành đánh đổ bọn phản động thuộc địa.",
  },
];

export const S2_FRONT_TIMELINE = [
  { date: "26/7/1936",  title: "Mặt trận nhân dân phản đế",    body: "Thành lập Mặt trận nhân dân phản đế rộng rãi — bước đầu tập hợp lực lượng chống phát xít và phản động thuộc địa." },
  { date: "1937",       title: "Tiếp tục điều chỉnh tổ chức",  body: "Điều chỉnh phương pháp tập hợp quần chúng theo tình hình thực tế, mở rộng và củng cố lực lượng mặt trận." },
  { date: "3/1938",     title: "Nhiệm vụ trung tâm mới",       body: "Mặt trận dân chủ thống nhất trở thành nhiệm vụ trung tâm — mở rộng thành phần tham gia theo tinh thần Đại hội VII QTCS." },
  { date: "29-30/3/1938", title: "Mặt trận Dân chủ Đông Dương", body: "Mặt trận Dân chủ Đông Dương chính thức được thành lập, hoàn thiện cơ cấu tổ chức mặt trận rộng rãi nhất từ trước đến nay." },
];

export const S2_LEVELS = [
  { title: "Mở rộng thành phần xã hội", desc: "Không giới hạn tập hợp quần chúng trong phạm vi hẹp mà hướng tới mọi lực lượng có thể tham gia đấu tranh chống kẻ thù trước mắt." },
  { title: "Mở rộng phạm vi chính trị", desc: "Mặt trận bao gồm không chỉ tổ chức quần chúng mà còn có các đảng phái và lực lượng xã hội khác nhau, phân hóa và tranh thủ trung gian." },
  { title: "Mở rộng phạm vi dân tộc", desc: "Chủ trương mặt trận đặt trong phạm vi toàn Đông Dương, bao gồm các dân tộc ở xứ Đông Dương đoàn kết lại đấu tranh." },
];

// ─── Section III: Hình thức và phương pháp đấu tranh ─────────────────────────

export const S3_INTL_CONDITIONS = [
  "Từ đầu những năm 1930, khủng hoảng kinh tế thế giới làm mâu thuẫn dâng cao. Chủ nghĩa phát xít hình thành (phe Trục phát xít), đe dọa nền hòa bình và an ninh quốc tế.",
  "Tháng 7/1935, Đại hội VII Quốc tế Cộng sản xác định kẻ thù nguy hiểm trước mắt là chủ nghĩa phát xít, đề ra nhiệm vụ chống phát xít, chống chiến tranh, bảo vệ dân chủ và hòa bình. Tổng bí thư Lê Hồng Phong được bầu vào Ban Chấp hành QTCS.",
  "Năm 1936, Mặt trận Nhân dân Pháp giành thắng lợi trong Tổng tuyển cử. Chính phủ mới ban bố nhiều quyền tự do, dân chủ có áp dụng ở thuộc địa — mở ra \"khe hở\" pháp lý then chốt cho đấu tranh công khai ở Việt Nam.",
];

export const S3_PARTY_DECISIONS = [
  'Hội nghị được triệu tập nhằm "sửa chữa những sai lầm" trước đó và "định lại chính sách mới" theo nghị quyết của Quốc tế Cộng sản.',
  "Đảng xác định nhiệm vụ trước mắt: chống phát xít, chống chiến tranh đế quốc, chống phản động thuộc địa và tay sai, đòi tự do, dân chủ, cơm áo và hòa bình.",
  "Chủ trương lập Mặt trận nhân dân phản đế rộng rãi để tranh đấu đòi những điều dân chủ đơn sơ.",
  "Quyết định chuyển hình thức hoạt động từ bí mật, không hợp pháp sang công khai, nửa công khai, hợp pháp, nửa hợp pháp kết hợp bí mật và bất hợp pháp.",
];

export const S3_BAOCHI_BOOKS = [
  { author: "Tổng bí thư Hà Huy Tập",                                 title: '"Tờrốtxky và phản cách mạng"',    year: "1936" },
  { author: "Qua Ninh (Trường Chinh) & Vân Đình (Võ Nguyên Giáp)",   title: '"Vấn đề dân cày"',                year: "1938" },
  { author: "Hải Triều",                                               title: '"Chủ nghĩa Mác-xít phổ thông"',  year: "1938" },
];

export const S3_WHY_FORMS = [
  { num: "01", title: "Phù hợp với kẻ thù trước mắt",         desc: "Kẻ thù cụ thể lúc này là phản động thuộc địa (không phải toàn bộ đế quốc), nên hình thức đấu tranh phải \"mềm\" hơn để tranh thủ quyền lợi hợp pháp." },
  { num: "02", title: "Tận dụng khe hở chính trị",             desc: "Chính phủ Mặt trận Nhân dân Pháp nới lỏng quyền tự do dân chủ là cơ hội hiếm có để tập hợp lực lượng công khai, mà không bị đàn áp toàn diện." },
  { num: "03", title: "Bài học từ phong trào 1930–1931",       desc: "Rút kinh nghiệm từ tổn thất nặng nề, Đảng chủ trương dùng hình thức đấu tranh thấp hơn về mức độ bạo lực nhưng rộng hơn về quy mô quần chúng." },
  { num: "04", title: "Yêu cầu xây dựng lực lượng rộng rãi",  desc: "Để xây dựng Mặt trận Dân chủ Đông Dương, Đảng phải dùng hình thức vừa sức, dễ tiếp cận (báo chí, mít tinh, nghị trường) để thu hút cả tư sản, địa chủ yêu nước." },
  { num: "05", title: "Tuân thủ định hướng chiến lược",        desc: "Tạm gác vấn đề điền địa, tập trung vào địch nhân chính nguy hiểm nhất là cơ sở để Đảng chọn phương thức đấu tranh chính trị công khai thay vì vũ trang." },
];

export const S3_FORMS = [
  { num: "01", title: "Đấu tranh nghị trường", desc: "Vận động tranh cử vào Viện Dân biểu, Hội đồng Quản hạt nhằm đấu tranh công khai ngay trong bộ máy thực dân — đòi quyền lợi cho nhân dân từ bên trong." },
  { num: "02", title: "Mặt trận báo chí & tuyên truyền", desc: "Ra báo công khai, nửa công khai, xuất bản sách lý luận, thành lập Hội Truyền bá Quốc ngữ — nâng cao nhận thức chính trị cho quần chúng." },
  { num: "03", title: "Đấu tranh dân sinh & bãi công lớn", desc: 'Tổ chức mít tinh, hội họp, đưa "dân nguyện", các cuộc bãi công lớn của công nhân — đòi quyền tự do dân sinh dân chủ trực tiếp.' },
  { num: "04", title: "Kết hợp bí mật & bất hợp pháp", desc: "Bộ máy tổ chức Đảng vẫn hoạt động bí mật; các hình thức công khai chỉ là vỏ bọc bảo vệ lực lượng nòng cốt bên trong." },
];

export const S3_COMBINATIONS = [
  { title: "Bí mật – Công khai – Nửa hợp pháp", desc: "Giữ vững xương sống bí mật, dùng hội đoàn công khai làm vỏ bọc tập hợp quần chúng rộng rãi mà không bị đàn áp toàn diện." },
  { title: "Nghị trường kết hợp Ngoài nghị trường", desc: "Gây sức ép đồng thời từ cả trong bộ máy thực dân lẫn phong trào quần chúng bên ngoài, tạo áp lực hai chiều không thể bỏ qua." },
  { title: "Chính trị kết hợp Tư tưởng – Văn hóa", desc: "Chuẩn bị nhận thức cho quần chúng thông qua báo chí và truyền bá quốc ngữ — tạo nền tảng dài hạn cho phong trào." },
];

// ─── Section IV: Quá trình thích ứng & Kết luận ──────────────────────────────

export const S4_LESSONS = [
  { num: "I",   title: "Về nhiệm vụ",       desc: "Phân biệt rõ mục tiêu chiến lược lâu dài và nhiệm vụ trước mắt — điều chỉnh sách lược không đồng nghĩa với từ bỏ mục tiêu." },
  { num: "II",  title: "Về lực lượng",      desc: "Nhiệm vụ càng bám sát lợi ích chung, mặt trận càng được mở rộng và tập hợp được nhiều giai tầng tham gia đấu tranh." },
  { num: "III", title: "Về phương thức",    desc: "Không có hình thức đấu tranh cố định; phải thay đổi linh hoạt theo không gian chính trị và điều kiện cụ thể của từng thời kỳ." },
  { num: "IV",  title: "Khả năng thích ứng", desc: "Liên tục đánh giá thực tiễn và sẵn sàng chuyển hướng toàn diện khi điều kiện thay đổi — đây là phẩm chất sống còn của Đảng." },
];

export const S4_CONCLUSION = [
  {
    q: "Vì sao phải điều chỉnh?",
    a: "Khủng hoảng kinh tế làm mâu thuẫn dâng cao, chủ nghĩa phát xít hình thành đe dọa hòa bình quốc tế. Cùng với sự cởi mở tạm thời của Chính phủ Mặt trận Nhân dân Pháp, bối cảnh này buộc Đảng phải chuyển hướng ngay để không bỏ lỡ thời cơ lịch sử.",
    icon: "Bối cảnh",
  },
  {
    q: "Đảng điều chỉnh những gì?",
    a: "Ba mặt cốt lõi: (1) Nhiệm vụ trước mắt — tạm gác điền địa, tập trung chống phát xít, đòi dân sinh dân chủ; (2) Lực lượng — mở rộng từ Mặt trận nhân dân phản đế đến Mặt trận Dân chủ Đông Dương; (3) Hình thức — từ bí mật sang kết hợp linh hoạt công khai và bí mật.",
    icon: "Nội dung",
  },
  {
    q: "Bằng cách nào?",
    a: "Vận dụng tư duy biện chứng, Đảng bám sát kim chỉ nam: \"Cần chọn địch nhân chính, nguy hiểm nhất mà đánh cho toàn thắng\". Văn kiện Chung quanh vấn đề chiến sách mới (10/1936) xác định rõ: nếu đấu tranh điền địa cản trở phản đế thì phải ưu tiên vấn đề quan trọng hơn.",
    icon: "Phương thức",
  },
  {
    q: "Bản chất của sự điều chỉnh?",
    a: "Đây là điều chỉnh sách lược linh hoạt để phù hợp với hoàn cảnh lịch sử — tuyệt đối không đồng nhất với việc từ bỏ mục tiêu chiến lược lâu dài (giành độc lập dân tộc và tiến lên chủ nghĩa xã hội).",
    icon: "Bản chất",
  },
];

export const S4_LOGIC_CHAIN = [
  { step: "Bối cảnh thay đổi",          color: "#8B1A1A" },
  { step: "Nhiệm vụ được điều chỉnh",   color: "#7a5c2e" },
  { step: "Lực lượng được mở rộng",     color: "#c9a45c" },
  { step: "Hình thức đấu tranh linh hoạt", color: "#7a5c2e" },
  { step: "Kết quả thắng lợi",          color: "#8B1A1A" },
];

export const S4_REFERENCES = [
  {
    author: "Báo điện tử Đảng Cộng sản Việt Nam.",
    year: "2018",
    title: "Niên biểu toàn khoá Đại hội I",
    source: "Tư liệu văn kiện Đảng Cộng sản Việt Nam",
    url: "https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-i/nien-bieu-toan-khoa-27",
  },
  {
    author: "Thông tấn xã Việt Nam (NVSK).",
    year: "2023",
    title: "Tổng Bí thư Hà Huy Tập với cao trào vận động dân chủ (1936–1939)",
    source: "nvsk.vnanet.vn",
    url: "https://nvsk.vnanet.vn/tong-bi-thu-ha-huy-tap-voi-cao-trao-van-dong-dan-chu-1936-1939-1-39064.vna",
  },
  {
    author: "Tỉnh ủy Khánh Hòa.",
    year: "n.d.",
    title: "Chương III — Thời kỳ đấu tranh chống phản động thuộc địa, chống phát xít và chiến tranh đòi tự do, cơm áo và hòa bình (1936–1939)",
    source: "tinhuykhanhhoa.vn",
    url: "https://tinhuykhanhhoa.vn/tin-bai/lich-su-hinh-thanh/chuong-iii--thoi-ky-dau-tranh-chong-phan-dong-thuoc-dia-chong-phat-xit-va-chien-tranh-doi-tu-do-com-ao-va-hoa-binh-1936--1939-160",
  },
  {
    author: "FPT University.",
    year: "n.d.",
    title: "Vietnam\'s Path of Modernization and Socialist Renewal (1975–Present)",
    source: "PowerPoint slides, FPT University",
    url: "",
  },
];
