import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Inquiry } from '../../components/Inquiry';

export function FireproofSystems() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/src/assets/images/metal_wall_fire_system_1789545864095.jpg')",
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
            屋牆面防火系統｜金屬外牆防火工程設計
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-200 mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            以守護生命與資產安全為初衷，提供符合國家耐燃一級與法定時效驗證的頂級防火外覆系統。
          </motion.p>
        </div>
      </section>

      {/* H2-1: 符合法規的金屬外牆防火系統 (左文右圖) */}
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
              <span className="text-sm font-bold text-sky-600 tracking-widest">FIRE SAFETY ASSURANCE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-snug">
              符合法規的金屬外牆防火系統
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              在現代工業廠辦與公用空間中，防火外壁是阻斷火勢外部延燒與維護內部結構安全的第一道防線。強實企業嚴選高等級玄武岩不燃岩棉與耐火複合芯材，全套工法均通過內政部建築研究所嚴苛的法規測試。
            </p>
            <ul className="space-y-4">
              {[
                '取得內政部認可之 CNS 12514 1小時 / 2小時防火時效評定證書。',
                '芯材達 CNS 14705-1 耐燃一級規範，火災高溫下不產生毒煙與滴熔物。',
                '客製化防火區劃節點設計，完美銜接各樓層分區防火帷幕防線。'
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
              src="/src/assets/images/metal_wall_fire_system_1789545864095.jpg" 
              alt="符合法規的金屬外牆防火系統" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm p-4  border border-white/20">
                <p className="text-sm font-bold text-slate-900 mb-1">國家級防火測試認證</p>
                <p className="text-xs text-slate-600">全系統整合無縫嵌合卡槽與阻熱墊片，極致阻絕高溫熱傳導。</p>
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
            依據不同產業特性、危險品法規以及空間機能，量身規劃對應時效之防火構造。
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: '半導體晶圓廠', 
              desc: '具備極高潔淨度要求與精密製程，外覆系統兼具最高等級防火隔熱與防微塵性能。', 
              img: '/src/assets/images/titanium_zinc_wall_1789547498027.jpg' 
            },
            { 
              title: '化學危險品倉儲', 
              desc: '符合消防法規嚴格之防爆與防火區劃規範，阻絕極端高溫並防止外部熱源蔓延。', 
              img: '/src/assets/images/wall_coating_work_1789547612563.jpg' 
            },
            { 
              title: '大型公眾場館', 
              desc: '人潮密集的公共交通與展演空間，著重於無毒性揮發與延長黃金安全疏散時限。', 
              img: '/src/assets/images/anodized_aluminum_1789547570311.jpg' 
            },
            { 
              title: '標準工業廠房', 
              desc: '高性價比之耐火三明治板系統，施工迅速，同時達成優異的日常外牆隔熱效益。', 
              img: '/src/assets/images/color_steel_detail_1789547480465.jpg' 
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
              防火系統規劃與法規檢核程序
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              標準化五步檢核流程，確保從圖面法規審查到最終取得竣工認證皆毫無遺漏。
            </p>
          </div>
          
          <div className="relative">
            {/* 桌面版連接線 */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {[
                { step: '01', title: '法規研析', desc: '審核建築技術規則與消防分區時效門檻（1H / 2H）。' },
                { step: '02', title: '構造選定', desc: '依結構載重挑選高密度岩棉或防火金屬複合板材型號。' },
                { step: '03', title: '節點規劃', desc: '精準繪製樓地板、防火門窗框與角隅之膨脹阻火接縫細部。' },
                { step: '04', title: '原廠認證', desc: '落實各項板材之出廠防偽編號核驗與耐燃測報比對。' },
                { step: '05', title: '竣工申報', desc: '出具出廠證明、試驗報告與防火施工證明文件以供使照請領。' }
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

      {/* H2-4: 屋牆面防火系統工程實績 */}
      <section className="py-20 md:py-32 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-slate-800 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-sky-500"></span>
                <span className="text-xs text-sky-400 font-mono tracking-widest uppercase">Featured Projects</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                屋牆面防火系統與工程實績
              </h2>
              <p className="text-slate-400 text-base max-w-xl mt-4">
                我們協助眾多科技龍頭與重大公用設施打造合規安全的防火屏障，為營運安全築起鋼鐵般的保障。
              </p>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-white bg-slate-800 hover:bg-sky-600 px-6 py-3 text-sm font-bold transition-colors group shrink-0">
              <span>探索完整實績</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="group relative">
              <div className="aspect-[16/10] overflow-hidden bg-slate-800 mb-6">
                <img 
                  src="/src/assets/images/frp_skylight_roof_1789547542265.jpg" 
                  alt="南科光電高科技面板廠" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-sky-400 mb-2 block">2小時防火時效</span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">南科光電高科技面板廠</h3>
                </div>
                <div className="text-sm text-slate-400 font-mono flex flex-col md:text-right">
                  <span>系統：高密岩棉防火三明治板</span>
                  <span>性能：CNS 12514 2H 認證</span>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="aspect-[16/10] overflow-hidden bg-slate-800 mb-6">
                <img 
                  src="/src/assets/images/metal_louvers_facade_1789547511954.jpg" 
                  alt="新北化學原料智慧倉儲" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-emerald-400 mb-2 block">耐燃一級</span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">新北化學原料智慧倉儲</h3>
                </div>
                <div className="text-sm text-slate-400 font-mono flex flex-col md:text-right">
                  <span>系統：防火區劃專用金屬外牆</span>
                  <span>性能：全包覆無滴熔防護層</span>
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
