import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      year: '2024',
      title: '高科技產業園區研發廠房',
      spec: '新竹科學園區 • 38,000 m²',
      img: '/src/assets/images/anodized_aluminum_1789547570311.jpg',
      color: 'sky',
    },
    {
      year: '2023',
      title: '現代智慧低溫物流倉儲中心',
      spec: '桃園航空城 • 45,000 m²',
      img: '/src/assets/images/color_steel_detail_1789547480465.jpg',
      color: 'emerald',
    },
    {
      year: '2023',
      title: '市立體育園區公共場館',
      spec: '台中體育園區 • 雙曲面鈦鋅板',
      img: '/src/assets/images/frp_skylight_roof_1789547542265.jpg',
      color: 'sky',
    },
  ];

  return (
    <section className="w-full py-24 md:py-28 bg-slate-50/80 relative border-t border-slate-200 overflow-hidden" id="portfolio">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-100 z-0 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-sky-800 text-[11px] font-en font-bold tracking-[0.2em] uppercase mb-4 border border-sky-100 shadow-xs">
            <span className="w-1.5 h-1.5 bg-sky-500 rounded-sm"></span>
            PROVEN TRACK RECORD & CASES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            工程實績：廠房、倉儲、公共工程實務案例
          </h2>
          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            深耕全台指標性科技研發廠房、現代低溫智慧倉儲物流中心與市立公共建築場館，以科學工法見證金屬外覆系統的卓越實踐。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-14">
          {projects.map((project, idx) => {
            const isSky = project.color === 'sky';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group flex flex-col bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="w-full h-64 overflow-hidden relative">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={project.img}
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                  <span
                    className={`absolute top-3 left-3 text-[11px] font-en tracking-wider font-bold px-3 py-1 shadow-sm bg-white/95 ${
                      isSky ? 'text-sky-700' : 'text-emerald-700'
                    }`}
                  >
                    {project.year} 年度工程
                  </span>
                </div>
                
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3
                      className={`text-lg font-bold text-slate-900 mb-2 transition-colors ${
                        isSky ? 'group-hover:text-sky-600' : 'group-hover:text-emerald-600'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">{project.spec}</p>
                  </div>
                  <div
                    className={`w-8 h-[2px] mt-4 transition-all duration-300 ${
                      isSky
                        ? 'bg-sky-500 group-hover:w-16'
                        : 'bg-emerald-500 group-hover:w-16'
                    }`}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-white hover:bg-sky-50 border border-sky-300 text-sky-700 hover:text-sky-900 font-bold text-xs tracking-widest uppercase transition-all shadow-xs"
            to="/portfolio"
          >
            <span>查看完整工程實績（按 6 大類別逐層瀏覽）</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}
