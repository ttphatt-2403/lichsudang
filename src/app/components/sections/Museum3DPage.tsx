import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ArrowLeft, HelpCircle, Loader2, X } from "lucide-react";
import { C } from "@/tokens";
import {
  imgS2MatTranDanChu,
  imgS1BoiCanhQuocTe,
  imgS2DaiHoi1,
  imgS1PhatXit,
  imgS1DoiSongNhanDan,
  imgS3MatTranPhap,
  imgS3MitTinh,
  imgS3BaoChi,
  imgS4PhongTraoDanChu,
  imgS2HoiNghiThuongHai,
  imgS3NghiTruong,
  imgS4ChienTranh,
  imgS4RenLuyenCanbo,
  imgS1PhongTraoCachMang,
  imgCover1936,
} from "@/assets/images";

const galleryGlbUrl = "/assets/BaoTang3D/art_gallery.glb.glb";

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
}

// 15 historical paintings for 1936-1939 Democratic Movement with highly detailed descriptions
const ARTWORKS: Artwork[] = [
  {
    id: "a01", src: imgS2MatTranDanChu,
    year: "1/5/1938",
    caption: "Mít tinh 1/5/1938 tại khu Đấu Xảo — Hà Nội",
    description: "Cuộc mít tinh kỷ niệm ngày Quốc tế Lao động 1/5/1938 tại khu Đấu Xảo (Hà Nội) là đỉnh cao chói lọi của phong trào Mặt trận Dân chủ Đông Dương. Đây là cuộc mít tinh công khai hợp pháp khổng lồ quy tụ hơn 2.5 vạn quần chúng từ các ngành nghề biểu dương lực lượng đấu tranh đòi tự do lập hội, cải thiện đời sống nhân dân lao động, chống chiến tranh phát xít và ủng hộ hòa bình thế giới. Sự kiện được tổ chức vô cùng chặt chẽ, kỷ luật dưới sự lãnh đạo trực tiếp của Đảng Cộng sản Đông Dương. Hàng vạn người xếp hàng ngay ngắn hô vang khẩu hiệu đòi cải cách xã hội, chống chiến tranh phát xít và ủng hộ Mặt trận Nhân dân Pháp, chứng minh sức mạnh đoàn kết giai cấp mạnh mẽ.",
  },
  {
    id: "a02", src: imgS1BoiCanhQuocTe,
    year: "7/1935",
    caption: "Đại hội VII Quốc tế Cộng sản tại Mát-xcơ-va",
    description: "Đại hội lần thứ VII của Quốc tế Cộng sản họp tại Mát-xcơ-va vào tháng 7/1935 là một dấu mốc lịch sử đối với cách mạng thế giới và Việt Nam. Trong bối cảnh chủ nghĩa phát xít đang trỗi dậy mạnh mẽ đe dọa hòa bình nhân loại, Đại hội đã xác định kẻ thù nguy hiểm trước mắt là chủ nghĩa phát xít. Đại hội chủ trương thành lập Mặt trận Nhân dân rộng rãi đấu tranh giành tự do, hòa bình và dân chủ. Quyết sách này là cơ sở lý luận quan trọng giúp Đảng Cộng sản Đông Dương chuyển hướng chiến lược, thành lập Mặt trận Dân chủ chống thực dân phản động Pháp.",
  },
  {
    id: "a03", src: imgS2DaiHoi1,
    year: "3/1935",
    caption: "Đại hội đại biểu lần thứ I của Đảng tại Ma Cao",
    description: "Đại hội đại biểu lần thứ I của Đảng họp tại Ma Cao (Trung Quốc) vào tháng 3/1935 đánh dấu bước khôi phục tổ chức vô cùng quan trọng. Sau giai đoạn bị thực dân Pháp khủng bố trắng tàn khốc sau cao trào Xô viết Nghệ Tĩnh (1930-1931), hệ thống Đảng bị tổn thất nặng nề. Đại hội họp để củng cố lại hệ thống tổ chức từ Trung ương đến cơ sở, thống nhất đường lối cách mạng và thông qua các nghị quyết quan trọng về vận động công nhân, nông dân. Đại hội tạo tiền đề vững chắc đưa Đảng bước vào cao trào đấu tranh mới.",
  },
  {
    id: "a04", src: imgS1PhatXit,
    year: "1933–1939",
    caption: "Chủ nghĩa phát xít — Mối đe dọa toàn cầu",
    description: "Sự trỗi dậy của chủ nghĩa phát xít tại Đức, Ý và Nhật Bản trong những năm 1930 đã đẩy nhân loại vào nguy cơ một cuộc chiến tranh tàn khốc mới. Các thế lực phát xít điên cuồng xóa bỏ các quyền tự do dân chủ trong nước, tăng cường chạy đua vũ trang và chuẩn bị phân chia lại bản đồ thế giới. Nhận thấy hiểm họa sống còn này, các lực lượng dân chủ trên toàn thế giới đã liên kết chặt chẽ. Tại Đông Dương, Đảng liên tục tuyên truyền giúp quần chúng nhận rõ bộ mặt tàn bạo của phát xít Nhật, chuẩn bị lực lượng chống lại họa xâm lăng.",
  },
  {
    id: "a05", src: imgS1DoiSongNhanDan,
    year: "1929–1933",
    caption: "Đời sống nhân dân dưới ách áp bức thực dân phong kiến",
    description: "Bức tranh phản ánh đời sống bần cùng hóa của nhân dân Đông Dương dưới ách bóc lột của thực dân Pháp và phong kiến tay sai. Giai cấp nông dân bị cướp đoạt ruộng đất, chịu cảnh thuế khóa đè nặng, sưu cao thuế nặng và chế độ lao dịch khắc nghiệt. Công nhân trong các hầm mỏ, đồn điền cao su làm việc 14-16 tiếng mỗi ngày dưới làn roi vọt và đồng lượng rẻ mạt. Cuộc khủng hoảng kinh tế toàn cầu càng đẩy người lao động vào cảnh đói nghèo, dịch bệnh, tích tụ niềm phẫn uất bùng nổ thành các phong trào đấu tranh cách mạng.",
  },
  {
    id: "a06", src: imgS3MatTranPhap,
    year: "1936",
    caption: "Chính phủ Mặt trận Nhân dân Pháp lên nắm quyền",
    description: "Năm 1936, thắng lợi của Mặt trận Nhân dân Pháp do Đảng Cộng sản và Đảng Xã hội Pháp nòng cốt đã đưa chính phủ cánh tả lên nắm quyền ở Pháp. Chính phủ mới đã ban hành nhiều cải cách tự do tiến bộ cho các thuộc địa, bao gồm Đông Dương như đại xá tù chính trị, nới lỏng chế độ kiểm duyệt báo chí, công nhận các hội cứu tế. Sự thay đổi chính trị này đã mở ra một khoảng không gian pháp lý vô giá giúp Đảng Cộng sản Đông Dương đưa phong trào cách mạng ra hoạt động công khai và nửa hợp pháp.",
  },
  {
    id: "a07", src: imgS3MitTinh,
    year: "1900–1943",
    caption: "Nhà báo — nhà yêu nước lỗi lạc Nguyễn An Ninh",
    description: "Nguyễn An Ninh (1900-1943) là một nhà báo vĩ đại, nhà yêu nước lỗi lạc và là linh hồn của phong trào Đông Dương Đại hội tại Nam Kỳ. Với tri thức uyên bác và ngòi bút đanh thép, ông sáng lập tờ báo 'La Cloche Fêlée' cổ vũ tinh thần tự do. Nguyễn An Ninh đã đi khắp các tỉnh Nam Kỳ diễn thuyết trước hàng vạn quần chúng, thức tỉnh lòng yêu nước và ý thức chính trị của người dân lao động. Ông bị thực dân Pháp bắt giam nhiều lần và cuối cùng hy sinh anh dũng tại nhà tù Côn Đảo, để lại tấm gương sáng ngời.",
  },
  {
    id: "a08", src: imgS3BaoChi,
    year: "1936–1939",
    caption: "Mặt trận báo chí cách mạng công khai",
    description: "Thời kỳ 1936-1939 chứng kiến sự bùng nổ mạnh mẽ của mặt trận báo chí cách mạng hoạt động công khai. Đảng đã xuất bản hàng chục tờ báo chữ Quốc ngữ và tiếng Pháp như Dân Chúng, Tin Tức, Lao Động... Các tờ báo này không chỉ đưa tin thời sự mà còn giáo dục lý luận cách mạng, phản ánh tiếng nói đau khổ của người lao động, vạch trần các chính sách bóc lột của thực dân. Báo chí trở thành người tổ chức tập thể, kết nối quần chúng đấu tranh tạo nên dư luận xã hội mạnh mẽ đòi tự do.",
  },
  {
    id: "a09", src: imgS4PhongTraoDanChu,
    year: "1936–1937",
    caption: "Phong trào Đông Dương Đại hội — Thu thập Dân nguyện",
    description: "Phong trào Đông Dương Đại hội phát động năm 1936 là một chiến dịch vận động chính trị rộng khắp. Hàng vạn bản 'Dân nguyện' chứa đựng khát vọng tự do, cơm áo đã được thu thập gửi đến phái đoàn điều tra của Chính phủ Pháp. Khắp nơi từ nhà máy, hầm mỏ đến thôn xóm đều thành lập các Ủy ban hành động để thảo luận và ký tên vào các yêu sách. Phong trào đã huy động hàng triệu người tham gia, biến ý chí của Đảng thành nguyện vọng thiết tha của quần chúng nhân dân trên khắp ba miền đất nước.",
  },
  {
    id: "a10", src: imgS2HoiNghiThuongHai,
    year: "7/1936",
    caption: "Hội nghị BCH Trung ương tại Thượng Hải",
    description: "Hội nghị Ban Chấp hành Trung ương Đảng họp tại Thượng Hải (Trung Quốc) vào tháng 7/1936 dưới sự chủ trì của đồng chí Lê Hồng Phong đã quyết định chuyển hướng chỉ đạo chiến lược cách mạng Đông Dương. Nhận định tình hình quốc tế và trong nước thay đổi, Hội nghị chủ trương tạm gác khẩu hiệu độc lập dân tộc và tịch thu ruộng đất dân cày, chuyển sang thành lập Mặt trận Nhân dân phản đế (Mặt trận Dân chủ) đấu tranh đòi tự do, dân sinh, dân chủ. Quyết sách này giúp Đảng tập hợp lực lượng rộng lớn.",
  },
  {
    id: "a11", src: imgS3NghiTruong,
    year: "1938",
    author: "Trường Chinh & Võ Nguyên Giáp",
    caption: "Tác phẩm 'Vấn đề dân cày' (1938)",
    description: "Cuốn sách lý luận kinh điển 'Vấn đề dân cày' do hai đồng chí Trường Chinh và Võ Nguyên Giáp biên soạn dưới bút danh Qua Ninh và Vân Đình xuất bản năm 1938. Tác phẩm phân tích sâu sắc thực trạng bóc lột địa tô, thuế khóa tàn bạo của chế độ thực dân phong kiến đối với nông dân Việt Nam. Cuốn sách khẳng định nông dân là động lực chủ yếu của cách mạng, chỉ ra con đường giải phóng nông dân gắn liền với liên minh công nông chặt chẽ dưới sự lãnh đạo của Đảng Cộng sản Đông Dương.",
  },
  {
    id: "a12", src: imgS4ChienTranh,
    year: "9/1939",
    caption: "Chiến tranh thế giới thứ hai — Kết thúc thời kỳ Dân chủ",
    description: "Tháng 9/1939, Chiến tranh thế giới thứ hai chính thức bùng nổ. Thực dân Pháp thực hiện chính sách quân sự hóa thời chiến ở Đông Dương, thẳng tay đàn áp phong trào dân chủ cách mạng, đóng cửa các tờ báo cách mạng và bắt giam hàng loạt cán bộ Đảng viên. Thời kỳ hoạt động công khai nửa hợp pháp kết thúc. Đảng đã nhanh chóng chuyển hướng chỉ đạo chiến lược, đưa lực lượng rút vào hoạt động bí mật, xây dựng căn cứ địa cách mạng và chuẩn bị vũ trang khởi nghĩa giành độc lập.",
  },
  {
    id: "a13", src: imgS4RenLuyenCanbo,
    year: "1936–1939",
    caption: "Công tác huấn luyện, rèn luyện cán bộ cách mạng",
    description: "Trong thời kỳ Mặt trận Dân chủ Đông Dương, công tác huấn luyện cán bộ cách mạng được Đảng đặc biệt coi trọng. Hàng loạt lớp huấn luyện lý luận chính trị ngắn ngày được mở bí mật và bán công khai nhằm bồi dưỡng chủ nghĩa Mác - Lênin, phương pháp vận động quần chúng cho các đảng viên. Nhiều cán bộ sau này trở thành lãnh đạo xuất sắc của Cách mạng Tháng Tám đã được rèn luyện thử thách chính trị trong lửa đỏ của phong trào dân chủ công khai này.",
  },
  {
    id: "a14", src: imgS1PhongTraoCachMang,
    year: "1930–1935",
    caption: "Phong trào cách mạng Việt Nam trước giai đoạn Dân chủ",
    description: "Phong trào cách mạng Việt Nam giai đoạn 1930-1935 trải qua những bước thăng trầm oanh liệt. Từ đỉnh cao cao trào Xô viết Nghệ Tĩnh (1930-1931) bị thực dân Pháp khủng bố trắng tàn bạo, Đảng bước vào thời kỳ khôi phục tổ chức đầy gian lao. Dù bị giam cầm trong các nhà lao Sơn La, Côn Đảo, các chiến sĩ cách mạng vẫn giữ vững khí tiết đấu tranh, biến nhà tù thành trường học cách mạng, chuẩn bị tinh thần và lực lượng đón đầu cao trào dân chủ 1936-1939.",
  },
  {
    id: "a15", src: imgCover1936,
    year: "1936",
    caption: "Dấu mốc 1936 — Mặt trận Dân chủ Đông Dương ra đời",
    description: "Năm 1936 mở ra thời kỳ hoạt động công khai rực rỡ nhất của Đảng. Nhờ sự nhạy bén chính trị của Trung ương, Đảng đã chuyển hướng kịp thời từ đấu tranh bí mật sang kết hợp linh hoạt đấu tranh công khai, hợp pháp và nửa hợp pháp. Sự ra đời của Mặt trận Dân chủ Đông Dương đã lôi cuốn hàng triệu người dân tham gia đấu tranh chính trị trực diện đòi cải thiện đời sống, đưa uy tín và ảnh hưởng của Đảng lan rộng khắp Đông Dương.",
  },
];

interface Exhibit {
  id: number;
  title: string;
  part: string;
  url: string;
  width: number;
  height: number;
  position: [number, number, number];
  rotation: [number, number, number];
  details: string;
  year: string;
  author?: string;
}

export function Museum3DPage({ onBack }: Museum3DPageProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [showHelp, setShowHelp] = useState(true);

  // Proximity and Focus state
  const [nearExhibit, setNearExhibit] = useState<Exhibit | null>(null);
  const [focusedExhibit, setFocusedExhibit] = useState<Exhibit | null>(null);

  const nearExhibitRef = useRef<Exhibit | null>(null);
  const focusedExhibitRef = useRef<Exhibit | null>(null);

  useEffect(() => {
    focusedExhibitRef.current = focusedExhibit;
  }, [focusedExhibit]);

  useEffect(() => {
    // Prevent body scrolling while museum is active
    document.body.style.overflow = "hidden";

    // ── ThreeJS Setup ───────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#2a1e16"); // Warm dark-brown gallery tone
    scene.fog = new THREE.FogExp2("#2a1e16", 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.rotation.order = "YXZ";
    camera.position.set(0, 1.8, 2.0); // Standing eye level at center
    camera.rotation.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.45;

    const currentMount = mountRef.current;
    if (currentMount) {
      currentMount.appendChild(renderer.domElement);
    }

    // ── Walk controls ──────────────────────────────────────────────────
    const keysPressed: Record<string, boolean> = {};

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      keysPressed[key] = true;

      if (key === "f") {
        if (nearExhibitRef.current) {
          setFocusedExhibit((prev) => (prev ? null : nearExhibitRef.current));
        }
      }
      if (e.key === "Escape") {
        setFocusedExhibit(null);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed[e.key.toLowerCase()] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // ── Mouse Drag Camera Look ─────────────────────────────────────────
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(".no-drag-ui")) return;
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || focusedExhibitRef.current) return;

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      const sensitivity = 0.0028;
      camera.rotation.y -= deltaX * sensitivity;
      camera.rotation.x -= deltaY * sensitivity;

      const maxPitch = Math.PI / 2.2;
      camera.rotation.x = Math.max(-maxPitch, Math.min(maxPitch, camera.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Mobile Swipe Controls
    const handleTouchStart = (e: TouchEvent) => {
      if ((e.target as HTMLElement).closest(".no-drag-ui")) return;
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1 || focusedExhibitRef.current) return;

      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      const sensitivity = 0.0045;
      camera.rotation.y -= deltaX * sensitivity;
      camera.rotation.x -= deltaY * sensitivity;

      const maxPitch = Math.PI / 2.2;
      camera.rotation.x = Math.max(-maxPitch, Math.min(maxPitch, camera.rotation.x));

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    domElement.addEventListener("touchstart", handleTouchStart);
    domElement.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    // ── Lighting ───────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight("#fff5e6", 3.0);
    scene.add(ambientLight);

    const overheadLight = new THREE.DirectionalLight("#ffe8cc", 2.5);
    overheadLight.position.set(0, 15, 0);
    scene.add(overheadLight);

    const fillLight = new THREE.DirectionalLight("#ffffff", 1.2);
    fillLight.position.set(0, 5, 8);
    scene.add(fillLight);

    // Pointlights hanging from the ceiling
    const points: [number, number, number][] = [
      [0, 3.8, 0], [4, 3.8, 4], [-4, 3.8, 4], [0, 3.8, -4]
    ];
    points.forEach((pos) => {
      const pt = new THREE.PointLight("#ffcca3", 2.2, 16);
      pt.position.set(...pos);
      scene.add(pt);
    });

    const camLight = new THREE.PointLight("#fff5e6", 1.0, 10);
    scene.add(camLight);

    // ── Exhibit Setup from original merged meshes ─────────────────────
    const textureLoader = new THREE.TextureLoader();
    const exhibits: Exhibit[] = [];

    // Group our 15 paintings into inside slots
    const insideExhibitsData = ARTWORKS.slice(0, 8).map(a => ({
      title: a.caption,
      part: "Phần I · Trưng bày phía trong",
      url: a.src,
      details: a.description,
      year: a.year,
      author: a.author
    }));

    const inside001ExhibitsData = ARTWORKS.slice(8, 15).map(a => ({
      title: a.caption,
      part: "Phần I · Trưng bày phía trong",
      url: a.src,
      details: a.description,
      year: a.year,
      author: a.author
    }));

    // Detailed historical data list for the 12 outside dome wall slots
    const outsideExhibitsData = [
      {
        title: "Đông Dương Đại hội sục sôi (1936)",
        part: "Phần II · Trưng bày vòm ngoài",
        url: imgS4PhongTraoDanChu,
        year: "1936",
        details: "Phong trào Đông Dương Đại hội bùng nổ mạnh mẽ trong suốt năm 1936, mở đầu cho cao trào dân chủ lớn chưa từng có. Dưới sự lãnh đạo sáng suốt của Đảng Cộng sản Đông Dương, hàng nghìn Ủy ban hành động đã được thành lập công khai tại các nhà máy, hầm mỏ, thôn xóm để thu thập nguyện vọng của quần chúng nhân dân. Các bản 'Dân nguyện' tập trung đòi tự do lập hội, tự do báo chí, tự do hội họp, cải thiện đời sống công nhân và chia lại ruộng đất cho dân cày nghèo. Phong trào đã thức tỉnh tinh thần chính trị của đông đảo quần chúng, tạo tiền đề xây dựng lực lượng cách mạng to lớn sau này."
      },
      {
        title: "Mặt trận Dân chủ Đông Dương ra đời",
        part: "Phần II · Trưng bày vòm ngoài",
        url: imgCover1936,
        year: "1936",
        details: "Trước sự xuất hiện của chủ nghĩa phát xít nguy hiểm và sự chỉ đạo của Quốc tế Cộng sản, Đảng Cộng sản Đông Dương đã nhanh chóng họp hội nghị Ban Chấp hành Trung ương (7/1936) quyết định tạm thời gác khẩu hiệu tịch thu ruộng đất của địa chủ và đánh đổ đế quốc Pháp. Đảng chủ trương thành lập Mặt trận Nhân dân phản đế (sau đổi thành Mặt trận Dân chủ Đông Dương) nhằm đoàn kết rộng rãi mọi giai cấp, tầng lớp xã hội, đảng phái và ngoại kiều tiến bộ để cùng đấu tranh đòi các quyền dân sinh, dân chủ, tự do, hòa bình."
      },
      {
        title: "Sự trỗi dậy của báo chí cách mạng tiếng Pháp",
        part: "Phần II · Trưng bày vòm ngoài",
        url: imgS3BaoChi,
        year: "1936–1939",
        details: "Trong những năm tháng đấu tranh công khai nửa hợp pháp, Đảng đặc biệt chú trọng xuất bản các tờ báo bằng tiếng Pháp như Le Travail (Lao động), Rassemblement (Tập hợp), Notre Voix (Tiếng nói của chúng ta)... Nhắm trực tiếp vào chính giới Pháp và tầng lớp trí thức tiến bộ tại Đông Dương. Các tờ báo này đã vạch trần các chính sách bóc lột, tù đày của chính quyền thực dân, tuyên truyền sâu rộng chủ nghĩa Mác - Lênin và định hướng đấu tranh cho quần chúng nhân dân một cách sắc bén."
      },
      {
        title: "Hệ thống báo chí cách mạng chữ Quốc ngữ",
        part: "Phần II · Trưng bày vòm ngoài",
        url: imgS3BaoChi,
        year: "1936–1939",
        details: "Song hành với báo tiếng Pháp, hệ thống báo chí chữ Quốc ngữ của Đảng như Dân Chúng, Tin Tức, Đời Mới, Lao Động... phát triển rực rỡ và có sức lan tỏa vô cùng mạnh mẽ. Tờ 'Dân Chúng' - cơ quan trung ương của Đảng - xuất bản công khai tại Sài Gòn có số lượng phát hành lên tới hàng vạn bản mỗi kỳ. Báo chí cách mạng đã trở thành công cụ tổ chức, giáo dục chính trị đắc lực nhất, giúp kết nối hàng triệu trái tim yêu nước từ nông thôn đến thành thị vào một khối thống nhất đấu tranh đòi quyền sống."
      },
      {
        title: "Bãi công vang dội của công nhân Hòn Gai",
        part: "Phần II · Trưng bày vòm ngoài",
        url: imgS1PhongTraoCachMang,
        year: "11/1936",
        details: "Cuộc tổng bãi công lịch sử của hơn 2 vạn thợ mỏ than Hòn Gai - Cẩm Phả diễn ra vào tháng 11/1936 dưới sự lãnh đạo chặt chẽ của các chi bộ Đảng địa phương. Công nhân đồng loạt ngừng việc đòi tăng lương, giảm giờ làm, cải thiện điều kiện lao động tồi tệ dưới hầm mỏ và chống đánh đập. Mặc dù bị thực dân Pháp đe dọa, khủng bố và bao vây lương thực, công nhân vẫn đoàn kết kiên cường chia nhau từng bát cơm, ngọn rau. Cuộc đấu tranh anh dũng kéo dài nhiều tuần lễ cuối cùng đã buộc chủ mỏ phải nhượng bộ hoàn toàn, tạo nên tiếng vang lớn cho phong trào công nhân Đông Dương."
      },
      {
        title: "Phong trào đấu tranh kiên cường của nông dân",
        part: "Phần II · Trưng bày vòm ngoài",
        url: imgS1DoiSongNhanDan,
        year: "1936–1939",
        details: "Khắp các vùng nông thôn từ Bắc Kỳ, Trung Kỳ đến Nam Kỳ, phong trào đấu tranh của nông dân diễn ra quyết liệt dưới nhiều hình thức. Hàng vạn nông dân đã rầm rộ kéo lên huyện đường, phủ đường đấu tranh đòi xóa bỏ sưu thuế vô lý, chia lại ruộng công công bằng, chống nạn cướp ruộng đất của địa chủ và đòi cứu trợ thiên tai. Sự liên minh chặt chẽ giữa phong trào đấu tranh của giai cấp công nhân ở thành thị và giai cấp nông dân ở nông thôn đã tạo nên sức mạnh vô địch, làm lung lay tận gốc bộ máy cai trị của chính quyền phong kiến tay sai thực dân Pháp."
      },
      {
        title: "Đấu tranh nghị trường — Mặt trận mới mẻ",
        part: "Phần II · Trưng bày vòm ngoài",
        url: imgS3NghiTruong,
        year: "1937–1938",
        details: "Lần đầu tiên trong lịch sử, Đảng Cộng sản Đông Dương chủ trương sử dụng hình thức đấu tranh nghị trường. Đảng đưa các đảng viên và người của Mặt trận Dân chủ ra ứng cử vào các cơ quan đại diện tư sản của thực dân Pháp như Viện Dân biểu Bắc Kỳ và Trung Kỳ. Với sự ủng hộ mạnh mẽ của quần chúng, nhiều ứng viên của Mặt trận đã trúng cử với số phiếu áp đảo. Tại nghị trường, các đại biểu cách mạng đã dũng cảm vạch trần các thủ đoạn sưu thuế đè nén nhân dân, đòi quyền tự do dân chủ và biến nghị trường thành diễn đàn tuyên truyền cách mạng công khai hiệu quả."
      },
      {
        title: "Phong trào truyền bá chữ Quốc ngữ",
        part: "Phần II · Trưng bày vòm ngoài",
        url: imgS4RenLuyenCanbo,
        year: "1938",
        details: "Để nâng cao dân trí và khơi dậy tinh thần yêu nước, Đảng đã lãnh đạo thành lập 'Hội truyền bá chữ Quốc ngữ' hoạt động hợp pháp. Hàng loạt lớp học ban đêm được mở ra hoàn toàn miễn phí tại các đình chùa, nhà kho, lớp học tư cho công nhân, người lao động nghèo và nông dân mù chữ. Phong trào đã nhanh chóng xóa mù chữ cho hàng vạn người nghèo khổ, đồng thời lồng ghép giáo dục lòng tự tôn dân tộc, ý thức chính trị sâu sắc, chuẩn bị đội ngũ quần chúng có văn hóa sẵn sàng cống hiến cho sự nghiệp giải phóng đất nước."
      },
      {
        title: "Ngày biểu dương lực lượng 1/5/1938 lịch sử",
        part: "Phần II · Trưng bày vòm ngoài",
        url: imgS2MatTranDanChu,
        year: "1/5/1938",
        details: "Ngày 1/5/1938 ghi dấu ấn chói lọi với cuộc mít tinh biểu dương lực lượng khổng lồ tại khu Đấu Xảo (Hà Nội). Hơn 2.5 vạn quần chúng gồm công nhân, nông dân, trí thức và dân nghèo thành thị đã tập hợp chỉnh tề dưới những lá cờ đỏ búa liềm và băng rôn đỏ rực. Quần chúng đồng thanh hô vang các khẩu hiệu đòi tự do lập hội, cải thiện đời sống người lao động, chống chiến tranh phát xít và ủng hộ hòa bình thế giới. Đây là cuộc biểu dương lực lượng lớn nhất, có tổ chức chặt chẽ nhất của nhân dân ta trong thời kỳ Dân chủ Đông Dương."
      },
      {
        title: "Tác phẩm lý luận 'Vấn đề dân cày' (1938)",
        part: "Phần II · Trưng bày vòm ngoài",
        url: imgS3NghiTruong,
        year: "1938",
        details: "Tác phẩm lý luận kinh điển 'Vấn đề dân cày' do hai đồng chí Trường Chinh và Võ Nguyên Giáp biên soạn dưới bút danh Qua Ninh và Vân Đình xuất bản năm 1938. Tác phẩm phân tích một cách toàn diện, sâu sắc hiện trạng bóc lột ruộng đất tàn bạo của chế độ thực dân phong kiến đối với nông dân Đông Dương. Tác phẩm chỉ rõ nông dân là động lực chủ yếu của cách mạng, muốn giải phóng dân tộc phải giải phóng giai cấp nông dân khỏi xiềng xích nô dịch, định hướng chiến lược liên minh công nông vững chắc cho cách mạng nước nhà."
      },
      {
        title: "Đảng cảnh báo mối đe dọa chủ nghĩa phát xít",
        part: "Phần II · Trưng bày vòm ngoài",
        url: imgS1PhatXit,
        year: "1938–1939",
        details: "Nhận thức rõ nguy cơ Chiến tranh thế giới thứ hai sắp bùng nổ, Đảng Cộng sản Đông Dương liên tục phát hành các văn kiện và bài báo cảnh báo nhân dân về mối đe dọa cực kỳ nguy hiểm của chủ nghĩa phát xít Đức, Ý, Nhật. Đảng kêu gọi quần chúng nhân dân cảnh giác trước âm mưu bắt lính, trưng thu tài sản phục vụ chiến tranh của thực dân Pháp, đồng thời định hướng nhân dân đoàn kết trong Mặt trận Dân chủ để bảo vệ hòa bình, dân chủ và chuẩn bị đón thời cơ cách mạng lớn đang cận kề."
      },
      {
        title: "Chuyển hướng hoạt động rút vào bí mật (1939)",
        part: "Phần II · Trưng bày vòm ngoài",
        url: imgS4ChienTranh,
        year: "9/1939",
        details: "Tháng 9/1939, Chiến tranh thế giới thứ hai bùng nổ ở châu Âu. Chính quyền thực dân Pháp lập tức ban bố tình trạng khẩn cấp thời chiến, đóng cửa các tòa báo cách mạng, cấm mọi cuộc hội họp công khai và tiến hành khủng bố trắng tàn khốc đối với các lực lượng dân chủ. Nhờ sự chuẩn bị chu đáo và nhạy bén chính trị, Đảng đã nhanh chóng rút các cán bộ nòng cốt vào hoạt động bí mật, chuyển trọng tâm từ đấu tranh công khai hợp pháp sang đấu tranh bí mật và chuẩn bị xây dựng lực lượng vũ trang giải phóng."
      }
    ];

    const setupSlotsForMesh = (mesh: THREE.Mesh, dataList: any[], prefix: string) => {
      const geometry = mesh.geometry;
      if (!geometry.index) return;

      const indices = geometry.index.array;
      const positions = geometry.attributes.position.array;
      const numTriangles = indices.length / 3;
      const triangles: { indices: number[]; center: THREE.Vector3 }[] = [];

      for (let i = 0; i < numTriangles; i++) {
        const i0 = indices[i * 3];
        const i1 = indices[i * 3 + 1];
        const i2 = indices[i * 3 + 2];

        const p0 = new THREE.Vector3(positions[i0 * 3], positions[i0 * 3 + 1], positions[i0 * 3 + 2]).applyMatrix4(mesh.matrixWorld);
        const p1 = new THREE.Vector3(positions[i1 * 3], positions[i1 * 3 + 1], positions[i1 * 3 + 2]).applyMatrix4(mesh.matrixWorld);
        const p2 = new THREE.Vector3(positions[i2 * 3], positions[i2 * 3 + 1], positions[i2 * 3 + 2]).applyMatrix4(mesh.matrixWorld);

        const center = new THREE.Vector3().add(p0).add(p1).add(p2).multiplyScalar(1 / 3);
        triangles.push({ indices: [i0, i1, i2], center });
      }

      // Proximity clustering (group triangles closer than 1.5m)
      const visited = new Set<number>();
      const clusters: typeof triangles[] = [];

      for (let i = 0; i < triangles.length; i++) {
        if (visited.has(i)) continue;

        const cluster: typeof triangles = [];
        const queue = [triangles[i]];
        visited.add(i);

        while (queue.length > 0) {
          const tri = queue.shift()!;
          cluster.push(tri);

          for (let j = 0; j < triangles.length; j++) {
            if (visited.has(j)) continue;

            const tri2 = triangles[j];
            const dist = tri.center.distanceTo(tri2.center);

            if (dist < 1.5) {
              visited.add(j);
              queue.push(tri2);
            }
          }
        }
        clusters.push(cluster);
      }

      // Map clusters to slots center and dimensions
      const slots = clusters.map((cluster) => {
        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;
        let minZ = Infinity, maxZ = -Infinity;

        const uniqueIdx = new Set<number>();
        cluster.forEach((tri) => tri.indices.forEach((idx) => uniqueIdx.add(idx)));

        uniqueIdx.forEach((idx) => {
          const v = new THREE.Vector3(positions[idx * 3], positions[idx * 3 + 1], positions[idx * 3 + 2]).applyMatrix4(mesh.matrixWorld);
          if (v.x < minX) minX = v.x;
          if (v.x > maxX) maxX = v.x;
          if (v.y < minY) minY = v.y;
          if (v.y > maxY) maxY = v.y;
          if (v.z < minZ) minZ = v.z;
          if (v.z > maxZ) maxZ = v.z;
        });

        const center = new THREE.Vector3((minX + maxX) / 2, (minY + maxY) / 2, (minZ + maxZ) / 2);
        const height = maxY - minY;
        const width = (maxX - minX) > (maxZ - minZ) ? (maxX - minX) : (maxZ - minZ);

        // Compute orientation normal pointing directly to/from center
        const normal = new THREE.Vector3();
        if (prefix === "inside001") {
          normal.set(center.x, 0, center.z).normalize();
        } else {
          // Both inside and outside wall segments face towards the corridor/center
          normal.set(-center.x, 0, -center.z).normalize();
        }

        const angle = Math.atan2(center.x, center.z);
        return { center, width, height, normal, angle };
      });

      // Sort clockwise
      slots.sort((a, b) => a.angle - b.angle);

      // Create new picture meshes
      slots.forEach((slot, index) => {
        const data = dataList[index];
        if (!data) return; // Skip if no painting assigned

        const group = new THREE.Group();
        const fWidth = slot.width > 0.5 ? slot.width : 1.85;
        const fHeight = slot.height > 0.5 ? slot.height : 1.25;

        // 1. Frame mesh
        const frameGeo = new THREE.BoxGeometry(fWidth + 0.12, fHeight + 0.12, 0.04);
        const frameMat = new THREE.MeshStandardMaterial({
          color: 0xc49b45, // Classic golden-yellow frame
          roughness: 0.35,
          metalness: 0.65
        });
        const frameMesh = new THREE.Mesh(frameGeo, frameMat);
        frameMesh.castShadow = true;
        frameMesh.receiveShadow = true;
        group.add(frameMesh);

        // Mat mesh (cream border inside frame)
        const matGeo = new THREE.BoxGeometry(fWidth + 0.04, fHeight + 0.04, 0.042);
        const matMat = new THREE.MeshBasicMaterial({ color: 0xf5ead0 });
        const matMesh = new THREE.Mesh(matGeo, matMat);
        group.add(matMesh);

        // 2. Picture plane
        const canvasGeo = new THREE.PlaneGeometry(fWidth, fHeight);
        const tex = textureLoader.load(data.url);
        tex.colorSpace = THREE.SRGBColorSpace;
        const canvasMat = new THREE.MeshBasicMaterial({
          map: tex,
          side: THREE.DoubleSide
        });
        const canvasMesh = new THREE.Mesh(canvasGeo, canvasMat);
        canvasMesh.position.z = 0.023; // Offset forward slightly
        group.add(canvasMesh);

        // Spawning position slightly offset outwards along normal vector
        const spawnPosition = new THREE.Vector3().addVectors(slot.center, new THREE.Vector3().copy(slot.normal).multiplyScalar(0.022));
        group.position.copy(spawnPosition);

        const lookTarget = new THREE.Vector3().addVectors(spawnPosition, slot.normal);
        group.lookAt(lookTarget);

        scene.add(group);

        // Save exhibits meta for distance checks
        exhibits.push({
          id: exhibits.length + 1,
          title: data.title,
          part: data.part,
          url: data.url,
          width: fWidth,
          height: fHeight,
          position: [spawnPosition.x, spawnPosition.y, spawnPosition.z],
          rotation: [group.rotation.x, group.rotation.y, group.rotation.z],
          details: data.details,
          year: data.year,
          author: data.author
        });
      });
    };

    // ── Load GLB ────────────────────────────────────────────────────────
    const loader = new GLTFLoader();
    let galleryModel: THREE.Group | null = null;

    loader.load(
      galleryGlbUrl,
      (gltf) => {
        galleryModel = gltf.scene;
        galleryModel.position.set(0, 0, 0);

        galleryModel.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            // Setup custom paintings on wall slot geometry
            if (mesh.name === "PaitingsInside_Painting_0") {
              mesh.updateMatrixWorld(true);
              setupSlotsForMesh(mesh, insideExhibitsData, "inside");
              mesh.visible = false;
            } else if (mesh.name === "PaitingsInside.001_Painting_0") {
              mesh.updateMatrixWorld(true);
              setupSlotsForMesh(mesh, inside001ExhibitsData, "inside001");
              mesh.visible = false;
            } else if (mesh.name === "PaitingsOutside_Painting_0") {
              // Now populate the outside dome walls as well!
              mesh.updateMatrixWorld(true);
              setupSlotsForMesh(mesh, outsideExhibitsData, "outside");
              mesh.visible = false;
            } else if (mesh.material) {
              // Warm yellowish styling to walls and materials
              const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              materials.forEach((mat) => {
                if (mat instanceof THREE.MeshStandardMaterial) {
                  const c = mat.color;
                  const hsl = { h: 0, s: 0, l: 0 };
                  c.getHSL(hsl);
                  // Apply retro warm yellow tone to walls
                  if (hsl.l > 0.05) {
                    mat.color.set("#d9c8a9");
                    mat.roughness = 0.85;
                    mat.metalness = 0.02;
                  } else {
                    mat.roughness = Math.max(mat.roughness, 0.45);
                    mat.metalness = Math.min(mat.metalness, 0.4);
                  }
                  mat.needsUpdate = true;
                }
              });
            }
          }
        });

        scene.add(galleryModel);
        setLoading(false);
      },
      (xhr) => {
        if (xhr.total) {
          setProgress(Math.round((xhr.loaded / xhr.total) * 100));
        } else {
          // Fallback approximate total size 44.6MB
          setProgress(Math.min(Math.round((xhr.loaded / 44630060) * 100), 99));
        }
      },
      (err) => {
        console.error("Error loading GLB model:", err);
        setError("Không thể tải mô hình 3D. Vui lòng thử lại sau.");
        setLoading(false);
      }
    );

    // Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // ── Animation loop ──────────────────────────────────────────────────
    let currentActive: Exhibit | null = null;
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Camera light follows player
      camLight.position.copy(camera.position);

      // Movement logic
      if (!focusedExhibitRef.current) {
        const moveSpeed = 0.075;
        const moveDirection = new THREE.Vector3();

        const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
        forward.y = 0;
        forward.normalize();

        const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
        right.y = 0;
        right.normalize();

        if (keysPressed["w"] || keysPressed["arrowup"]) moveDirection.add(forward);
        if (keysPressed["s"] || keysPressed["arrowdown"]) moveDirection.sub(forward);
        if (keysPressed["a"] || keysPressed["arrowleft"]) moveDirection.sub(right);
        if (keysPressed["d"] || keysPressed["arrowright"]) moveDirection.add(right);

        if (moveDirection.lengthSq() > 0) {
          moveDirection.normalize().multiplyScalar(moveSpeed);
          const newPos = new THREE.Vector3().addVectors(camera.position, moveDirection);

          // Circular boundary collision check (radius 8.2m)
          const dist = Math.sqrt(newPos.x * newPos.x + newPos.z * newPos.z);
          if (dist < 8.2) {
            camera.position.add(moveDirection);
          }
        }
      }

      // Constrain height
      camera.position.y = 1.8;

      // Proximity check
      let nearestEx: Exhibit | null = null;
      let minDist = 2.5; // Radius limit to display prompt card

      exhibits.forEach((ex) => {
        const exPos = new THREE.Vector3(ex.position[0], ex.position[1], ex.position[2]);
        const d = camera.position.distanceTo(exPos);
        if (d < minDist) {
          minDist = d;
          nearestEx = ex;
        }
      });

      if (currentActive !== nearestEx) {
        currentActive = nearestEx;
        nearExhibitRef.current = nearestEx;
        setNearExhibit(nearestEx);
      }

      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ─────────────────────────────────────────────────────────
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);

      domElement.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      domElement.removeEventListener("touchstart", handleTouchStart);
      domElement.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }

      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#2a1e16",
        display: "flex",
        flexDirection: "column",
        color: "#2b1e15",
        fontFamily: C.sans,
      }}
    >
      {/* 3D Render Mount */}
      <div ref={mountRef} style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }} />

      {/* Header HUD Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "16px 24px",
          background: "linear-gradient(to bottom, rgba(42,30,22,0.92) 0%, rgba(42,30,22,0) 100%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 50,
        }}
      >
        <div style={{ pointerEvents: "auto" }}>
          <h2 style={{ fontFamily: C.serif, fontSize: 24, fontWeight: 900, color: C.accent, margin: 0, textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
            Bảo Tàng Lịch Sử 3D
          </h2>
          <p style={{ fontSize: 13, color: "#f5ead0", opacity: 0.85, margin: "4px 0 0 0" }}>
            Tư liệu ảnh phong trào dân chủ Đông Dương (1936–1939)
          </p>
        </div>

        <div style={{ display: "flex", gap: 12, pointerEvents: "auto" }}>
          <button
            onClick={() => setShowHelp(!showHelp)}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: `1px solid rgba(201,164,92,0.3)`,
              color: C.accent,
              padding: "10px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: C.tr,
            }}
            title="Hướng dẫn di chuyển"
          >
            <HelpCircle size={20} />
          </button>
          
          <button
            onClick={onBack}
            style={{
              background: C.red,
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 4,
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: C.tr,
              boxShadow: "0 4px 12px rgba(122,26,28,0.3)",
            }}
          >
            <X size={18} />
            Thoát bảo tàng
          </button>
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#1c120a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
          }}
        >
          <Loader2 className="animate-spin" size={48} style={{ color: C.accent, marginBottom: 20 }} />
          <h3 style={{ fontFamily: C.serif, fontSize: 22, color: C.accent, margin: "0 0 8px 0" }}>
            Đang khởi tạo bảo tàng 3D...
          </h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>
            Kích thước mô hình: ~44.6 MB
          </p>
          <div style={{ width: 240, height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3, overflow: "hidden", position: "relative" }}>
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: C.accent,
                transition: "width 0.2s ease-out",
              }}
            />
          </div>
          <span style={{ fontSize: 13, color: C.accent, fontWeight: 700, marginTop: 8 }}>
            {progress}% hoàn tất
          </span>
        </div>
      )}

      {/* Error Overlay */}
      {error && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#1c120a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 101,
          }}
        >
          <h3 style={{ fontFamily: C.serif, fontSize: 22, color: C.red, margin: "0 0 12px 0" }}>
            Có lỗi xảy ra
          </h3>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
            {error}
          </p>
          <button
            onClick={onBack}
            style={{
              background: C.red,
              color: "#fff",
              padding: "10px 20px",
              borderRadius: 4,
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            Quay lại
          </button>
        </div>
      )}

      {/* Active Exhibit Proximity Card */}
      {nearExhibit && !focusedExhibit && !loading && !error && (
        <div
          className="no-drag-ui"
          onClick={() => setFocusedExhibit(nearExhibit)}
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            maxWidth: 500,
            background: "rgba(30, 21, 16, 0.95)",
            backdropFilter: "blur(10px)",
            border: `1.5px solid ${C.accent}`,
            borderRadius: 6,
            padding: "16px 20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
            zIndex: 40,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            transition: "all 0.3s ease",
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 800, color: C.accent, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>
            {nearExhibit.part}
          </span>
          <h4 style={{ fontFamily: C.serif, fontSize: 16, fontWeight: 800, color: "#fff", margin: "0 0 10px 0" }}>
            {nearExhibit.title}
          </h4>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: C.red, color: "#fff", padding: "6px 14px", borderRadius: 4, fontSize: 12, fontWeight: 700 }}>
            <span>Nhấn phím [F] hoặc Chạm để thuyết minh chi tiết</span>
          </div>
        </div>
      )}

      {/* Exhibit Detail Modal */}
      {focusedExhibit && !loading && !error && (
        <div
          className="no-drag-ui"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10, 6, 2, 0.88)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              maxWidth: 920,
              maxHeight: "85vh",
              background: "linear-gradient(135deg, #faf6ed 0%, #f0e3c8 100%)",
              border: `3.5px solid ${C.accent}`,
              boxShadow: "0 25px 60px rgba(0,0,0,0.85)",
              overflowY: "auto",
              position: "relative",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setFocusedExhibit(null)}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "rgba(0,0,0,0.78)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                cursor: "pointer",
                zIndex: 110,
              }}
            >
              <X size={20} />
            </button>

            {/* Left side: Framed Image */}
            <div
              style={{
                flex: "1 1 420px",
                background: "#1c1510",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 320,
                padding: 28,
              }}
            >
              <div
                style={{
                  padding: 12,
                  background: "linear-gradient(135deg, #e5c07b 0%, #c9a45c 30%, #9d7d3d 60%, #c9a45c 80%, #e5c07b 100%)",
                  boxShadow: "0 8px 36px rgba(0,0,0,0.7), inset 0 0 12px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src={focusedExhibit.url}
                  alt={focusedExhibit.title}
                  style={{
                    display: "block",
                    width: "100%",
                    maxWidth: 350,
                    height: "auto",
                    maxHeight: "50vh",
                    objectFit: "contain",
                    filter: "sepia(0.08) contrast(1.06)",
                  }}
                />
              </div>
            </div>

            {/* Right side: details */}
            <div
              style={{
                flex: "1 1 350px",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, borderBottom: `2.5px solid ${C.red}`, paddingBottom: 12, marginBottom: 18 }}>
                <span style={{ fontFamily: C.sans, fontSize: 15, fontWeight: 700, color: C.red, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {focusedExhibit.year}
                </span>
                <span style={{
                  background: "rgba(139,26,26,0.09)", border: `1px solid rgba(139,26,26,0.25)`,
                  padding: "2px 10px", fontFamily: C.sans, fontSize: 10, fontWeight: 700,
                  color: C.red, textTransform: "uppercase", letterSpacing: "0.08em",
                }}>
                  Tư liệu lịch sử
                </span>
              </div>

              <h3 style={{ fontFamily: C.serif, fontSize: 21, fontWeight: 900, color: C.dark, margin: "0 0 10px 0", lineHeight: 1.3 }}>
                {focusedExhibit.title}
              </h3>

              {focusedExhibit.author && (
                <p style={{ fontFamily: C.sans, fontSize: 11, fontWeight: 700, color: C.brown, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>
                  ✦ Tác giả: {focusedExhibit.author}
                </p>
              )}

              <div style={{ height: 1, background: `linear-gradient(to right, ${C.accent}55, transparent)`, marginBottom: 14 }}/>

              <p
                style={{
                  fontFamily: C.body,
                  fontSize: 15.5,
                  color: C.dark,
                  opacity: 0.88,
                  lineHeight: 1.75,
                  margin: 0,
                  textAlign: "justify",
                }}
              >
                {focusedExhibit.details}
              </p>

              <div style={{ marginTop: "28px" }}>
                <button
                  onClick={() => setFocusedExhibit(null)}
                  style={{
                    background: C.dark,
                    color: "#fff",
                    border: "none",
                    padding: "10px 24px",
                    borderRadius: 4,
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    transition: C.tr,
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = C.red}
                  onMouseLeave={e => e.currentTarget.style.background = C.dark}
                >
                  Quay lại tham quan [F]
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Control Instructions Panel */}
      {showHelp && !loading && !error && (
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 24,
            width: 320,
            background: "rgba(30,21,16,0.88)",
            backdropFilter: "blur(8px)",
            border: `1.5px solid rgba(201,164,92,0.3)`,
            borderRadius: 6,
            padding: "16px 20px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
            pointerEvents: "auto",
            zIndex: 45,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <h4 style={{ fontFamily: C.serif, fontSize: 16, fontWeight: 800, color: C.accent, margin: 0 }}>
              Hướng dẫn di chuyển
            </h4>
            <button
              onClick={() => setShowHelp(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "rgba(255,255,255,0.5)",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <X size={16} />
            </button>
          </div>
          <ul style={{ paddingLeft: 16, margin: 0, fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.85)" }}>
            <li style={{ marginBottom: 6 }}>
              <strong style={{ color: C.accent }}>Phím WASD / Mũi tên:</strong> Di chuyển (Walk)
            </li>
            <li style={{ marginBottom: 6 }}>
              <strong style={{ color: C.accent }}>Kéo chuột / Vuốt màn hình:</strong> Xoay hướng nhìn (Look around)
            </li>
            <li style={{ marginBottom: 6 }}>
              <strong style={{ color: C.accent }}>Phím F / Click bảng:</strong> Đọc thuyết minh chi tiết
            </li>
            <li>
              <strong style={{ color: C.accent }}>Phím ESC / F:</strong> Thoát giao diện thuyết minh
            </li>
          </ul>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 12, paddingTop: 10, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
            * Di chuyển lại gần bất kỳ bức tranh nào trong khoảng 2.5m để tương tác với tư liệu.
          </div>
        </div>
      )}

      {/* Quick Walk Guideline Bottom-Right */}
      {!loading && !error && !nearExhibit && (
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 24,
            background: "rgba(0,0,0,0.55)",
            padding: "8px 14px",
            borderRadius: 4,
            fontSize: 12,
            color: "rgba(255,255,255,0.7)",
            pointerEvents: "none",
            zIndex: 35,
          }}
        >
          Sử dụng WASD để di chuyển, kéo chuột để xoay đầu nhìn xung quanh
        </div>
      )}
    </div>
  );
}
