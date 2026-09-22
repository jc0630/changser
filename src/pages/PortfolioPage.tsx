import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  ChevronLeft,
  ChevronRight, 
  CheckCircle2, 
  FileText, 
  Maximize2,
  PhoneCall
} from 'lucide-react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from '../data/portfolioData';

export function PortfolioPage() {
  const { categoryId, projectId } = useParams<{ categoryId?: string; projectId?: string }>();
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [otherProjectsPage, setOtherProjectsPage] = useState(0);

  // Scroll to top when view parameters change
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
    setOtherProjectsPage(0);
  }, [categoryId, projectId]);

  // Current category (if in Level 2 or Level 3)
  const currentCategory = PORTFOLIO_CATEGORIES.find((c) => c.id === categoryId);

  // Current project (if in Level 3)
  const currentProject = PORTFOLIO_PROJECTS.find(
    (p) => p.id === projectId || (categoryId && p.categoryId === categoryId && p.id === projectId)
  );

  // Projects under the selected category (for Level 2)
  const categoryProjects = categoryId
    ? PORTFOLIO_PROJECTS.filter((p) => p.categoryId === categoryId)
    : [];

  // ==========================================
  // LEVEL 3: 工程案例詳細介紹頁面 (依照附件截圖規格設計)
  // ==========================================
  if (categoryId && projectId && currentProject) {
    const galleryImages = [
      currentProject.coverImage,
      ...(currentProject.gallery || []).filter((img) => img !== currentProject.coverImage),
    ];

    // 其他實績列表 (排除當前專案)
    const otherProjects = PORTFOLIO_PROJECTS.filter((p) => p.id !== currentProject.id);
    const pageSize = 3;
    const totalOtherPages = Math.ceil(otherProjects.length / pageSize) || 1;
    const currentOtherProjects = otherProjects.slice(
      otherProjectsPage * pageSize,
      (otherProjectsPage + 1) * pageSize
    );

    return (
      <div className="flex flex-col w-full bg-white min-h-screen">
        {/* Top Hero Banner - 像首頁一樣僅留下標題文字，背景完整清晰 */}
        <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${currentProject.coverImage}')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/30 z-[1]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-[1]"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-widest text-white leading-tight drop-shadow-lg"
            >
              {currentProject.title}
            </motion.h1>
          </div>
        </section>

        {/* 返回上一層導航條 */}
        <div className="w-full bg-slate-50 border-b border-slate-200/80 py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-end text-xs text-slate-500">
            <Link
              to={`/portfolio/${currentProject.categoryId}`}
              className="inline-flex items-center gap-1.5 font-bold text-sky-700 hover:text-sky-900 transition-colors shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>返回列表</span>
            </Link>
          </div>
        </div>

        {/* 中間主要內容區 (純白背景，左右兩欄對稱精準排版 - 依附件截圖設計) */}
        <div className="w-full bg-white py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start">
              {/* 左側：工程實景照片輪播 (帶左右箭頭) */}
              <div className="relative flex items-center justify-center">
                {/* 左切換按鈕 */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
                    )
                  }
                  className="absolute -left-6 sm:-left-8 md:-left-9 top-1/2 -translate-y-1/2 z-10 p-1 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.2]" />
                </button>

                {/* 主照片展示框 */}
                <div className="w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] bg-slate-100 overflow-hidden shadow-xs border border-slate-100">
                  <img
                    src={galleryImages[activeImageIndex] || currentProject.coverImage}
                    alt={currentProject.title}
                    className="w-full h-full object-cover select-none"
                  />
                </div>

                {/* 右切換按鈕 */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev + 1) % galleryImages.length
                    )
                  }
                  className="absolute -right-6 sm:-right-8 md:-right-9 top-1/2 -translate-y-1/2 z-10 p-1 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.2]" />
                </button>
              </div>

              {/* 右側：專案名稱與規格清單 (依截圖標準字體與綠點符號排版) */}
              <div className="flex flex-col pt-1 md:pt-0">
                {/* 標題與次標題 */}
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                  {currentProject.title}
                </h2>
                {currentProject.subtitle ? (
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug mt-1 mb-8">
                    {currentProject.subtitle}
                  </h3>
                ) : (
                  <div className="mb-8" />
                )}

                {/* 材質 */}
                <div className="mb-6">
                  <div className="text-sm md:text-base font-normal text-slate-800 mb-1">材質</div>
                  <div className="text-sm md:text-base text-slate-600">
                    {currentProject.materials.join(' / ') || '鍍鋁鋅鋼板'}
                  </div>
                </div>

                {/* 系統工法 (綠點條列) */}
                <div className="mb-6">
                  <div className="text-sm md:text-base font-normal text-slate-800 mb-2">系統工法</div>
                  <ul className="space-y-1.5">
                    {currentProject.systemsUsed.map((sys, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm md:text-base text-slate-600">
                        <span className="w-1.5 h-1.5  bg-[#52c41a] mt-2 shrink-0"></span>
                        <span>{sys}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 工程地點 */}
                <div className="mb-6">
                  <div className="text-sm md:text-base font-normal text-slate-800 mb-1">工程地點</div>
                  <div className="text-sm md:text-base text-slate-600">{currentProject.location}</div>
                </div>

                {/* 完工年份 */}
                <div className="mb-6">
                  <div className="text-sm md:text-base font-normal text-slate-800 mb-1">完工年份</div>
                  <div className="text-sm md:text-base text-slate-600">
                    {currentProject.year.replace(/[^0-9]/g, '') || currentProject.year}
                  </div>
                </div>

                {/* 設計單位 */}
                <div className="mb-4">
                  <div className="text-sm md:text-base font-normal text-slate-800 mb-1">設計單位</div>
                  <div className="text-sm md:text-base text-slate-600">
                    {currentProject.architect || currentProject.client || '許育嘉聯合建築師事務所'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 下方區塊：其他實績 (全幅淺灰底色，帶上一頁/下一頁切換與3列卡片 - 依附件截圖設計) */}
        <section className="w-full bg-[#f4f4f4] py-14 border-t border-slate-200/70">
          <div className="max-w-6xl mx-auto px-6">
            {/* 區塊標頭：左側標題，右側細箭頭按鈕 */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-normal">
                其他實績
              </h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setOtherProjectsPage((prev) => (prev - 1 + totalOtherPages) % totalOtherPages)
                  }
                  className="p-1 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
                  aria-label="上一頁"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setOtherProjectsPage((prev) => (prev + 1) % totalOtherPages)
                  }
                  className="p-1 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
                  aria-label="下一頁"
                >
                  <ChevronRight className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>
            </div>

            {/* 3 卡片橫向陳列 (無外卡邊框，圖片+文字+了解更多按鈕) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {currentOtherProjects.map((p, idx) => (
                <div key={p.id} className="flex flex-col">
                  {/* 照片 */}
                  <Link
                    to={`/portfolio/${p.categoryId}/${p.id}`}
                    className="block w-full aspect-[16/10] overflow-hidden bg-slate-200 group"
                  >
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  {/* 標題 (企業/專案名稱) */}
                  <h4 className="text-lg font-bold text-slate-900 mt-4 mb-2 truncate">
                    {p.subtitle || p.client || p.title}
                  </h4>

                  {/* 項目名稱 */}
                  <p className="text-sm text-slate-600 mb-1 truncate">
                    項目名稱：{p.title}
                  </p>

                  {/* 材質 */}
                  <p className="text-sm text-slate-600 mb-4 truncate">
                    材質：{p.materials.join(' / ') || '鍍鋁鋅鋼板'}
                  </p>

                  {/* 了解更多 按鈕 */}
                  <div className="mt-auto pt-1">
                    <Link
                      to={`/portfolio/${p.categoryId}/${p.id}`}
                      className={`inline-block px-6 py-2 text-xs sm:text-sm font-medium transition-colors text-center ${
                        idx === 2
                          ? 'bg-[#0070ba] text-white hover:bg-[#005a96]'
                          : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      了解更多
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ==========================================
  // LEVEL 2: 該分類的工程實績列表頁面
  // ==========================================
  if (categoryId && currentCategory) {
    return (
      <div className="flex flex-col w-full bg-slate-50 min-h-screen">
        {/* Top Hero Banner - 像首頁一樣僅留下標題文字，背景完整清晰 */}
        <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${currentCategory.coverImage}')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/30 z-[1]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-[1]"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-widest text-white leading-tight drop-shadow-lg"
            >
              {currentCategory.name}
            </motion.h1>
          </div>
        </section>

        {/* Content Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
          {/* Navigation Bar */}
          <div className="flex items-center justify-end gap-4 mb-6 pb-4 border-b border-slate-200">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-700 hover:text-sky-700 hover:border-sky-300 text-xs font-bold border border-slate-200 shadow-xs transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>瀏覽所有 6 大實績分類</span>
            </Link>
          </div>
          {/* Category Switcher Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isActive = cat.id === categoryId;
              return (
                <Link
                  key={cat.id}
                  to={`/portfolio/${cat.id}`}
                  className={`px-4 py-2  text-xs font-bold whitespace-nowrap transition-all border ${
                    isActive
                      ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-sky-300 hover:text-sky-600'
                  }`}
                >
                  {cat.name} ({cat.count})
                </Link>
              );
            })}
          </div>

          {/* Project List Cards (3-per-row, CLEAN - NO small labels on top of images) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {categoryProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-white  overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                {/* Image (CLEAN - NO labels or badges over the image) */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content - All metadata is neatly organized below the image */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[11px]">
                        <span className="text-slate-600">{project.year}</span>
                        <span className="text-slate-300">•</span>
                        <span className="font-bold text-emerald-700">{project.area}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                      {project.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.systemsUsed.slice(0, 2).map((sys, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {sys}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/portfolio/${categoryId}/${project.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4  border border-sky-300 text-sky-700 font-bold text-xs group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition-all shadow-2xs rounded-full"
                  >
                    <span>查看完整工程詳細介紹</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Back Button */}
          <div className="text-center pt-4">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3  bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>返回工程實績所有分類</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // LEVEL 1: 工程實績分類總覽頁面 (3個一排，頂部Hero Banner)
  // ==========================================
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Top Hero Banner - 像首頁一樣僅留下標題文字，背景完整清晰 */}
      <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/src/assets/images/anodized_aluminum_1789547570311.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-[1]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-widest text-white leading-tight drop-shadow-lg"
          >
            工程實績
          </motion.h1>
        </div>
      </section>

      {/* Categories Grid Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-en text-sky-600 font-bold tracking-[0.3em] uppercase block mb-2">
            - PROJECT PORTFOLIO -
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            工程實績分類總覽
          </h2>
          <div className="w-12 h-1 bg-sky-600 mx-auto mt-4 mb-3"></div>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-normal">
            點擊各項分類瀏覽對應工程案例，查看完整的施工照片、工法規格與工程詳細介紹。
          </p>
        </div>

        {/* 6 Categories Grid - 三個為一排 (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) 無圖片浮動小標籤 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PORTFOLIO_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/portfolio/${category.id}`)}
            >
              <div className="relative aspect-[16/11] overflow-hidden  border border-slate-200 shadow-xs bg-slate-900">
                {/* Category Image - CLEAN (NO tags or badges over the image) */}
                <img
                  src={category.coverImage}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom Overlay Bar with Title and Count */}
                <div className="absolute inset-x-0 bottom-0 bg-slate-950/75 py-4 px-6 flex items-center justify-between transition-colors group-hover:bg-slate-950/90">
                  <span className="text-xl md:text-2xl font-bold text-white tracking-wide">
                    {category.name}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-sky-300 font-semibold opacity-90 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <span>案例 ({category.count})</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


        {/* Bottom CTA */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden text-white bg-slate-800 mt-24">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/src/assets/images/color_steel_detail_1789547480465.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30 z-[1]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-xs font-en text-sky-300 tracking-[0.3em] font-bold uppercase block mb-3 drop-shadow-sm">
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
              className="px-8 py-3.5  bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm tracking-wider transition-all shadow-lg hover:shadow-sky-500/25 flex items-center gap-2 rounded-full"
              to="/inquiry"
            >
              <span className="material-symbols-outlined text-base">assignment</span>
              <span>線上詢價／立即洽詢</span>
            </Link>
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

