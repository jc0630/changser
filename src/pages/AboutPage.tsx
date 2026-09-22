import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sectorImages = [
  '/src/assets/images/frp_skylight_roof_1789547542265.jpg',
  '/src/assets/images/metal_louvers_facade_1789547511954.jpg',
  '/src/assets/images/anodized_aluminum_1789547570311.jpg',
];

const sectorItems = [
  {
    id: 'semiconductor',
    title: '高科技無塵廠房',
    years: '28 年實績',
    tagColor: 'sky',
    description: '高氣密防火岩棉夾芯板、抗微震及耐酸鹼氣體塗層',
  },
  {
    id: 'logistics',
    title: '全溫層物流重鎮',
    years: '15 年實績',
    tagColor: 'emerald',
    description: '連續跨距高載重結構、專用複合保溫斷橋系統',
  },
  {
    id: 'stadium',
    title: '大型公共運動場館',
    years: '30 年實績',
    tagColor: 'sky',
    description: '雙曲面直立鎖邊屋面、抗 17 級強烈颱風風壓驗證',
  },
];

export function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sectorImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + sectorImages.length) % sectorImages.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div className="flex flex-col w-full">
            {/* SECTION 1: HERO */}
      <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
        {/* Full background image - complete and clear */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/src/assets/images/anodized_aluminum_1789547570311.jpg')",
          }}
        ></div>
        {/* Subtle overlay for text readability without darkening image */}
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-[1]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-widest text-white leading-tight drop-shadow-lg"
          >
            關於強實
          </motion.h1>
        </div>
      </section>

      
      {/* SECTION 2: 公司簡介 */}
      <section className="w-full bg-white py-24">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto flex justify-center">
          <div className="flex flex-col lg:flex-row w-full max-w-6xl relative">
            {/* Image Side */}
            <div className="w-full lg:w-3/5">
              <div className="relative aspect-[4/3] w-full shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  src="/src/assets/images/color_steel_detail_1789547480465.jpg"
                  alt="Company Profile"
                />
              </div>
            </div>
            
            {/* Text Box Side - Offset in Light Gray */}
            <div className="w-full lg:w-1/2 lg:-ml-24 mt-8 lg:mt-16 relative z-10">
              <div className="bg-slate-50 p-8 lg:p-12 shadow-md border border-slate-200/90">
                <h2 className="text-2xl font-bold text-slate-900 flex items-end gap-3 mb-4">
                  公司簡介與核心價值
                  <span className="text-sm font-normal text-slate-500 font-en mb-1">Company Profile</span>
                </h2>
                {/* Divider Line with Blue Accent */}
                <div className="w-full h-[1px] bg-slate-200 mb-6 relative">
                  <div className="absolute left-0 top-0 h-[2px] w-14 bg-sky-600"></div>
                </div>
                
                <div className="text-slate-600 space-y-4 text-sm leading-relaxed mb-8">
                  <p>
                    從受力風壓分析、帷幕外牆選材至現場嚴格吊掛組裝，提供一條龍閉環工程服務。杜絕劣質薄板，全線採用耐震耐候規格，打造抵禦強颱地震的百年工藝基底。
                  </p>
                  <p>
                    引進高熱阻三明治板與高反射塗層，實踐低碳節能與 LEED 綠建築認證規範。
                  </p>
                </div>

                {/* Key Metrics with Blue & Green Accents */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                  <div className="border-l-2 border-sky-500 pl-3">
                    <div className="text-2xl font-bold text-sky-600 font-en">30+<span className="text-xs text-slate-500 font-normal ml-1">年</span></div>
                    <div className="text-[11px] font-bold text-slate-600 uppercase mt-1">深厚資歷實績</div>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-3">
                    <div className="text-2xl font-bold text-emerald-600 font-en">1,200+<span className="text-xs text-slate-500 font-normal ml-1">件</span></div>
                    <div className="text-[11px] font-bold text-slate-600 uppercase mt-1">全台完工工程</div>
                  </div>
                  <div className="border-l-2 border-sky-500 pl-3">
                    <div className="text-2xl font-bold text-sky-600 font-en">100%</div>
                    <div className="text-[11px] font-bold text-slate-600 uppercase mt-1">國標CNS檢驗通過</div>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-3">
                    <div className="text-2xl font-bold text-emerald-600 font-en">25<span className="text-xs text-slate-500 font-normal ml-1">年</span></div>
                    <div className="text-[11px] font-bold text-slate-600 uppercase mt-1">耐候防蝕承諾</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 產業經驗 */}
      <section className="w-full bg-slate-100/70 py-24 relative overflow-hidden border-y border-slate-200/80">
        {/* Geometric Background shape in light gray */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-200/40 transform skew-x-12 origin-top-right pointer-events-none"></div>
        
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text Side */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                產業經驗：建築與工程金屬外覆系統
              </h2>
              {/* Divider Line with Green Accent */}
              <div className="w-full h-[1px] bg-slate-300 mb-8 relative">
                <div className="absolute left-0 top-0 h-[2px] w-14 bg-emerald-600"></div>
              </div>
              
              <ul className="space-y-4">
                {sectorItems.map((item) => (
                  <li
                    key={item.id}
                    className="p-3.5 bg-white border border-slate-200 shadow-xs"
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`material-symbols-outlined text-xl shrink-0 mt-0.5 ${
                          item.tagColor === 'emerald' ? 'text-emerald-600' : 'text-sky-600'
                        }`}
                      >
                        verified
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-base text-slate-900">
                            {item.title}
                          </span>
                          <span
                            className={`px-2 py-0.5 text-xs font-bold border font-en shrink-0 ${
                              item.tagColor === 'emerald'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : 'bg-sky-50 text-sky-700 border-sky-200'
                            }`}
                          >
                            {item.years}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Images Carousel Side */}
            <div className="w-full lg:w-2/3">
              <div
                className="relative w-full aspect-[16/10] bg-slate-900 border-[6px] border-white shadow-xl overflow-hidden group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Slides Images with Transition - Pure Image, No Text or Labels */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="absolute inset-0"
                  >
                    <img
                      src={sectorImages[currentSlide]}
                      alt="工程實績"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Arrow Controls */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/70 hover:bg-sky-600 text-white flex items-center justify-center transition-colors backdrop-blur-sm shadow-md z-20 cursor-pointer"
                  aria-label="上一張圖片"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/70 hover:bg-sky-600 text-white flex items-center justify-center transition-colors backdrop-blur-sm shadow-md z-20 cursor-pointer"
                  aria-label="下一張圖片"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                  {sectorImages.map((_, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 transition-all duration-300 cursor-pointer shadow-sm ${
                        currentSlide === idx
                          ? 'w-8 bg-sky-500'
                          : 'w-2 bg-white/70 hover:bg-white'
                      }`}
                      aria-label={`切換至第 ${idx + 1} 張`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 為何選擇強實 */}
      <section className="w-full bg-white py-24 relative overflow-hidden">
        {/* Subtle Watermark/Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 flex items-end gap-3 mb-4">
              為何選擇強實：品質與工程實績保證
              <span className="text-sm font-normal text-slate-500 font-en mb-1">Uncompromising Standards</span>
            </h2>
            {/* Divider Line extending to right with Blue Accent */}
            <div className="w-full h-[1px] bg-slate-200 mb-6 relative">
              <div className="absolute left-0 top-0 h-[2px] w-24 bg-sky-600"></div>
            </div>
            <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
              非外包掛牌，落實純粹專業分工。四重硬核標準，締造值得信賴的建築外觀防線。完全杜絕多層轉包。全數具備國家營造技術士證照，定員定期勞安考核，確保高空與吊裝作業精準零死角。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {/* Box 1 - Blue offset bottom-right */}
            <div className="relative group">
              {/* Unified Offset Background Square */}
              <div className="absolute -bottom-2.5 -right-2.5 w-full h-full bg-sky-500 z-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>
              {/* Main Content Box */}
              <div className="relative z-10 bg-white border border-slate-200 p-6 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-sky-700 px-2 py-1 bg-sky-50 border border-sky-200 font-en">01 / TEAM</span>
                    <span className="material-symbols-outlined text-sky-600 text-xl">groups</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">自營專業工班</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">完全杜絕多層轉包。全數具備國家營造技術士證照，確保高空吊裝精準零死角。</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-sky-700 font-bold">
                  <span className="w-1.5 h-1.5 bg-sky-600"></span>
                  <span>100% 自主管理工班</span>
                </div>
              </div>
            </div>

            {/* Box 2 - Green offset bottom-right */}
            <div className="relative group">
              {/* Unified Offset Background Square */}
              <div className="absolute -bottom-2.5 -right-2.5 w-full h-full bg-emerald-500 z-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>
              {/* Main Content Box */}
              <div className="relative z-10 bg-white border border-slate-200 p-6 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-emerald-700 px-2 py-1 bg-emerald-50 border border-emerald-200 font-en">02 / TECH</span>
                    <span className="material-symbols-outlined text-emerald-600 text-xl">view_in_ar</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">BIM 全流程模擬</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">導入 3D 碰撞試算與應力風壓分析，於設計端預先排除 99% 介面衝突，大幅縮短工期。</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                  <span className="w-1.5 h-1.5 bg-emerald-600"></span>
                  <span>3D 預演零工差</span>
                </div>
              </div>
            </div>

            {/* Box 3 - Blue offset bottom-right */}
            <div className="relative group">
              {/* Unified Offset Background Square */}
              <div className="absolute -bottom-2.5 -right-2.5 w-full h-full bg-sky-500 z-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>
              {/* Main Content Box */}
              <div className="relative z-10 bg-white border border-slate-200 p-6 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-sky-700 px-2 py-1 bg-sky-50 border border-sky-200 font-en">03 / SAFETY</span>
                    <span className="material-symbols-outlined text-sky-600 text-xl">local_fire_department</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">CNS12514 防火</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">複合板全數具備內政部建築新技術認可書，提供 1~2 小時最高等級防火遮焰防線。</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-sky-700 font-bold">
                  <span className="w-1.5 h-1.5 bg-sky-600"></span>
                  <span>國家甲級防護標準</span>
                </div>
              </div>
            </div>

            {/* Box 4 - Green offset bottom-right */}
            <div className="relative group">
              {/* Unified Offset Background Square */}
              <div className="absolute -bottom-2.5 -right-2.5 w-full h-full bg-emerald-500 z-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>
              {/* Main Content Box */}
              <div className="relative z-10 bg-white border border-slate-200 p-6 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-emerald-700 px-2 py-1 bg-emerald-50 border border-emerald-200 font-en">04 / WARRANTY</span>
                    <span className="material-symbols-outlined text-emerald-600 text-xl">verified</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">25年防護承諾</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">嚴選國際大廠 PVDF 氟碳塗層與鋁鋅基板，耐酸雨抗紫外線，出具正式長期保固責任書。</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                  <span className="w-1.5 h-1.5 bg-emerald-600"></span>
                  <span>官方保證書存檔</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* SECTION 5: CTA */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden text-white bg-slate-800">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/src/assets/images/metal_wall_fire_system_1789545864095.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30 z-[1]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-xs font-en text-sky-300 tracking-[0.3em] font-bold uppercase block mb-3 drop-shadow-sm">
            START YOUR ENGINEERING CONSULTATION
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white tracking-tight mb-4 leading-snug max-w-3xl drop-shadow-md">
            立即洽詢，取得強實企業服務報價與建議
          </h2>
          <p className="text-sm md:text-base text-slate-100 font-normal mb-10 max-w-xl leading-relaxed drop-shadow-sm">
            提供現場工程現況勘驗、圖面風壓試算及金屬建材樣品寄送。我們的技術顧問將於 24 小時內回覆。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            <a
              className="px-8 py-3.5  bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm tracking-wider transition-all shadow-lg hover:shadow-sky-500/25 flex items-center gap-2 rounded-full"
              href="/inquiry"
            >
              <span className="material-symbols-outlined text-base">assignment</span>
              <span>線上詢價／立即洽詢</span>
            </a>
            <a
              className="px-8 py-3.5  bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm tracking-wider transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 rounded-full"
              href="tel:0227988888"
            >
              <span className="material-symbols-outlined text-base">call</span>
              <span>致電工程諮詢專線</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
