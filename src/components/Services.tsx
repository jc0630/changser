import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: '建築設計規劃',
      desc: '量身定制客製化外覆系統方案，結合材料力學計算、風洞風壓模擬、排水坡度檢討與熱工斷熱運算。',
      tag: 'SERVICE 01',
      feature: 'BIM模型 / 排水模擬',
      path: '/services/design-planning',
      img: '/src/assets/images/metal_roof_construction_1789545922655.jpg',
    },
    {
      title: '金屬屋頂外牆施工',
      desc: '標準化施工流程與無螺穿式隱藏扣合工法，搭配雙重氣密防虹吸隔槽，徹底杜絕屋面強風積水滲漏。',
      tag: 'SERVICE 02',
      feature: '暗扣工法 / 抗颱雙氣密',
      path: '/services/construction',
      img: '/src/assets/images/metal_wall_fire_system_1789545864095.jpg',
    },
    {
      title: '屋牆面防火系統',
      desc: '全數通過內政部建築技術規範耐燃一級、耐燃二級驗證，導入高密度玄武岩岩棉芯材與防火阻隔收頭。',
      tag: 'SERVICE 03',
      feature: 'CNS耐燃一級 / 岩棉阻火',
      path: '/services/fireproof-systems',
      img: '/src/assets/images/renovation_before_after_1789545891892.jpg',
    },
    {
      title: '金屬屋頂外牆拉皮翻新',
      desc: '免停工不銹鋼二次骨架附著工法，針對老舊鏽蝕鋼板與鐵皮廠房全面整建，提升隔熱效能並煥新企業門面。',
      tag: 'SERVICE 04',
      feature: '無停工翻修 / 節能升級',
      path: '/services/facelift-renovation',
      img: '/src/assets/images/roof_accessories_set_1789547523831.jpg',
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-white relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-grid-slate-100 z-0 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-slate-200 gap-4">
          <div>
            <span className="text-xs font-en text-emerald-700 font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-sm inline-block"></span>
              COMPLETE PROJECT LIFECYCLE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              服務範疇：從設計規劃到綠色翻新一次到位
            </h2>
            <p className="text-sm text-slate-500 mt-2 font-normal max-w-3xl">
              強實企業提供完整的一站式工程服務，涵蓋結構力學與風洞檢討、金屬板材精準裝配、合規防火系統建置至廠房立面環保拉皮翻新。
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-700 hover:text-white transition-colors bg-emerald-50 hover:bg-emerald-600 px-4 py-2 border border-emerald-200 shadow-xs"
            to="/services"
          >
            <span>瀏覽全部服務</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => {
            const isBlue = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group shadow-sm ${
                  isBlue ? 'hover:border-sky-500' : 'hover:border-emerald-500'
                }`}
              >
                <div>
                  <div className="w-full h-44 overflow-hidden mb-5 relative border border-slate-100">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={item.img}
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                    <span
                      className={`absolute top-0 left-0 text-[10px] font-en tracking-wider font-bold px-3 py-1 shadow-sm ${
                        isBlue
                          ? 'bg-sky-600 text-white'
                          : 'bg-emerald-600 text-white'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3
                    className={`text-lg font-bold text-slate-900 mb-2 transition-colors flex items-center gap-2 ${
                      isBlue ? 'group-hover:text-sky-600' : 'group-hover:text-emerald-600'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-xs ${isBlue ? 'bg-sky-500' : 'bg-emerald-500'}`}></span>
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
                  <span className={`text-[11px] font-medium ${isBlue ? 'text-sky-700' : 'text-emerald-700'}`}>
                    {item.feature}
                  </span>
                  <Link
                    to={item.path}
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 transition-colors shrink-0 ${
                      isBlue
                        ? 'bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white'
                        : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white'
                    }`}
                  >
                    <span>了解更多</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
