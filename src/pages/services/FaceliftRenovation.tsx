import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Inquiry } from '../../components/Inquiry';

export function FaceliftRenovation() {
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
        <div className="absolute inset-0 bg-slate-900/50 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-[1]"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-widest text-white leading-tight drop-shadow-md"
          >
            金屬屋頂外牆拉皮翻新｜老屋外觀升級工程
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-200 mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            以現代金屬系統重塑老舊建築外觀，同時根治鏽蝕漏水與隔熱難題，全面升級企業品牌形象。
          </motion.p>
        </div>
      </section>

      {/* H2-1: 老屋外觀升級與屋頂隔熱改善 (左文右圖) */}
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
              <span className="text-sm font-bold text-sky-600 tracking-widest">FACADE RENOVATION</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-snug">
              老屋外觀升級與屋頂隔熱改善
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              台灣潮濕多雨且地震頻繁，老舊工業廠房與商辦常見外牆磁磚剝落、鐵皮鏽蝕以及嚴重的頂樓日曬高溫困擾。強實企業提供免大舉拆遷的「外覆包板」與「斷橋翻新」工法，在最短工期內賦予建築嶄新生命力。
            </p>
            <ul className="space-y-4">
              {[
                '採用輕量化高強度金屬板材覆蓋，不增加原建築結構多餘承載負擔。',
                '植入中空通風斷熱層或高密度岩棉，有效使室內夏季降溫 4 至 8 度。',
                '施工期間企業產線與內部辦公可照常運作，無須停工搬遷造成營運損失。'
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
              src="/src/assets/images/renovation_before_after_1789545891892.jpg" 
              alt="老屋外觀升級與屋頂隔熱改善" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm p-4  border border-white/20">
                <p className="text-sm font-bold text-slate-900 mb-1">外觀拉皮前後質感蛻變</p>
                <p className="text-xs text-slate-600">現代流線金屬帷幕取代斑駁老舊外牆，品牌形象與資產價值同步躍升。</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* H2-2: 依建築需求規劃屋頂與外牆系統 (4 格卡片網格) */}
      <section className="py-20 md:py-28 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            依建築需求規劃屋頂與外牆系統
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            針對各類不同屋齡結構與機能劣化的既有建物，規劃最合適的拉皮隔熱翻新方案。
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: '老舊傳統鐵皮廠房', 
              desc: '解決屋面鏽蝕破洞與悶熱，採用屋頂雙層加蓋直立鎖邊系統，徹底斷絕漏水。', 
              img: '/src/assets/images/metal_louvers_facade_1789547511954.jpg' 
            },
            { 
              title: '企業總部外觀改造', 
              desc: '複合鋁板或鈦鋅板幾何包覆，將灰暗老舊建物改造為高科技感現代企業總部。', 
              img: '/src/assets/images/metal_roof_construction_1789545922655.jpg' 
            },
            { 
              title: '磁磚剝落商用大樓', 
              desc: '免除耗時剃除工程，經結構安檢後以金屬乾式骨架直接包覆，徹底根除落磚隱患。', 
              img: '/src/assets/images/metal_wall_fire_system_1789545864095.jpg' 
            },
            { 
              title: '物流倉儲綠能改造', 
              desc: '補強老舊鋼骨載重能力，同步加裝高隔熱抗風金屬面板，為架設太陽能光電預作準備。', 
              img: '/src/assets/images/renovation_before_after_1789545891892.jpg' 
            }
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
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
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

      {/* H2-3: 從設計諮詢到材料選用的規劃流程 (橫向五步流程圖) */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              拉皮翻新一站式工程標準流程
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              從建物健檢到完工驗收，嚴謹的五步翻新機制，確保工程品質與現有空間安全兼得。
            </p>
          </div>
          
          <div className="relative">
            {/* 桌面版連接線 */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {[
                { step: '01', title: '現況勘檢', desc: '詳細評估舊建物結構承重、漏水點及外壁劣化程度。' },
                { step: '02', title: '立面設計', desc: '模擬拉皮後現代視覺外觀與各向收邊排水系統規劃。' },
                { step: '03', title: '骨架搭建', desc: '採用防蝕鍍鋅結構搭接既有牆體，建立獨立外覆受力層。' },
                { step: '04', title: '面板安裝', desc: '安裝隔熱層與高品質金屬飾板，整合門窗氣密填縫。' },
                { step: '05', title: '完工驗收', desc: '全面防滲噴淋水試驗，提交施工紀錄與長效保固證明。' }
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

      {/* H2-4: 金屬屋頂外牆拉皮翻新工程實績 */}
      <section className="py-20 md:py-32 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-slate-800 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-emerald-500"></span>
                <span className="text-xs text-emerald-400 font-mono tracking-widest uppercase">Featured Projects</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                拉皮翻新工程與工程實績
              </h2>
              <p className="text-slate-400 text-base max-w-xl mt-4">
                多項老屋重生的真實案例，讓歲月斑駁的既有廠房大樓煥然一新，重新綻放建築光彩。
              </p>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-white bg-slate-800 hover:bg-emerald-600 px-6 py-3 text-sm font-bold transition-colors group shrink-0">
              <span>探索完整實績</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="group relative">
              <div className="aspect-[16/10] overflow-hidden bg-slate-800 mb-6">
                <img 
                  src="/src/assets/images/roof_accessories_set_1789547523831.jpg" 
                  alt="桃園精密機械廠外觀升級" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-emerald-400 mb-2 block">廠房拉皮翻新</span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">桃園精密機械廠外觀升級</h3>
                </div>
                <div className="text-sm text-slate-400 font-mono flex flex-col md:text-right">
                  <span>系統：外牆免拆除金屬覆蓋</span>
                  <span>材料：氟碳烤漆雙色複合鋁板</span>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="aspect-[16/10] overflow-hidden bg-slate-800 mb-6">
                <img 
                  src="/src/assets/images/roof_steel_tile_1789547590738.jpg" 
                  alt="新竹老舊傳產廠辦節能改造" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-sky-400 mb-2 block">屋頂隔熱翻新</span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">新竹老舊傳產廠辦節能改造</h3>
                </div>
                <div className="text-sm text-slate-400 font-mono flex flex-col md:text-right">
                  <span>系統：雙層直立鎖邊斷橋覆蓋</span>
                  <span>材料：高反射隔熱抗腐蝕板</span>
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
