import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  ArrowRight,
  Share2,
  Check
} from 'lucide-react';
import { NEWS_ARTICLES } from '../data/newsData';

export function NewsPage() {
  const { articleId } = useParams<{ articleId?: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  // Current article if in detail view
  const currentArticle = articleId
    ? NEWS_ARTICLES.find((a) => a.id === articleId)
    : null;

  // Filtered news for list view
  const categories = ['all', '工程實績', '新品發佈', '企業動態', '技術研討'];
  const filteredArticles = selectedCategory === 'all'
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.filter((a) => a.category === selectedCategory);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // ==============================================================
  // 1. 文章詳細頁面 (Detail View - 依照使用者上傳附件截圖規格設計)
  // 單欄置中優雅排版：主圖 -> 標題 -> 日期 -> 內文段落/條列 -> 重點引言 -> 我要分享
  // ==============================================================
  if (articleId && currentArticle) {
    // 取得當前網址供分享
    const shareUrl = encodeURIComponent(window.location.href);
    const shareTitle = encodeURIComponent(currentArticle.title);

    return (
      <div className="flex flex-col w-full bg-white min-h-screen">
        {/* 返回上一層導航條 */}
        <div className="w-full bg-white border-b border-slate-100 py-3.5">
          <div className="max-w-4xl mx-auto px-6 flex items-center justify-end text-xs text-slate-500">
            <Link
              to="/news"
              className="inline-flex items-center gap-1 font-medium text-slate-600 hover:text-sky-600 transition-colors text-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>返回列表</span>
            </Link>
          </div>
        </div>

        {/* 核心文章主體容器 (約束在 max-w-3xl / max-w-4xl 置中單欄) */}
        <main className="w-full py-10 sm:py-14 md:py-16 px-6">
          <article className="max-w-[760px] mx-auto">
            {/* 1. 文章頂部主圖片 (Rounded corners, high quality cover image) */}
            <div className="w-full aspect-[16/9] sm:aspect-[16/9] overflow-hidden  bg-slate-100 mb-8 shadow-xs border border-slate-100">
              <img
                src={currentArticle.coverImage}
                alt={currentArticle.title}
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* 2. 文章標題 (深藍黑粗體，如截圖中的 "How to Choose Heating Element Materials") */}
            <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#142850] text-center tracking-tight leading-snug mb-3">
              {currentArticle.title}
            </h1>

            {/* 3. 發布日期 (如截圖格式：2024.9.20) */}
            <div className="text-center text-xs sm:text-sm text-slate-400 font-mono mb-8 md:mb-10">
              {currentArticle.date.replace(/-/g, '.')}
            </div>

            {/* 4. 正文內容區 (乾淨易讀的標準段落、條列與粗藍左框小標題) */}
            <div className="text-slate-700 text-sm sm:text-base leading-[1.8] space-y-6">
              {/* 首段引言/概述 */}
              <p className="text-slate-700">
                {currentArticle.content.lead}
              </p>

              {/* 條列式重點清單 (實心圓點清單，如截圖樣式) */}
              <ul className="space-y-2 py-1 pl-5 list-disc marker:text-slate-700 text-slate-700">
                {currentArticle.content.sections[0]?.bulletPoints ? (
                  currentArticle.content.sections[0].bulletPoints.map((bp, i) => (
                    <li key={i}>{bp}</li>
                  ))
                ) : (
                  <>
                    <li>工程團隊全面導入三維 BIM 建築資訊模型，進行毫米級精度預組裝。</li>
                    <li>採用高耐候氟碳烤漆複合鋁板，具備卓越耐候與自潔抗污能力。</li>
                    <li>通過國家級實驗室極限抗風壓與水密氣密性能嚴格測試。</li>
                  </>
                )}
              </ul>

              {/* 第二段正文 */}
              {currentArticle.content.sections[0]?.paragraphs?.map((p, idx) => (
                <p key={idx} className="text-slate-700">
                  {p}
                </p>
              ))}

              {/* 次章節：帶有深藍色左豎線的小標題 (完全比照截圖：藍色豎線 + 標題文字) */}
              {currentArticle.content.sections[1] && (
                <div className="pt-4 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-[3px] h-5 bg-[#142850] inline-block "></span>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 m-0">
                      {currentArticle.content.sections[1].heading || '施工工藝與機能解析'}
                    </h2>
                  </div>

                  {currentArticle.content.sections[1].paragraphs.map((p, idx) => (
                    <p key={idx} className="text-slate-700">
                      {p}
                    </p>
                  ))}

                  {/* 補充條列 (若有) */}
                  {currentArticle.content.sections[1].bulletPoints && (
                    <ul className="space-y-2 py-1 pl-5 list-disc marker:text-slate-700 text-slate-700">
                      {currentArticle.content.sections[1].bulletPoints.map((bp, i) => (
                        <li key={i}>{bp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* 後續段落 */}
              {currentArticle.content.sections.slice(2).map((sec, sIdx) => (
                <div key={sIdx} className="pt-4 space-y-4">
                  {sec.heading && (
                    <div className="flex items-center gap-2.5">
                      <span className="w-[3px] h-5 bg-[#142850] inline-block "></span>
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 m-0">
                        {sec.heading}
                      </h2>
                    </div>
                  )}
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-700">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* 5. 分享區域 (完全依照截圖：「我要分享：」下方排列 LINE、FB、X、WhatsApp、Pinterest、LinkedIn、Mail 圖標) */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-4">
                我要分享：
              </h3>

              <div className="flex items-center flex-wrap gap-4 text-slate-800">
                {/* LINE */}
                <a
                  href={`https://social-plugins.line.me/lineit/share?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LINE"
                  className="w-6 h-6 flex items-center justify-center text-slate-800 hover:text-emerald-500 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.499.254l2.462 3.33V8.108c0-.345.282-.63.626-.63.35 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="w-6 h-6 flex items-center justify-center text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="w-6 h-6 flex items-center justify-center text-slate-800 hover:text-black transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="w-6 h-6 flex items-center justify-center text-slate-800 hover:text-green-600 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 0C5.397 0 0 5.397 0 12.03c0 2.122.553 4.195 1.603 6.02L.055 24l6.143-1.579c1.761.961 3.754 1.468 5.833 1.468 6.634 0 12.031-5.397 12.031-12.031C24.062 5.397 18.665 0 12.031 0zm.016 21.84c-1.802 0-3.568-.485-5.113-1.403l-.367-.218-3.797.977.994-3.701-.238-.379c-1.009-1.606-1.541-3.468-1.541-5.378 0-5.518 4.49-10.008 10.012-10.008 5.521 0 10.012 4.49 10.012 10.008 0 5.518-4.49 10.008-10.012 10.008zm5.485-7.487c-.301-.151-1.782-.88-2.059-.98-.276-.101-.477-.151-.678.151-.201.302-.78 9.8-.956 1.181-.176.201-.352.226-.653.076-.301-.151-1.272-.469-2.424-1.496-.897-.799-1.503-1.786-1.679-2.088-.176-.302-.019-.465.132-.615.136-.135.301-.352.452-.528.151-.176.201-.301.302-.502.101-.201.05-.377-.025-.528-.075-.151-.678-1.633-.93-2.236-.245-.588-.495-.508-.678-.518-.176-.01-.377-.01-.578-.01-.201 0-.528.075-.804.377-.276.301-1.055 1.03-1.055 2.512 0 1.482 1.08 2.914 1.231 3.115.151.201 2.125 3.245 5.148 4.552.719.311 1.281.497 1.719.636.723.23 1.381.198 1.901.12.579-.087 1.782-.729 2.033-1.432.251-.703.251-1.306.176-1.432-.075-.126-.276-.201-.577-.352z" />
                  </svg>
                </a>

                {/* Pinterest */}
                <a
                  href={`https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Pinterest"
                  className="w-6 h-6 flex items-center justify-center text-slate-800 hover:text-red-600 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.366-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="w-6 h-6 flex items-center justify-center text-slate-800 hover:text-sky-700 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Email / 郵件 */}
                <a
                  href={`mailto:?subject=${shareTitle}&body=${shareUrl}`}
                  aria-label="Share via Email"
                  className="w-6 h-6 flex items-center justify-center text-slate-800 hover:text-slate-900 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l9.518 7.712 9.518-7.712v11.817h-19.036z" />
                  </svg>
                </a>

                {/* 複製連結輔助按鈕 */}
                <button
                  type="button"
                  onClick={handleShare}
                  className="ml-auto text-xs font-medium text-slate-400 hover:text-slate-700 flex items-center gap-1 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">已複製連結</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>複製網址</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </article>
        </main>
      </div>
    );
  }

  // ==============================================================
  // 2. 最新消息總覽列表頁 (List View)
  // ==============================================================
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {/* Top Hero Banner - 滿版清晰背景圖，純標題風格 */}
      <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/src/assets/images/titanium_zinc_wall_1789547498027.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/35 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-[1]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-widest text-white leading-tight drop-shadow-lg"
          >
            最新消息
          </motion.h1>
        </div>
      </section>

      {/* 主內容區：分類篩選 + 文章網格清單 */}
      <section className="w-full py-12 md:py-18 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* 分類切換標籤 */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'all' ? '全部消息' : cat}
                </button>
              ))}
            </div>
            <span className="text-xs text-slate-400 font-medium">共 {NEWS_ARTICLES.length} 則最新動態</span>
          </div>

          {/* 文章卡片格狀排列 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col bg-white border border-slate-200  overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* 封面圖片 */}
                <Link
                  to={`/news/${item.id}`}
                  className="relative aspect-[16/10] bg-slate-100 overflow-hidden block"
                >
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* 內容區塊 */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.readTime || '3 分鐘'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors leading-snug line-clamp-2">
                    <Link to={`/news/${item.id}`}>{item.title}</Link>
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {item.desc}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <Link
                      to={`/news/${item.id}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      <span>閱讀全文</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Standard CTA */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden text-white bg-slate-800">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/src/assets/images/wall_coating_work_1789547612563.jpg')",
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
