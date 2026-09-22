import { motion } from 'motion/react';

export function News() {
  const news = [
    {
      title: '【技術專利】強實榮獲新型抗強颱立邊暗扣結構專利證書',
      desc: '強實研發團隊針對多颱風氣候改良咬合接點，有效抗負風壓達 6.0 kPa，提供大型科技廠房更強韌的屋面防護。',
      img: '/src/assets/images/roof_accessories_set_1789547523831.jpg',
    },
    {
      title: '科技廠房外覆工程「土城科技園區總部」順利驗收完工',
      desc: '歷時六個月施工，完成 24,000 平方公尺氟碳烤漆鋁複合板帷幕與暗扣屋頂，達成全廠高精度施工與驗收零缺失。',
      img: '/src/assets/images/roof_steel_tile_1789547590738.jpg',
    },
    {
      title: '強實全系列三明治板通過 CNS12514 一小時防火時效驗證',
      desc: '經國家級防火實驗室嚴格高溫試驗，強實高密度玄武岩岩棉板材通過內政部建築技術規範耐燃一級評定。',
      img: '/src/assets/images/titanium_zinc_wall_1789547498027.jpg',
    },
    {
      title: '綠能節能新指標：老舊金屬廠房外牆拉皮翻新方案推廣',
      desc: '協助製造業在不停工原則下完成外覆系統翻新，大幅降低夏季空調負載達 30%，同時翻轉企業嶄新形象。',
      img: '/src/assets/images/wall_coating_work_1789547612563.jpg',
    },
  ];

  return (
    <section className="w-full py-24 bg-white/90 relative border-t border-slate-200" id="news">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <span className="text-xs font-en text-sky-600 font-bold tracking-[0.3em] uppercase block mb-1">
            NEWS
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-wider">最新消息</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, idx) => {
            const isBlue = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white border border-slate-200  overflow-hidden flex flex-col justify-between p-5 shadow-sm group hover:shadow-lg transition-all ${
                  isBlue ? 'hover:border-sky-500' : 'hover:border-emerald-500'
                }`}
              >
                <div>
                  <div className="h-44 w-full overflow-hidden  mb-4">
                    <img
                      alt="工程新訊"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.img}
                    />
                  </div>
                  <h4
                    className={`text-sm font-bold text-slate-900 leading-snug mb-2 transition-colors ${
                      isBlue ? 'group-hover:text-sky-600' : 'group-hover:text-emerald-600'
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex justify-end">
                  <button
                    className={`px-3.5 py-1.5 text-[11px] font-semibold tracking-wider  transition-colors ${
                      isBlue
                        ? 'bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white'
                        : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white'
                    }`}
                  >
                    閱讀更多 &gt;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
