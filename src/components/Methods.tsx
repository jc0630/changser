import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Methods() {
  const steps = [
    {
      num: '01',
      title: '現場勘查與圖面檢討',
      desc: '高精度 3D 雷射測繪現場結構梁柱垂直度，核對大樣圖面與排水動線。',
      color: 'sky',
    },
    {
      num: '02',
      title: '骨架防鏽與基礎檢驗',
      desc: '副檁條鍍鋅層厚度量測，塗佈重防蝕環氧防鏽漆，確保骨架水平落差 ≤ 2mm。',
      color: 'emerald',
    },
    {
      num: '03',
      title: '金屬板材精密固定',
      desc: '導入暗扣式滑動座固定工法，板材預留熱脹冷縮滑動量，杜絕應力形變。',
      color: 'sky',
    },
    {
      num: '04',
      title: '氣密水密細部收邊',
      desc: '屋脊、泛水、女兒牆角與採光銜接處，採用雙層三元乙丙 (EPDM) 膠條包覆。',
      color: 'emerald',
    },
    {
      num: '05',
      title: '多重品質檢驗驗收',
      desc: '進行高壓連續 2 小時動態淋水試驗與熱像儀斷熱檢驗，出具原廠施工保固書。',
      color: 'sky',
    },
  ];

  return (
    <section className="w-full py-24 bg-white/90 relative border-t border-slate-200" id="methods">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-en text-sky-600 font-bold tracking-[0.25em] uppercase block mb-2">
            STANDARDIZED ENGINEERING PROTOCOLS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">標準化施作工法</h2>
          <p className="text-sm text-slate-600 font-normal">
            嚴格遵循國家建築標準與專利防水收邊工法，落實五道關鍵施工階段嚴格驗證。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 bg-white border border-slate-200 border-t-4  shadow-sm hover:shadow-md transition-shadow ${
                step.color === 'sky' ? 'border-t-sky-600' : 'border-t-emerald-600'
              }`}
            >
              <div
                className={`text-3xl font-en font-black mb-3 ${
                  step.color === 'sky' ? 'text-sky-600' : 'text-emerald-600'
                }`}
              >
                {step.num}
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 md:p-10 bg-slate-50/80 border border-slate-200  grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7">
            <span className="text-xs font-en text-sky-700 font-bold tracking-widest uppercase block mb-1">
              PATENTED LOCKING TECHNOLOGY
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              強實專利「暗扣式雙重抗負風壓」工法特色
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal mb-6">
              傳統金屬板外露自攻螺絲固定極易因台灣多雨高濕氣候導致墊圈老化、產生螺孔鏽蝕漏水問題。強實全面採用立體暗扣式隱形接合，不穿透板面主體，並於公母扣咬合溝槽內嵌注熱熔防水膠，徹底杜絕毛細虹吸滲水現象。
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sky-600 text-base">check_circle</span>
                <span>耐風壓超過 6.0 kPa</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-base">check_circle</span>
                <span>防螺釘外露電位腐蝕</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sky-600 text-base">check_circle</span>
                <span>自由吸收熱膨脹應力</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-base">check_circle</span>
                <span>立面線條流暢無接縫</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 overflow-hidden  border border-slate-200 bg-white/90 p-2 shadow-sm">
            <img
              alt="暗扣式施工大樣"
              className="w-full h-56 object-cover "
              src="/src/assets/images/metal_wall_fire_system_1789545864095.jpg"
            />
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <Link
            to="/methods"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-white/90 hover:bg-emerald-50 border border-emerald-300 text-emerald-700 font-bold text-xs tracking-widest uppercase transition-all  shadow-sm"
          >
            <span>瀏覽 8 大完整施工做法分類與技術規範</span>
            <ArrowRight className="w-4 h-4 text-emerald-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}
