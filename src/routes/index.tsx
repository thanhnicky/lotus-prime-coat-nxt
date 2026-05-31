import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, ChevronDown, Menu, Phone, X } from "lucide-react";
import heroImg from "@/assets/hero-steel-worker.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lotus Paint — Metal Coat | Sơn kim loại hệ nước cao cấp" },
      { name: "description", content: "Sơn kim loại gốc nước Lotus Metal Coat — không mùi, không bắt lửa, đạt chuẩn EN71-3, ROHS, ASTM F963. Bảo vệ kim loại bền vững, an toàn." },
      { property: "og:title", content: "Lotus Paint — Metal Coat" },
      { property: "og:description", content: "Hệ sơn kim loại gốc nước — thay thế hoàn toàn sơn dung môi." },
    ],
  }),
  component: LandingPage,
});

const GREEN = "#1E6B31";
const ORANGE = "#E8711A";

function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar scrolled={scrolled} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Hero />
      <WhySwitch />
      <TrustNumbers />
      <Solutions />
      <Products />
      <OrderForm />
      <Projects />
      <Certificates />
      <FAQ />
      <FooterCTA />
      <FooterBottom />
      <FloatingButtons />
    </div>
  );
}

/* ============ NAV ============ */
function Navbar({ scrolled, mobileOpen, setMobileOpen }: { scrolled: boolean; mobileOpen: boolean; setMobileOpen: (v: boolean) => void }) {
  const links = ["Giải pháp", "Sản phẩm", "Công trình", "Chứng nhận", "Hỏi đáp"];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 border-b border-[#E5E7EB] bg-white transition-all ${
        scrolled ? "backdrop-blur-md bg-white/85" : ""
      }`}
    >
      <div className="mx-auto max-w-[1120px] h-full px-6 flex items-center justify-between">
        <a href="/" className="flex items-baseline">
          <span className="text-2xl font-bold" style={{ color: GREEN }}>Lotus</span>
          <span className="text-2xl font-bold ml-1" style={{ color: ORANGE }}>Paint</span>
          <span className="text-sm font-normal text-[#9CA3AF] ml-2">· Metal Coat</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l}`} className="text-sm font-medium text-gray-600 hover:text-[#1E6B31] transition">
              {l}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a href="tel:0943966662" className="text-sm font-semibold text-gray-700 mr-4">0943 966 662</a>
          <a
            href="https://zalo.me/0943966662"
            className="border border-[#1E6B31] text-[#1E6B31] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1E6B31] hover:text-white transition-all duration-200"
          >
            Zalo kỹ thuật
          </a>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E7EB] px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l} href={`#${l}`} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700">
              {l}
            </a>
          ))}
          <a href="tel:0943966662" className="block text-sm font-semibold text-gray-700">0943 966 662</a>
          <a href="https://zalo.me/0943966662" className="block text-center border border-[#1E6B31] text-[#1E6B31] text-sm font-semibold px-4 py-2 rounded-lg">
            Zalo kỹ thuật
          </a>
        </div>
      )}
    </header>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section className="bg-[#FAFAF8] pt-32 md:pt-40 pb-20 md:pb-24">
      <div className="mx-auto max-w-[1120px] px-6 grid lg:grid-cols-[52%_48%] gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-px bg-[#1E6B31]" />
            <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#1E6B31]">
              Sơn kim loại hệ nước
            </span>
          </div>

          <h1 className="font-serif mb-6 leading-[1.1]" style={{ fontSize: "clamp(36px, 5vw, 52px)" }}>
            <span className="block font-semibold text-[#111111]">Bảo vệ kim loại bền vững</span>
            <span className="block italic font-normal text-[#374151]">— an toàn, thân thiện.</span>
          </h1>

          <p className="text-base text-[#6B7280] leading-7 mb-10">
            Hệ sơn gốc nước thay thế hoàn toàn sơn dung môi.<br />
            Không mùi · Không bắt lửa · Đạt chuẩn EN71-3 · ROHS · ASTM F963.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#dat-hang"
              className="bg-[#E8711A] text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all hover:brightness-110 hover:-translate-y-px"
              style={{ boxShadow: "0 4px 20px rgba(232,113,26,0.3)" }}
            >
              Chọn combo đặt hàng
            </a>
            <a
              href="https://zalo.me/0943966662"
              className="border-2 border-[#1E6B31] text-[#1E6B31] font-semibold px-7 py-3.5 rounded-xl text-sm hover:bg-[#1E6B31] hover:text-white transition-all duration-200"
            >
              Tư vấn kỹ thuật Zalo
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-8 border-t border-[#E5E7EB]">
            {["12+ năm kinh nghiệm", "Giao hàng toàn quốc", "Hoàn tiền 100%"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Check size={16} className="text-[#1E6B31]" strokeWidth={2.5} />
                <span className="text-sm text-[#6B7280]">{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden aspect-[4/3]">
          <img src={heroImg} alt="Thợ sơn kim loại hệ nước Lotus Metal Coat" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-5 py-3.5 flex items-center gap-3">
            <Check size={18} className="text-[#1E6B31]" strokeWidth={2.5} />
            <div>
              <div className="font-semibold text-sm text-[#111111]">Đạt chuẩn quốc tế</div>
              <div className="text-xs text-[#6B7280] mt-0.5">EN71-3 · ROHS · ASTM F963</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION HEADER ============ */
function SectionHeader({ label, h2, italic, sub }: { label: string; h2: string; italic?: string; sub?: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-8 h-px bg-[#1E6B31]" />
        <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#1E6B31]">{label}</span>
        <div className="w-8 h-px bg-[#1E6B31]" />
      </div>
      <h2 className="font-serif font-semibold text-[#111111] leading-[1.15]" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>
        {h2}
        {italic && <span className="block italic font-normal">{italic}</span>}
      </h2>
      {sub && <p className="text-base text-[#6B7280] mt-3 max-w-lg mx-auto">{sub}</p>}
    </div>
  );
}

/* ============ WHY SWITCH ============ */
function WhySwitch() {
  const items = [
    { i: "🚫", t: "Không mùi độc hại", d: "Thi công trong xưởng kín an toàn. Không cần bảo hộ đặc biệt." },
    { i: "🔥", t: "Không bắt lửa, không nổ", d: "Lưu kho và vận chuyển an toàn. Đạt chuẩn PCCC khu công nghiệp." },
    { i: "🌿", t: "Đạt chuẩn môi trường", d: "VOC thấp, đạt EN71-3, ROHS, ASTM F963. Đáp ứng xuất khẩu quốc tế." },
    { i: "💪", t: "Bám dính vượt trội trên mạ kẽm", d: "Bám thẳng sắt mạ kẽm không cần xử lý phức tạp." },
    { i: "🏭", t: "Nhiều nhà máy FDI yêu cầu", d: "Xu hướng bắt buộc. Chuyển sớm là lợi thế cạnh tranh." },
  ];
  return (
    <section className="bg-white py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeader
          label="XU HƯỚNG TẤT YẾU"
          h2="Vì sao phải chuyển sang sơn hệ nước?"
          sub="Tiêu chuẩn an toàn và môi trường đang định hình lại ngành sơn công nghiệp."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {items.slice(0, 3).map((it) => (
            <Card key={it.t} {...it} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-5 md:max-w-[calc(66.66%-0.625rem)] md:mx-auto">
          {items.slice(3).map((it) => (
            <Card key={it.t} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
function Card({ i, t, d }: { i: string; t: string; d: string }) {
  return (
    <div className="border border-[#E5E7EB] rounded-2xl p-8 hover:border-[#1E6B31] transition-all duration-200">
      <div className="text-2xl mb-5">{i}</div>
      <div className="font-semibold text-[#111111] text-base mb-2">{t}</div>
      <div className="text-sm text-[#6B7280] leading-6">{d}</div>
    </div>
  );
}

/* ============ TRUST NUMBERS ============ */
function TrustNumbers() {
  const stats = [
    { n: "12", u: "+", l: "Năm kinh nghiệm" },
    { n: "200", u: "+", l: "Công trình tin dùng" },
    { n: "4", u: "", l: "Dòng sản phẩm Metal" },
    { n: "100", u: "%", l: "Gốc nước — không dung môi" },
  ];
  return (
    <section className="bg-[#111111] py-20">
      <div className="mx-auto max-w-[1120px] px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-10">
        {stats.map((s, idx) => (
          <div key={s.l} className={`text-center ${idx > 0 ? "lg:border-l lg:border-white/15" : ""}`}>
            <div className="font-serif font-bold text-white leading-none" style={{ fontSize: "clamp(56px, 6vw, 80px)" }}>
              {s.n}
              <span className="font-normal text-[#86EFAC]">{s.u}</span>
            </div>
            <div className="text-xs font-medium text-white/60 uppercase tracking-widest mt-3">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ SOLUTIONS ============ */
function Solutions() {
  return (
    <section id="Giải pháp" className="bg-[#F2F8F4] py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeader
          label="HỆ GIẢI PHÁP"
          h2="Không chỉ bán sản phẩm —"
          italic="Lotus bán giải pháp hoàn chỉnh."
        />
        <div className="grid lg:grid-cols-3 gap-6">
          <SolutionCard
            badge="HỆ 1K"
            title="Lót + Phủ màu 1K"
            fit={["Kết cấu thép nhà xưởng", "Khung thép, tôn mạ kẽm"]}
            steps={["Sơn lót Metal Coat Primer", "Sơn phủ Finish 1K"]}
          />
          <SolutionCard
            badge="HỆ 2K"
            title="Lót + Phủ cao cấp 2K"
            fit={["Máy móc công nghiệp", "Ngoài trời khắc nghiệt"]}
            steps={["Sơn lót Metal Coat Primer", "Sơn phủ Finish 2K (pha LH5 15%)"]}
          />
          <SolutionCard
            hero
            badge="2in1 DTM"
            title="Vừa lót, vừa phủ — 1 lớp duy nhất"
            pills={["Không cần lót riêng", "1 bước thi công", "Bám thẳng mạ kẽm", "Nhanh khô"]}
            fit={["Sắt hộp mạ kẽm", "Cổng sắt, hàng rào", "Khung cửa thép nhẹ"]}
            steps={["Sơn thẳng — không cần lót riêng"]}
            stepLabel="DTM"
          />
        </div>
      </div>
    </section>
  );
}
function SolutionCard({
  badge, title, fit, steps, pills, hero, stepLabel,
}: {
  badge: string; title: string; fit: string[]; steps: string[]; pills?: string[]; hero?: boolean; stepLabel?: string;
}) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-8 ${
        hero ? "border-2 border-[#E8711A] border-t-[3px] border-t-[#E8711A]" : "border border-[#E5E7EB] border-t-[3px] border-t-[#1E6B31]"
      }`}
    >
      {hero && (
        <div className="absolute top-4 right-4 bg-[#E8711A] text-white text-xs font-bold px-3 py-1 rounded-full">
          ⭐ Bán chạy nhất
        </div>
      )}
      <span
        className={`inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-5 ${
          hero ? "bg-[#FEF3E8] text-[#E8711A]" : "bg-[#F2F8F4] text-[#1E6B31]"
        }`}
      >
        {badge}
      </span>
      <h3 className="font-sans font-bold text-xl text-[#111111] mb-4">{title}</h3>

      {pills && (
        <div className="flex flex-wrap gap-2 my-5">
          {pills.map((p) => (
            <span key={p} className="bg-[#FEF3E8] text-[#C2590A] text-xs font-semibold px-3 py-1 rounded-full border border-[#FDDBB8]">
              {p}
            </span>
          ))}
        </div>
      )}

      <div className="text-xs font-bold tracking-[0.1em] text-[#9CA3AF] uppercase mb-2">PHÙ HỢP:</div>
      <ul className="space-y-1.5">
        {fit.map((f) => (
          <li key={f} className="text-sm text-[#374151]">
            <span className="text-[#1E6B31]">→ </span>{f}
          </li>
        ))}
      </ul>

      <div className="border-t border-[#E5E7EB] my-6" />

      <div className="space-y-2">
        {steps.map((s, i) => (
          <div key={s} className="flex items-start gap-1">
            <span className={`${hero ? "bg-[#E8711A]" : "bg-[#1E6B31]"} text-white text-xs rounded-full px-2 py-0.5 mr-2 font-semibold`}>
              {hero ? stepLabel : String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-[#374151]">{s}</span>
          </div>
        ))}
      </div>

      {hero ? (
        <a
          href="#dat-hang"
          className="block text-center bg-[#E8711A] text-white font-bold py-3 rounded-xl mt-6"
          style={{ boxShadow: "0 4px 16px rgba(232,113,26,0.3)" }}
        >
          🛒 Đặt ngay sản phẩm Hero
        </a>
      ) : (
        <a href="#dat-hang" className="text-sm font-semibold text-[#1E6B31] hover:underline mt-6 inline-block">
          Xem combo & đặt hàng →
        </a>
      )}
    </div>
  );
}

/* ============ PRODUCTS ============ */
function Products() {
  const products = [
    {
      tag: "PRIMER", name: "Metal Coat Primer",
      desc: "Lớp nền chống gỉ tối ưu cho mọi bề mặt kim loại.",
      features: ["Chống ăn mòn gỉ sét tối ưu", "Bám dính thép, nhôm, mạ kẽm", "Bền UV trong nhà & ngoài trời", "Không mùi, không cháy nổ"],
      price: "217,080₫",
    },
    {
      tag: "FINISH 1K", name: "Metal Coat Finish 1K",
      desc: "Lớp màu hoàn thiện, trang trí và bảo vệ lâu bền.",
      features: ["Bám tốt trên mọi kim loại kể cả mạ kẽm", "Chống ăn mòn kháng UV", "Không cháy nổ, an toàn lưu trữ", "Trong nhà & ngoài trời"],
      price: "237,600₫",
    },
    {
      tag: "FINISH 2K", name: "Metal Coat Finish 2K",
      desc: "Màng sơn cứng bóng cho bề mặt chịu lực và thời tiết khắc nghiệt.",
      features: ["Màng bóng nhẵn bám dính cao", "Kháng nước, kiềm, trầy xước", "Bền thời tiết khắc nghiệt", "Phù hợp máy móc công nghiệp"],
      price: "199,800₫",
      note: "Pha đóng rắn LH5 tỷ lệ 15%",
    },
    {
      tag: "2in1 DTM ⭐", name: "Metal Coat 2in1", hero: true,
      desc: "1 lớp duy nhất — vừa lót chống gỉ, vừa phủ màu hoàn thiện.",
      features: ["Không cần lót riêng, tiết kiệm chi phí", "Bám thẳng mạ kẽm", "Nhanh khô, màng bóng đẹp", "Chống gỉ kháng UV bền thời tiết"],
      price: "254,880₫",
    },
  ];
  return (
    <section id="Sản phẩm" className="bg-white py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeader label="DANH MỤC SẢN PHẨM" h2="Hệ sơn kim loại Lotus Metal Coat" />
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className={`bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#1E6B31] transition-all duration-200 ${
                p.hero ? "ring-2 ring-[#E8711A]/20" : ""
              }`}
            >
              <div className="relative h-48 bg-[#F2F8F4] flex items-center justify-center">
                <div className="absolute top-3 left-3 text-xs font-bold bg-white text-[#1E6B31] px-2 py-1 rounded-md">
                  {p.tag}
                </div>
                <span className="font-serif italic text-2xl text-[#1E6B31]/60 px-6 text-center">{p.name}</span>
              </div>
              <div className="p-7">
                <div className="font-bold text-lg text-[#111111] mb-1">{p.name}</div>
                <div className="text-sm text-[#6B7280] mb-5">{p.desc}</div>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-[#1E6B31] font-bold text-xs mt-0.5 flex-shrink-0">→</span>
                      <span className="text-sm text-[#374151]">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-[#E5E7EB] mb-5" />
                <div className="flex justify-between items-center gap-3 flex-wrap">
                  <div>
                    <div className="font-serif font-bold text-2xl text-[#1E6B31]">{p.price}</div>
                    <div className="text-xs text-[#9CA3AF]">/ gói 5kg</div>
                    {p.note && <div className="italic text-xs text-[#9CA3AF] mt-1">{p.note}</div>}
                  </div>
                  <div className="flex gap-2">
                    <button className="border border-[#E5E7EB] text-[#9CA3AF] text-xs px-3 py-1.5 rounded-lg hover:border-[#1E6B31] hover:text-[#1E6B31] transition">
                      Xem TDS
                    </button>
                    <button className="bg-[#E8711A] text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                      Đặt mua
                    </button>
                  </div>
                </div>
                {p.hero && (
                  <a
                    href="#dat-hang"
                    className="block text-center bg-[#E8711A] text-white font-bold py-2.5 rounded-xl text-sm mt-4"
                  >
                    🛒 Đặt ngay
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ ORDER FORM ============ */
function OrderForm() {
  const [system, setSystem] = useState(2);
  const [size, setSize] = useState(1);
  const [qty, setQty] = useState(1);
  const prices = [180000, 950000, 3600000];
  const total = (prices[size] * qty).toLocaleString("vi-VN") + "₫";

  const systems = [
    { t: "Hệ 1K — Lót + Phủ màu 1K", s: "Kết cấu thép, khung thép, tôn mạ kẽm", tag: "Phổ biến", tagCls: "bg-[#F2F8F4] text-[#1E6B31]" },
    { t: "Hệ 2K — Lót + Phủ cao cấp", s: "Máy móc, ngoài trời, yêu cầu độ cứng cao", tag: "Kỹ thuật cao", tagCls: "bg-[#F2F8F4] text-[#1E6B31]" },
    { t: "2in1 DTM — 1 lớp, vừa lót vừa phủ ⭐", s: "Sắt hộp mạ kẽm, cổng sắt, cửa thép", tag: "Tiết kiệm nhất", tagCls: "bg-[#FEF3E8] text-[#C2590A]" },
  ];
  const sizes = [
    { t: "1 kg", s: "Dùng thử" },
    { t: "5 kg", s: "Phổ biến nhất" },
    { t: "20 kg", s: "Số lượng lớn" },
  ];

  const StepLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="text-xs font-bold tracking-[0.12em] uppercase text-[#1E6B31] flex items-center gap-3 mb-4">
      <span className="w-5 h-px bg-[#1E6B31] inline-block" />
      {children}
    </div>
  );

  return (
    <section id="dat-hang" className="bg-[#F2F8F4] py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeader
          label="ĐẶT HÀNG ONLINE"
          h2="Chọn combo — Giao tận nơi toàn quốc"
          sub="Miễn phí vận chuyển đơn từ 2,999,000₫ · Xác nhận trong 30 phút"
        />
        <form
          onSubmit={(e) => { e.preventDefault(); alert("Cảm ơn! Chúng tôi sẽ liên hệ trong 30 phút."); }}
          className="max-w-2xl mx-auto bg-white rounded-2xl p-6 md:p-10 border border-[#E5E7EB]"
        >
          {/* STEP 01 */}
          <StepLabel>01 · Chọn hệ sơn</StepLabel>
          <div className="space-y-3">
            {systems.map((it, i) => {
              const selected = system === i;
              return (
                <label
                  key={it.t}
                  className={`flex gap-4 items-center rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                    selected ? "border-[#E8711A] bg-[#FEFBF8] border" : "border border-[#E5E7EB] hover:border-[#1E6B31]/40"
                  }`}
                >
                  <input type="radio" className="sr-only" checked={selected} onChange={() => setSystem(i)} />
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selected ? "border-[#E8711A]" : "border-[#D1D5DB]"
                    }`}
                  >
                    {selected && <span className="w-2.5 h-2.5 rounded-full bg-[#E8711A]" />}
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-sm text-[#111111]">{it.t}</span>
                    <span className="block text-xs text-[#9CA3AF] mt-0.5">{it.s}</span>
                  </span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${it.tagCls}`}>{it.tag}</span>
                </label>
              );
            })}
          </div>

          {/* STEP 02 */}
          <div className="mt-8">
            <StepLabel>02 · Quy cách</StepLabel>
            <div className="grid grid-cols-3 gap-3">
              {sizes.map((s, i) => {
                const selected = size === i;
                return (
                  <button
                    type="button"
                    key={s.t}
                    onClick={() => setSize(i)}
                    className={`rounded-xl p-4 text-center transition-all duration-200 ${
                      selected ? "border-[#1E6B31] bg-[#F2F8F4] border" : "border border-[#E5E7EB] hover:border-[#1E6B31]/40"
                    }`}
                  >
                    <div className="font-semibold text-sm text-[#111111]">{s.t}</div>
                    <div className="text-xs text-[#9CA3AF]">{s.s}</div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <span className="text-sm font-semibold text-[#374151]">Số lượng:</span>
              <div className="border border-[#E5E7EB] rounded-xl overflow-hidden flex">
                <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2 font-semibold">−</button>
                <span className="px-4 py-2 font-semibold border-x border-[#E5E7EB] min-w-[3rem] text-center">{qty}</span>
                <button type="button" onClick={() => setQty(qty + 1)} className="px-4 py-2 font-semibold">+</button>
              </div>
              <div className="ml-auto text-right">
                <div className="text-xs text-[#9CA3AF]">Tạm tính:</div>
                <div className="font-bold text-lg text-[#E8711A]">{total}</div>
              </div>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="mt-8">
            <StepLabel>03 · Thông tin giao hàng</StepLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Họ và tên *" className={inputCls} />
              <input required type="tel" placeholder="Số điện thoại *" className={inputCls} />
            </div>
            <input required placeholder="Địa chỉ giao hàng *" className={`${inputCls} mt-4`} />
            <input placeholder="VD: RAL 7035 xám sáng (không bắt buộc)" className={`${inputCls} mt-4`} />
          </div>

          {/* Discount */}
          <div className="mt-6 flex gap-3 flex-wrap">
            <input placeholder="Mã ưu đãi: TRATRUOC" className={`${inputCls} flex-1 min-w-[200px]`} />
            <button type="button" className="border border-[#1E6B31] text-[#1E6B31] font-semibold px-4 py-3 rounded-xl text-sm">
              Áp dụng
            </button>
          </div>

          <div className="mt-4 bg-[#FEFBF8] border border-[#FDDBB8] rounded-xl p-4 flex items-center gap-3">
            <span className="text-xl">🏷️</span>
            <div>
              <div className="text-sm font-semibold text-[#92400E]">Mã TRATRUOC — giảm 10% thanh toán online</div>
              <div className="text-xs text-[#B45309] mt-0.5">Miễn ship đơn ≥ 2,999,000₫</div>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8 border-t border-[#E5E7EB] pt-8">
            <button
              type="submit"
              className="w-full bg-[#E8711A] text-white font-bold py-4 rounded-xl text-base transition-all hover:-translate-y-0.5"
              style={{ boxShadow: "0 4px 20px rgba(232,113,26,0.35)" }}
            >
              🛒 Đặt hàng ngay — Giao toàn quốc
            </button>
            <div className="mt-3 text-center text-xs text-[#9CA3AF]">⏱ Kỹ thuật viên xác nhận trong 30 phút</div>

            <div className="mt-8 mb-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-[#E5E7EB]" />
              <span className="text-xs text-[#9CA3AF]">Hoặc công trình lớn, nhà máy</span>
              <div className="flex-1 h-px bg-[#E5E7EB]" />
            </div>

            <a
              href="https://zalo.me/0943966662"
              className="block text-center border-2 border-[#1E6B31] text-[#1E6B31] font-semibold py-3.5 rounded-xl text-sm hover:bg-[#1E6B31] hover:text-white transition-all duration-200"
            >
              💬 Liên hệ kỹ thuật tư vấn qua Zalo
            </a>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8">
              {[
                ["🛡", "Hoàn tiền nếu không hài lòng"],
                ["🚚", "Giao hàng 2–5 ngày"],
                ["🔧", "Hỗ trợ kỹ thuật miễn phí"],
              ].map(([i, t]) => (
                <div key={t} className="text-center text-xs text-[#9CA3AF]">
                  <div className="text-lg">{i}</div>
                  <div>{t}</div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
const inputCls =
  "border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:border-[#1E6B31] focus:ring-2 focus:ring-[#1E6B31]/10 placeholder:text-[#D1D5DB]";

/* ============ PROJECTS ============ */
function Projects() {
  const items = [
    ["🏭", "Nhà xưởng KCN"],
    ["🔩", "Khung thép kết cấu"],
    ["🚪", "Cổng & hàng rào mạ kẽm"],
    ["⚙️", "Máy móc công nghiệp"],
    ["🏗️", "Tôn, mái kim loại"],
    ["🪟", "Khung cửa công trình"],
  ];
  return (
    <section id="Công trình" className="bg-white py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeader
          label="DỰ ÁN THỰC TẾ"
          h2="Được tin dùng tại 200+ công trình"
          sub="Từ kết cấu thép nhà máy đến cổng sắt mạ kẽm dân dụng."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map(([i, t]) => (
            <div key={t} className="rounded-2xl overflow-hidden aspect-[4/3] relative group cursor-pointer bg-[#F2F8F4] flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">{i}</div>
                <div className="text-sm font-semibold text-[#1E6B31]/70">{t}</div>
              </div>
              <div className="absolute inset-0 bg-[#111111]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-semibold text-white bg-white/20 px-3 py-1 rounded-full">{t}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CERTIFICATES ============ */
function Certificates() {
  const certs = [
    { i: "🛡", n: "EN71-3", o: "EU STANDARD", d: "Không kim loại nặng độc hại. An toàn tuyệt đối cho người dùng." },
    { i: "♻️", n: "ROHS", o: "EU DIRECTIVE", d: "Hạn chế chất nguy hiểm. Đáp ứng xuất khẩu thị trường châu Âu." },
    { i: "🔬", n: "ASTM F963", o: "US STANDARD", d: "An toàn tiếp xúc thường xuyên. Chuẩn kiểm định hàng hóa." },
    { i: "✅", n: "FDA", o: "U.S. FDA", d: "Thành phần an toàn sức khỏe. Chuẩn kiểm định dược phẩm Mỹ." },
  ];
  return (
    <section id="Chứng nhận" className="bg-[#F2F8F4] py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeader
          label="CHỨNG NHẬN CHẤT LƯỢNG"
          h2="Đạt tiêu chuẩn an toàn quốc tế"
          sub="Mọi sản phẩm Lotus Metal Coat đều được kiểm định độc lập."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c) => (
            <div
              key={c.n}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-7 text-center hover:border-[#1E6B31] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{c.i}</div>
              <div className="font-black text-xl text-[#111111] mb-1">{c.n}</div>
              <div className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-3">{c.o}</div>
              <div className="text-xs text-[#6B7280] leading-5">{c.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
function FAQ() {
  const items = [
    ["Sơn hệ nước có bám được trên sắt mạ kẽm không?", "Có. Metal Coat Primer và Metal Coat 2in1 DTM bám trực tiếp lên mạ kẽm mà không cần xử lý bề mặt phức tạp."],
    ["Khác gì so với sơn dung môi truyền thống?", "Không mùi hắc, không bắt lửa, không VOC cao. Độ bền và chống gỉ tương đương hoặc tốt hơn khi thi công đúng quy trình."],
    ["Sơn 2in1 có thực sự không cần lớp lót riêng không?", "Đúng. DTM (Direct To Metal) — sơn thẳng lên kim loại đã làm sạch. Phù hợp nhất cho sắt hộp mạ kẽm, cổng sắt, hàng rào."],
    ["Thời gian khô bao lâu?", "Khô bề mặt 30–60 phút. Khô hoàn toàn 24 giờ. Có thể sơn lớp tiếp theo sau 2–4 giờ."],
    ["Sơn 2K pha tỷ lệ thế nào?", "1kg sơn + 150g chất đóng rắn LH5 (tỷ lệ 15%). Trộn đều, dùng trong 4–6 giờ."],
    ["Mua số lượng lớn có giá đặc biệt không?", "Có. Đơn từ 2,999,000₫ miễn phí ship. Nhà máy, xưởng mua thường xuyên có chính sách riêng — liên hệ Zalo."],
    ["Có hỗ trợ kỹ thuật sau bán hàng không?", "Có. Kỹ thuật viên hỗ trợ 1-1 qua Zalo miễn phí: chọn sản phẩm, quy trình thi công, xử lý sự cố bề mặt."],
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="Hỏi đáp" className="bg-white py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeader label="HỎI ĐÁP" h2="Câu hỏi thường gặp" />
        <div className="max-w-2xl mx-auto space-y-2">
          {items.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#1E6B31]/40 transition-all duration-200">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex justify-between items-center px-7 py-5 bg-white text-left"
                >
                  <span className="font-semibold text-[#111111] text-sm">{q}</span>
                  <ChevronDown size={16} className={`text-[#9CA3AF] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-7 pb-6 text-sm text-[#6B7280] leading-6 border-t border-[#E5E7EB] pt-4">{a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER CTA ============ */
function FooterCTA() {
  return (
    <section className="py-28 md:py-[140px]" style={{ background: "linear-gradient(135deg, #111111 0%, #1E3A2A 100%)" }}>
      <div className="mx-auto max-w-xl px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-px bg-[#86EFAC]" />
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#86EFAC]">SẴN SÀNG CHUYỂN ĐỔI</span>
          <div className="w-8 h-px bg-[#86EFAC]" />
        </div>
        <h2 className="font-serif font-semibold text-white mb-2 leading-[1.1]" style={{ fontSize: "clamp(34px, 5vw, 52px)" }}>
          Sẵn sàng chuyển sang
          <span className="block italic font-normal text-[#86EFAC]">sơn kim loại hệ nước?</span>
        </h2>
        <p className="text-base text-white/60 mt-4 mb-12">
          Giao tận xưởng · Hỗ trợ kỹ thuật tận tay · Hoàn tiền nếu không hài lòng
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#dat-hang"
            className="bg-[#E8711A] text-white font-bold px-8 py-4 rounded-xl transition hover:brightness-110"
            style={{ boxShadow: "0 4px 24px rgba(232,113,26,0.4)" }}
          >
            🛒 Đặt combo ngay
          </a>
          <a
            href="https://zalo.me/0943966662"
            className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition"
          >
            💬 Tư vấn kỹ thuật Zalo
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {["Miễn ship đơn ≥ 2,999,000₫", "Hoàn tiền nếu không hài lòng", "Kỹ thuật hỗ trợ sau bán hàng"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <Check size={14} className="text-[#86EFAC]" strokeWidth={2.5} />
              <span className="text-sm text-white/60">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER BOTTOM ============ */
function FooterBottom() {
  return (
    <footer className="bg-[#0A0A0A] py-8">
      <div className="mx-auto max-w-[1120px] px-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="text-sm text-white/40">Lotus Paint — Metal Coat</div>
        <div className="text-xs text-white/30">© 2024 Lotus Paint. Made in Vietnam.</div>
        <div className="text-sm text-white/40">0943 966 662</div>
      </div>
    </footer>
  );
}

/* ============ FLOATING ============ */
function FloatingButtons() {
  return (
    <>
      <a
        href="https://zalo.me/0943966662"
        className="fixed bottom-6 right-6 z-50 bg-[#0068FF] rounded-full w-14 h-14 flex items-center justify-center text-white font-black text-xl"
        style={{ boxShadow: "0 4px 20px rgba(0,104,255,0.4)" }}
        aria-label="Zalo"
      >
        <span className="absolute inline-flex h-full w-full rounded-full ring-4 ring-[#0068FF]/30 animate-ping" />
        <span className="relative">Z</span>
      </a>
      <a
        href="tel:0943966662"
        className="fixed bottom-24 right-6 z-50 bg-[#E8711A] rounded-full w-12 h-12 flex items-center justify-center text-white"
        style={{ boxShadow: "0 4px 16px rgba(232,113,26,0.4)" }}
        aria-label="Phone"
      >
        <Phone size={20} />
      </a>
    </>
  );
}
