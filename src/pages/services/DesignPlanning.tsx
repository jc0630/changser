import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { Inquiry } from '../../components/Inquiry';

export function DesignPlanning() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/src/assets/images/renovation_before_after_1789545891892.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-900/40 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-[1]"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-widest text-white leading-tight drop-shadow-md"
          >
            建築設計規劃｜金屬外覆系統客製化設計
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-200 mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            結合建築美學與結構力學，提供量身打造的金屬帷幕與外覆系統解決方案。
          </motion.p>
        </div>
      </section>

      {/* H2-1: 金屬帷幕牆與外覆系統設計 (左文右圖) */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-1 bg-sky-600 "></span>
              <span className="text-sm font-bold text-sky-600 tracking-widest">DESIGN CONCEPT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-snug">
              金屬帷幕牆與外覆系統設計
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              強實企業深知每棟建築皆有其獨特的環境條件與機能訴求。我們不僅提供單一材料，更以全方位的視角，針對風壓、隔熱、防水及視覺美學進行整體規劃。
            </p>
            <ul className="space-y-4">
              {[
                '針對現地環境進行微氣候與風洞數據分析。',
                '結合 BIM 三維模型，精密計算立面收邊與幾何折角。',
                '提供客製化系統配置，兼顧美學張力與工程可行性。'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[500px]  overflow-hidden shadow-xl"
          >
            <img 
              src="/src/assets/images/roof_accessories_set_1789547523831.jpg" 
              alt="金屬外牆與帷幕牆設計" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm p-4  border border-white/20">
                <p className="text-sm font-bold text-slate-900 mb-1">精準立面分割</p>
                <p className="text-xs text-slate-600">透過數位化放樣，完美呈現建築師的幾何設計語彙。</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* H2-2: 依建築需求規劃屋頂與外牆系統 */}
      <section className="py-20 md:py-28 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            依建築需求規劃屋頂與外牆系統
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            針對不同領域的建築型態，我們提供具備針對性的系統配置，滿足外觀、機能、隔熱與預算上的多重需求。
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: '科技廠房', desc: '強調抗風壓、高氣密與快速組裝，確保無塵室穩定運作。', img: '/src/assets/images/roof_steel_tile_1789547590738.jpg' },
            { title: '商業建築', desc: '注重立面美學與材質表現，常採用平整度極高的複合鋁板或鈦鋅板。', img: '/src/assets/images/titanium_zinc_wall_1789547498027.jpg' },
            { title: '公共建築', desc: '考量生命週期與耐用度，需符合嚴格的國家級防火與安全規範。', img: '/src/assets/images/wall_coating_work_1789547612563.jpg' },
            { title: '物流倉儲', desc: '大跨距屋頂系統設計，強調隔熱、防結露與極致的防水效能。', img: '/src/assets/images/anodized_aluminum_1789547570311.jpg' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white  overflow-hidden shadow-sm border border-slate-200 group hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* H2-3: 從設計諮詢到材料選用的規劃流程 (橫向流程圖) */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              從設計諮詢到材料選用的規劃流程
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              嚴謹標準化的五步設計作業程序，確保每一項提案皆能完美契合業主的期待與工程規範。
            </p>
          </div>
          
          <div className="relative">
            {/* 桌面版連接線 */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {[
                { step: '01', title: '需求諮詢', desc: '初步了解建築機能、預算與預期目標。' },
                { step: '02', title: '條件確認', desc: '勘查現地環境與氣候數據，評估結構限制。' },
                { step: '03', title: '圖面規劃', desc: '繪製 BIM 系統節點圖與初步立面放樣。' },
                { step: '04', title: '材料選用', desc: '依據性能需求挑選適合的金屬板材與塗層。' },
                { step: '05', title: '設計確認', desc: '提出完整系統方案與報價，進行最終確認。' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="w-14 h-14  bg-white border-4 border-slate-100 shadow-sm flex items-center justify-center text-sky-600 font-bold text-lg mb-4 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H2-4: 金屬外覆系統設計與工程實績 */}
      <section className="py-20 md:py-32 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-slate-800 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-sky-500"></span>
                <span className="text-xs text-sky-400 font-mono tracking-widest uppercase">Featured Projects</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                金屬外覆系統設計與工程實績
              </h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-white bg-slate-800 hover:bg-sky-600 px-6 py-3 text-sm font-bold transition-colors group">
              <span>探索完整實績</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="group relative">
              <div className="aspect-[16/10] overflow-hidden bg-slate-800 mb-6">
                <img src="/src/assets/images/color_steel_detail_1789547480465.jpg" alt="科技園區 A 廠辦大樓" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-sky-400 mb-2 block">科技廠房</span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">科技園區 A 廠辦大樓</h3>
                </div>
                <div className="text-sm text-slate-400 font-mono flex flex-col md:text-right">
                  <span>系統：雙層微氣候通風系統</span>
                  <span>材料：氟碳烤漆複合鋁板</span>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="aspect-[16/10] overflow-hidden bg-slate-800 mb-6">
                <img src="/src/assets/images/frp_skylight_roof_1789547542265.jpg" alt="市立美術館擴建館" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-emerald-400 mb-2 block">公共建築</span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">市立美術館擴建館</h3>
                </div>
                <div className="text-sm text-slate-400 font-mono flex flex-col md:text-right">
                  <span>系統：幾何折線帷幕系統</span>
                  <span>材料：百年耐候鈦鋅板</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Inquiry />
    </div>
  );
}
