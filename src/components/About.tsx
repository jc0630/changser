import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-slate-50/80 overflow-hidden" id="about">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-slate-100 z-0 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Image Showcase with Geometric Architectural Accents */}
          <div className="lg:col-span-6 relative">
            {/* Background Geometric Graphic Blocks */}
            <div className="absolute -top-6 -left-6 w-28 h-28 border border-sky-200/80 bg-sky-50/50 pointer-events-none -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 border border-emerald-200/80 bg-emerald-50/50 pointer-events-none -z-10"></div>
            
            {/* Small floating geometric squares */}
            <div className="absolute top-1/2 -left-3 w-4 h-4 bg-sky-500/20 border border-sky-400 pointer-events-none z-20"></div>
            <div className="absolute -top-2 right-1/3 w-3 h-3 bg-emerald-500/30 border border-emerald-500 pointer-events-none z-20"></div>
            <div className="absolute -bottom-3 left-1/4 w-3.5 h-3.5 bg-sky-600/30 border border-sky-600 pointer-events-none z-20"></div>
            <div className="absolute top-1/4 right-0 w-2.5 h-2.5 bg-slate-400/40 pointer-events-none z-20"></div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10">
              {/* Photo 1 */}
              <div className="relative group">
                {/* Offset square border frame */}
                <div className="absolute -top-2.5 -left-2.5 w-full h-full border border-sky-300/60 pointer-events-none -z-10 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden shadow-md border border-slate-200 bg-white"
                >
                  <img
                    alt="金屬建築內部結構"
                    className="w-full h-80 sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/src/assets/images/anodized_aluminum_1789547570311.jpg"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                  {/* Subtle geometric corner square */}
                  <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-sky-500 shadow-xs"></div>
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-white/60 pointer-events-none"></div>
                </motion.div>
              </div>
              
              {/* Photo 2 (Staggered vertically) */}
              <div className="relative group sm:translate-y-8">
                {/* Offset square border frame */}
                <div className="absolute -bottom-2.5 -right-2.5 w-full h-full border border-emerald-300/60 pointer-events-none -z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="relative overflow-hidden shadow-md border border-slate-200 bg-white"
                >
                  <img
                    alt="精密鈦鋅板立邊工藝施工"
                    className="w-full h-80 sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/src/assets/images/color_steel_detail_1789547480465.jpg"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                  {/* Subtle geometric corner square */}
                  <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-emerald-500 shadow-xs"></div>
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-white/60 pointer-events-none"></div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Company Story & Value Props */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-slate-200 p-8 md:p-10 shadow-lg"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-800 text-[11px] font-en tracking-[0.2em] font-bold uppercase mb-4 border border-sky-100">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm"></span>
                ABOUT QIANG SHI
              </span>
              
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-5 leading-snug">
                深耕金屬外覆系統，<span className="text-sky-700">成就綠色永續建築新標竿</span>
              </h2>
              
              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                強實企業深耕台灣建築五金與金屬外覆工程領域逾三十載，從材料源頭選用、精密金屬板加工成型，到現場精工吊裝與防水氣密工程，建立全台指標性的金屬外覆供應鏈與施工技術標準。
              </p>
              
              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-8">
                我們以「結構耐久性」與「現代環保立面美學」為核心，持續引進高階金屬防蝕技術，協助科技廠房、低溫冷鏈物流、市政公共展館及傳統企業總部實現外觀拉皮與節能永續蛻變。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-slate-100 mb-8">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="text-xs font-medium text-slate-700">設計與施工一體化</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-medium text-slate-700">合規防火驗證系統</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="text-xs font-medium text-slate-700">建築耐燃節能設計</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-medium text-slate-700">BIM/CAD 實地精準放樣</span>
                </div>
              </div>
              
              <div className="flex justify-start">
                <Link
                  className="px-6 py-3 bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs tracking-wider transition-colors shadow-sm flex items-center gap-2"
                  to="/about"
                >
                  <span>了解更多關於強實</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
