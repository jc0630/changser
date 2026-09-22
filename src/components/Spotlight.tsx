import { motion } from 'motion/react';

export function Spotlight() {
  return (
    <section className="relative w-full py-20 bg-white/90 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-[11px] font-en tracking-[0.3em] text-sky-600 font-bold uppercase block mb-2">
            FLAGSHIP SPOTLIGHT
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-wider">指標旗艦企劃</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -top-3.5 left-4 md:left-8 z-30 px-5 py-1.5 bg-emerald-600 text-white text-xs font-bold tracking-widest uppercase  shadow-sm rounded-full">
            代表旗艦工法
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 bg-white/90 shadow-xl border border-slate-200  overflow-hidden">
            <div className="md:col-span-6 relative min-h-[340px] md:min-h-[440px] group overflow-hidden">
              <img
                alt="高科技半導體園區外覆工程"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/src/assets/images/roof_steel_tile_1789547590738.jpg"
              />
            </div>
            
            <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-between relative bg-slate-50/80">
              <div className="relative z-10 text-center flex flex-col items-center">
                <span className="text-xs text-sky-700 tracking-widest font-en uppercase font-bold mb-2">
                  PRECISION ROOF &amp; FACADE
                </span>
                <h4 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-wide mb-3">
                  高科技半導體研發廠房
                </h4>
                <div className="w-12 h-[2px] bg-sky-600 my-2"></div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal my-4 max-w-md text-center">
                  稀有，才能極致！全案導入暗扣式無穿透立邊咬合系統，搭配特製厚質耐燃一級礦物岩棉芯材與氟碳烤漆鋁複合帷幕，耐風壓超過 6.0 kPa，構築三十年安心零滲漏防護罩。
                </p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center gap-3 mt-6">
                <div className="flex items-center gap-3">
                  <a
                    className="px-5 py-2 text-xs font-semibold bg-sky-600 text-white hover:bg-sky-700 transition-colors  shadow-sm rounded-full"
                    href="#methods"
                  >
                    工法規格
                  </a>
                  <a
                    className="px-5 py-2 text-xs font-semibold border border-emerald-600 text-emerald-700 bg-white/90 hover:bg-emerald-50 transition-colors  shadow-sm"
                    href="#portfolio"
                  >
                    實績檢視
                  </a>
                </div>
                <a
                  className="text-xs text-slate-700 hover:text-sky-600 font-en tracking-widest transition-colors flex items-center gap-1.5 mt-2 font-semibold"
                  href="#inquiry"
                >
                  <span className="material-symbols-outlined text-sm text-sky-600">call</span>
                  <span>工程諮詢專線：(02) 2345-6789</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
