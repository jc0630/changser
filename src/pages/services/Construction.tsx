import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, CheckCircle2 } from 'lucide-react';
import { Inquiry } from '../../components/Inquiry';

export function Construction() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/src/assets/images/metal_roof_construction_1789545922655.jpg')",
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
            金屬屋頂外牆施工｜隔熱工法與專業安裝服務
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-200 mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            以標準化作業程序、精密機械化工法與嚴格工安管理，打造耐候耐久的高品質金屬外覆建築。
          </motion.p>
        </div>
      </section>

      {/* H2-1: 金屬屋頂外牆專業施工服務 (左文右圖) */}
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
              <span className="text-sm font-bold text-sky-600 tracking-widest">CONSTRUCTION CRAFT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-snug">
              金屬屋頂外牆專業施工服務
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              優良的板材必須仰賴無懈可擊的施工技藝。強實企業擁有自營專業工班與完整吊裝起重設備，堅持全案直營不層層轉包。從鋼構測量、基座找平到咬合安裝，皆落實標準化品管與工安防護。
            </p>
            <ul className="space-y-4">
              {[
                '採用 360 度立體機械雙重咬合，實現無釘穿孔的絕對抗滲水性能。',
                '導入斷橋節能隔熱墊片工法，阻斷熱傳導並杜絕室內結露問題。',
                '落實全天候工地安全監督與高空防墜維護，達成 100% 工安合規。'
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
              src="/src/assets/images/metal_roof_construction_1789545922655.jpg" 
              alt="金屬屋頂外牆專業施工服務" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm p-4  border border-white/20">
                <p className="text-sm font-bold text-slate-900 mb-1">精密立體機械鎖邊</p>
                <p className="text-xs text-slate-600">無螺絲穿透技術，兼顧抗颱強風吸力與熱脹冷縮滑動自由度。</p>
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
            針對多樣化的工業與商務空間形態，提供兼具隔熱、抗風、防水與美觀的模組化施工方案。
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: '新建大型廠辦', 
              desc: '大面積屋頂與外牆快速鋪設，高效率進度控管縮短整體營建週期。', 
              img: '/src/assets/images/anodized_aluminum_1789547570311.jpg' 
            },
            { 
              title: '物流冷鏈倉儲', 
              desc: '強化大跨距空間之斷橋隔熱系統與高氣密防結露設計，保障低溫能耗效益。', 
              img: '/src/assets/images/color_steel_detail_1789547480465.jpg' 
            },
            { 
              title: '科技廠房擴建', 
              desc: '新舊介面精準收邊防水，施工期間落實低粉塵防護，不影響現有產線運作。', 
              img: '/src/assets/images/frp_skylight_roof_1789547542265.jpg' 
            },
            { 
              title: '商業地標建築', 
              desc: '金屬外牆曲面與幾何線條施工，結合隱藏式扣件呈現現代流線質感。', 
              img: '/src/assets/images/metal_louvers_facade_1789547511954.jpg' 
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
              標準化施工與工法管制流程
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              嚴謹有序的五步工程執行準則，確保每一道施工程序皆符合安全規範與極致工藝要求。
            </p>
          </div>
          
          <div className="relative">
            {/* 桌面版連接線 */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {[
                { step: '01', title: '現地放樣', desc: '核對鋼構垂直水平基準線，確認現場吊裝與安全防護動線。' },
                { step: '02', title: '骨架基座', desc: '安裝次結構、防熱斷橋托座及防震阻水壓條，固定基準。' },
                { step: '03', title: '材料吊掛', desc: '整批吊運金屬板料至屋面作業區，執行原廠出廠防刮檢驗。' },
                { step: '04', title: '鋪設咬合', desc: '執行隱藏扣合或 360 度機械立體鎖邊，杜絕表面鑽孔滲漏。' },
                { step: '05', title: '收邊驗收', desc: '落實山牆天溝收邊、施打耐候級矽利康，完成水密噴淋測試。' }
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

      {/* H2-4: 金屬屋頂外牆施工工程實績 */}
      <section className="py-20 md:py-32 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-slate-800 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-emerald-500"></span>
                <span className="text-xs text-emerald-400 font-mono tracking-widest uppercase">Featured Projects</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                金屬屋頂外牆施工與工程實績
              </h2>
              <p className="text-slate-400 text-base max-w-xl mt-4">
                跨足北中南指標性建案，每一個案場都是強實企業對極致工藝與品質承諾的最佳佐證。
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
                  src="/src/assets/images/metal_roof_construction_1789545922655.jpg" 
                  alt="竹科光電高階研發廠房" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-emerald-400 mb-2 block">高科技新建</span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">竹科光電高階研發廠房</h3>
                </div>
                <div className="text-sm text-slate-400 font-mono flex flex-col md:text-right">
                  <span>系統：直立鎖邊屋面系統</span>
                  <span>材料：雙面 PVDF 耐候彩鋼</span>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="aspect-[16/10] overflow-hidden bg-slate-800 mb-6">
                <img 
                  src="/src/assets/images/metal_wall_fire_system_1789545864095.jpg" 
                  alt="國際智慧冷鏈物流中心" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-emerald-400 mb-2 block">倉儲物流</span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">國際智慧冷鏈物流中心</h3>
                </div>
                <div className="text-sm text-slate-400 font-mono flex flex-col md:text-right">
                  <span>系統：超大跨距隔熱複合板</span>
                  <span>材料：高密度防火岩棉板</span>
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
