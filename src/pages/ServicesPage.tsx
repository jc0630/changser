import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const serviceBlocks = [
  {
    id: 'service-01',
    phase: 'PHASE 01 / PLANNING',
    title: '建築設計規劃',
    subtitle: '客製化金屬外覆系統方案',
    desc: '透過高階數位 BIM 三維構件與 CFD 正負風壓氣密試算，於電腦端精準預演毫米級放樣與折角收口，在設計初期即排除 99% 的現場施工介面衝突。',
    highlights: [
      { name: '正負風壓試算', note: '依基地風洞條件推導抗風極限' },
      { name: '毫米級放樣', note: '多重折角專利收口工法' },
      { name: 'BIM 介面排除', note: '3D 構件衝突事前預演' },
    ],
    img: '/src/assets/images/renovation_before_after_1789545891892.jpg',
    imgAlt: '建築設計規劃工程放樣',
    link: '/services/design-planning',
    theme: 'blue',
  },
  {
    id: 'service-02',
    phase: 'PHASE 02 / ASSEMBLY',
    title: '金屬屋頂外牆施工',
    subtitle: '專業自營工法與品質把關',
    desc: '不委外轉包，由強實自營專業機工隊親赴現場施作。引進先進連續無搭接滾壓機具與 360 度雙重機械鎖邊咬合工法，實現屋面「表層零螺絲、零穿孔」的極致耐候抗漏標準。',
    highlights: [
      { name: '零穿孔鎖邊', note: '表層無螺絲固定杜絕漏水' },
      { name: '抗 17 級強颱', note: '全尺度抗剪拔風壓認證' },
      { name: '自營技術工班', note: '100% 責任施工嚴格品管' },
    ],
    img: '/src/assets/images/metal_roof_construction_1789545922655.jpg',
    imgAlt: '金屬屋頂外牆現場安裝施工',
    link: '/services/construction',
    theme: 'green',
  },
  {
    id: 'service-03',
    phase: 'PHASE 03 / FIRE-SAFETY',
    title: '屋牆面防火系統',
    subtitle: '符合法規耐火遮焰安全設計',
    desc: '全系列採用高密度不燃天然玄武岩岩棉與專利斷橋氣密扣合構造，通過國家內政部建築新技術認可，在高溫火場下無滴熔、無有毒煙霧，為科技廠房與物流重鎮築起堅固的生命安全屏障。',
    highlights: [
      { name: '1 ~ 2 小時時效', note: 'CNS 12514 完整遮焰認可' },
      { name: 'Class A 不燃級', note: '高溫千度耐火無毒煙霧' },
      { name: '專利斷橋氣密', note: '阻絕熱傳導防內壁冷凝' },
    ],
    img: '/src/assets/images/metal_wall_fire_system_1789545864095.jpg',
    imgAlt: '屋牆面防火構造材料與板型',
    link: '/services/fireproof-systems',
    theme: 'blue',
  },
  {
    id: 'service-04',
    phase: 'PHASE 04 / RETROFIT',
    title: '金屬屋頂外牆拉皮翻新',
    subtitle: '老屋外觀升級與節能工法',
    desc: '專為既有運轉中科技廠房與商辦建築研發的「不停工外覆夾扣工法」。原屋面無需拆除即可直接施作雙層斷熱通風層，免除粉塵雨淋停產風險，同步實現外觀升級、室內降溫與節能減碳。',
    highlights: [
      { name: '不停工施作', note: '產線運轉免拆頂無粉塵' },
      { name: '降溫 3~5°C', note: '雙層斷熱空調節能 28%' },
      { name: '結構載重加固', note: '同步兼具太陽能光電架設' },
    ],
    img: '/src/assets/images/titanium_zinc_wall_1789547498027.jpg',
    imgAlt: '廠房外牆金屬拉皮翻新完工',
    link: '/services/facelift-renovation',
    theme: 'green',
  },
];

export function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Full background image - complete and clear */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/src/assets/images/metal_wall_fire_system_1789545864095.jpg')",
          }}
        ></div>
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/35 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 z-[1]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-widest text-white leading-tight drop-shadow-lg"
          >
            服務項目
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-16 h-[3px] bg-sky-500 my-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-sm sm:text-base text-slate-100 font-normal max-w-2xl leading-relaxed drop-shadow-sm"
          >
            以工程安全為本，提供從前期 BIM 應力試算、抗強颱屋牆面施工、內政部認可防火構造，到不停工拉皮翻新的全方位金屬外覆工程解決方案。
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: FOUR SHOWCASE BLOCKS - DESIGNED ACCORDING TO REFERENCE ATTACHMENT */}
      <section className="w-full bg-slate-50/70 py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle engineering grid background */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #0284c7 1px, transparent 1px), linear-gradient(to bottom, #0284c7 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Section Introduction */}
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-sky-700 border border-sky-200 text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>CORE ENGINEERING SERVICES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              四大核心服務範疇
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              融合綠能永續、精準科技與自營責任工法，為各類型工業與商業建築打造歷久彌新的安全外覆體系。
            </p>
          </div>

          {/* The 4 Service Introduction Cards */}
          <div className="space-y-12 lg:space-y-16">
            {serviceBlocks.map((service, index) => {
              const isBlue = service.theme === 'blue';

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="scroll-mt-24 w-full bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px] lg:min-h-[480px]">
                    {/* Left: Engineering Photography (matches the left photo in the reference screenshot) */}
                    <div className="lg:col-span-7 relative overflow-hidden bg-slate-100 min-h-[280px] sm:min-h-[340px] lg:min-h-full">
                      <img
                        src={service.img}
                        alt={service.imgAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-60"></div>

                      {/* Technical Index Chip */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 text-xs font-mono font-bold text-slate-800 border border-slate-200 shadow-xs flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isBlue ? 'bg-sky-500' : 'bg-emerald-500'
                          }`}
                        ></span>
                        <span>0{index + 1} / 04</span>
                      </div>
                    </div>

                    {/* Right: Framed Content Box (matches the architectural border & centered layout in the reference screenshot) */}
                    <div className="lg:col-span-5 relative p-7 sm:p-9 lg:p-12 flex flex-col justify-center items-center text-center bg-white">
                      {/* Inset architectural frame line matching reference screenshot */}
                      <div
                        className={`absolute inset-3 sm:inset-4 lg:inset-6 border pointer-events-none transition-colors duration-300 ${
                          isBlue
                            ? 'border-sky-300/60 group-hover:border-sky-400'
                            : 'border-emerald-300/60 group-hover:border-emerald-400'
                        }`}
                      >
                        {/* Architectural Corner Registration Ticks */}
                        <span
                          className={`absolute -top-1 -left-1 w-2 h-2 ${
                            isBlue ? 'bg-sky-500' : 'bg-emerald-500'
                          }`}
                        ></span>
                        <span
                          className={`absolute -top-1 -right-1 w-2 h-2 ${
                            isBlue ? 'bg-sky-500' : 'bg-emerald-500'
                          }`}
                        ></span>
                        <span
                          className={`absolute -bottom-1 -left-1 w-2 h-2 ${
                            isBlue ? 'bg-sky-500' : 'bg-emerald-500'
                          }`}
                        ></span>
                        <span
                          className={`absolute -bottom-1 -right-1 w-2 h-2 ${
                            isBlue ? 'bg-sky-500' : 'bg-emerald-500'
                          }`}
                        ></span>
                      </div>

                      {/* Content Section within the frame */}
                      <div className="relative z-10 w-full max-w-md flex flex-col items-center py-2 sm:py-4">
                        {/* Phase Badge */}
                        <span
                          className={`inline-block px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase mb-3 border ${
                            isBlue
                              ? 'bg-sky-50 text-sky-700 border-sky-200'
                              : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          }`}
                        >
                          {service.phase}
                        </span>

                        {/* Main Title (prominent and bold like the screenshot) */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-wider mb-1 leading-snug">
                          {service.title}
                        </h3>

                        {/* Subtitle */}
                        <span className="text-xs sm:text-sm text-slate-500 font-medium tracking-wide">
                          {service.subtitle}
                        </span>

                        {/* Reference Divider: Horizontal line with centered downward chevron */}
                        <div className="flex items-center justify-center my-5 w-full max-w-[240px] sm:max-w-[280px] mx-auto">
                          <div
                            className={`flex-1 h-[1.5px] ${
                              isBlue ? 'bg-sky-300' : 'bg-emerald-300'
                            }`}
                          ></div>
                          <div
                            className={`px-3 flex items-center justify-center ${
                              isBlue ? 'text-sky-600' : 'text-emerald-600'
                            }`}
                          >
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                          <div
                            className={`flex-1 h-[1.5px] ${
                              isBlue ? 'bg-sky-300' : 'bg-emerald-300'
                            }`}
                          ></div>
                        </div>

                        {/* Description Text */}
                        <p className="text-sm text-slate-600 leading-relaxed text-center mb-6 font-normal">
                          {service.desc}
                        </p>

                        {/* Highlight Feature Chips in Blue + Green + White */}
                        <div className="flex flex-wrap justify-center gap-2 mb-7 w-full">
                          {service.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50/80 hover:bg-white text-slate-700 text-xs font-medium border border-slate-200 rounded-sm transition-colors"
                              title={h.note}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  i % 2 === 0 ? 'bg-sky-500' : 'bg-emerald-500'
                                }`}
                              ></span>
                              <span>{h.name}</span>
                            </span>
                          ))}
                        </div>

                        {/* Learn More Button ("了解更多") - Required by prompt */}
                        <Link
                          to={service.link}
                          id={`btn-learn-more-${service.id}`}
                          className={`inline-flex items-center justify-center gap-2.5 px-8 py-2.5 sm:py-3 rounded-sm text-sm font-bold tracking-wider transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer group/btn ${
                            isBlue
                              ? 'bg-white hover:bg-sky-600 text-sky-700 hover:text-white border-2 border-sky-600 hover:border-sky-600'
                              : 'bg-white hover:bg-emerald-600 text-emerald-700 hover:text-white border-2 border-emerald-600 hover:border-emerald-600'
                          }`}
                        >
                          <span>了解更多</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: STANDARDIZED ENGINEERING WORKFLOW (Brand Series Box Style) */}
      <section className="w-full bg-white py-24 lg:py-32 relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 flex items-end gap-3 mb-4">
              標準化工程整合執行流程
              <span className="text-sm font-normal text-slate-500 font-mono mb-1">Standardized Workflow</span>
            </h2>
            <div className="w-full h-[1px] bg-slate-200 mb-6 relative">
              <div className="absolute left-0 top-0 h-[2px] w-24 bg-sky-600"></div>
            </div>
            <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
              從前期無人機現地測繪、BIM 介面碰撞排除，到自營技士進駐施作與出具原廠保固，建立四步閉環工程品管機制。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Box 1 */}
            <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow border-t-4 border-t-sky-500">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-sky-700 font-mono">
                    STEP 01
                  </span>
                  <span className="material-symbols-outlined text-slate-300 text-3xl">satellite_alt</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">現場勘測試算</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  高解析無人機空拍測繪、風壓風荷載試算與板型材料耐候性評估選定。
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-700 font-bold">
                <span className="material-symbols-outlined text-sky-600 text-base">check_circle</span>
                <span>精準受力數據庫</span>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-emerald-700 font-mono">
                    STEP 02
                  </span>
                  <span className="material-symbols-outlined text-slate-300 text-3xl">view_in_ar</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">精準圖面放樣</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  導入 BIM 3D 結構建模、排水坡度推導與金屬收邊專利咬合節點定案。
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-700 font-bold">
                <span className="material-symbols-outlined text-emerald-600 text-base">check_circle</span>
                <span>3D 介面零衝突</span>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow border-t-4 border-t-sky-500">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-sky-700 font-mono">
                    STEP 03
                  </span>
                  <span className="material-symbols-outlined text-slate-300 text-3xl">engineering</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">自營工班施作</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  機械化 360 度雙重咬合、無穿孔暗扣與現場嚴格防墜勞安作業標準。
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-700 font-bold">
                <span className="material-symbols-outlined text-sky-600 text-base">check_circle</span>
                <span>100% 技術士自營工班</span>
              </div>
            </div>

            {/* Box 4 */}
            <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-emerald-700 font-mono">
                    STEP 04
                  </span>
                  <span className="material-symbols-outlined text-slate-300 text-3xl">verified</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">驗收與品質保固</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  全區連續高壓試水噴淋檢測、出具官方工程品質履歷與原廠防護保證書。
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-700 font-bold">
                <span className="material-symbols-outlined text-emerald-600 text-base">check_circle</span>
                <span>出具正式長期保固</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden text-white bg-slate-800">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/src/assets/images/wall_coating_work_1789547612563.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-900/45 backdrop-blur-[1px] z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/35 z-[1]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-xs font-mono text-sky-300 tracking-[0.3em] font-bold uppercase block mb-3 drop-shadow-sm">
            START YOUR ENGINEERING CONSULTATION
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white tracking-tight mb-4 leading-snug max-w-3xl drop-shadow-md">
            立即洽詢，取得工程服務報價與建議
          </h2>
          <p className="text-sm md:text-base text-slate-100 font-normal mb-10 max-w-xl leading-relaxed drop-shadow-sm">
            提供基地現況圖面或工程需求，我們的資深團隊將於 24 小時內提供材料規格配比、受力試算建議與完整工程預算書。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            <Link
              className="px-8 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm tracking-wider transition-all shadow-lg hover:shadow-sky-500/25 flex items-center gap-2 rounded-full cursor-pointer"
              to="/inquiry"
            >
              <span className="material-symbols-outlined text-base">assignment</span>
              <span>填寫線上詢價表單</span>
            </Link>
            <a
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm tracking-wider transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 rounded-full cursor-pointer"
              href="tel:0227988888"
            >
              <span className="material-symbols-outlined text-base">call</span>
              <span>專線諮詢：02-2798-8888</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

