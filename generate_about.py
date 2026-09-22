# This script will rewrite the AboutPage.tsx sections.
import re

with open('src/pages/AboutPage.tsx', 'r') as f:
    content = f.read()

# Splitting sections using Regex or string split
parts = re.split(r'\{/\*\s*SECTION \d+:.*?\*/\}', content)
# parts[0] is imports and start
# parts[1] is HERO
# parts[2] is SECTION 2
# parts[3] is SECTION 3
# parts[4] is SECTION 4
# parts[5] is SECTION 5

imports_and_start = parts[0]
hero_section = parts[1]
cta_section = parts[5]

# Generate new Section 2 (Company Profile style)
section2 = """
      {/* SECTION 2: 公司簡介 */}
      <section className="w-full bg-white py-24">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto flex justify-center">
          <div className="flex flex-col lg:flex-row w-full max-w-6xl relative">
            {/* Image Side */}
            <div className="w-full lg:w-3/5">
              <div className="relative aspect-[4/3] w-full">
                <img
                  className="w-full h-full object-cover"
                  src="/src/assets/images/color_steel_detail_1789547480465.jpg"
                  alt="Company Profile"
                />
              </div>
            </div>
            
            {/* Text Box Side - Offset */}
            <div className="w-full lg:w-1/2 lg:-ml-24 mt-8 lg:mt-16 relative z-10">
              <div className="bg-[#f8f6f0] p-8 lg:p-12 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 flex items-end gap-3 mb-4">
                  公司簡介與核心價值
                  <span className="text-sm font-normal text-slate-500 font-en mb-1">Company Profile</span>
                </h2>
                {/* Divider Line */}
                <div className="w-full h-[1px] bg-slate-300 mb-6 relative">
                  <div className="absolute left-0 top-0 h-[1px] w-12 bg-sky-600"></div>
                </div>
                
                <div className="text-slate-700 space-y-4 text-sm leading-relaxed mb-8">
                  <p>
                    從受力風壓分析、帷幕外牆選材至現場嚴格吊掛組裝，提供一條龍閉環工程服務。杜絕劣質薄板，全線採用耐震耐候規格，打造抵禦強颱地震的百年工藝基底。
                  </p>
                  <p>
                    引進高熱阻三明治板與高反射塗層，實踐低碳節能與 LEED 綠建築認證規範。
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                  <div>
                    <div className="text-2xl font-bold text-sky-700 font-en">30+<span className="text-xs text-slate-500 font-normal ml-1">年</span></div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase mt-1">深厚資歷實績</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-sky-700 font-en">1,200+<span className="text-xs text-slate-500 font-normal ml-1">件</span></div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase mt-1">全台完工工程</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-sky-700 font-en">100%</div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase mt-1">國標CNS檢驗通過</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-sky-700 font-en">25<span className="text-xs text-slate-500 font-normal ml-1">年</span></div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase mt-1">耐候防蝕承諾</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
"""

# Generate new Section 3 (Certificate style)
section3 = """
      {/* SECTION 3: 產業經驗 */}
      <section className="w-full bg-[#eaddcf]/30 py-24 relative overflow-hidden">
        {/* Geometric Background shape */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#d6c7b7]/20 transform skew-x-12 origin-top-right"></div>
        
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text Side */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-2xl font-bold text-slate-900 flex items-end gap-3 mb-4">
                產業經驗
                <span className="text-sm font-normal text-slate-500 font-en mb-1">Target Sectors</span>
              </h2>
              {/* Divider Line */}
              <div className="w-full h-[1px] bg-slate-300 mb-8 relative">
                <div className="absolute left-0 top-0 h-[1px] w-12 bg-emerald-600"></div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-6">建築與工程金屬外覆系統</h3>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                  高科技無塵廠房 (28年實績)
                </li>
                <li className="flex items-center gap-3 text-slate-700 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                  全溫層物流重鎮 (15年實績)
                </li>
                <li className="flex items-center gap-3 text-slate-700 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                  大型公共運動場館 (30年實績)
                </li>
              </ul>
            </div>
            
            {/* Images Side */}
            <div className="w-full lg:w-2/3 flex gap-4">
              <img src="/src/assets/images/frp_skylight_roof_1789547542265.jpg" alt="科技半導體園區" className="w-1/3 object-cover aspect-[3/4] shadow-md border-[6px] border-white" />
              <img src="/src/assets/images/metal_louvers_facade_1789547511954.jpg" alt="全溫層物流重鎮" className="w-1/3 object-cover aspect-[3/4] shadow-md border-[6px] border-white -mt-4" />
              <img src="/src/assets/images/anodized_aluminum_1789547570311.jpg" alt="大型公共運動場館" className="w-1/3 object-cover aspect-[3/4] shadow-md border-[6px] border-white mt-4" />
            </div>
          </div>
        </div>
      </section>
"""

# Generate new Section 4 (Business Philosophy style)
section4 = """
      {/* SECTION 4: 為何選擇強實 */}
      <section className="w-full bg-white py-24 relative overflow-hidden">
        {/* Subtle Watermark/Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 flex items-end gap-3 mb-4">
              為何選擇強實：品質與工程實績保證
              <span className="text-sm font-normal text-slate-500 font-en mb-1">Uncompromising Standards</span>
            </h2>
            {/* Divider Line extending to right */}
            <div className="w-full h-[1px] bg-slate-200 mb-6 relative">
              <div className="absolute left-0 top-0 h-[1px] w-24 bg-sky-600"></div>
            </div>
            <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
              非外包掛牌，落實純粹專業分工。四重硬核標準，締造值得信賴的建築外觀防線。完全杜絕多層轉包。全數具備國家營造技術士證照，定員定期勞安考核，確保高空與吊裝作業精準零死角。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {/* Box 1 */}
            <div className="relative group">
              {/* Offset Background Square */}
              <div className="absolute -top-3 -right-3 w-full h-full bg-sky-400 z-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></div>
              {/* Main Content Box */}
              <div className="relative z-10 bg-white border border-slate-100 p-6 h-full flex flex-col items-start shadow-sm">
                <span className="text-xs font-bold text-sky-700 px-2 py-1 bg-sky-50 font-en mb-4">01 / TEAM</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">自營專業工班</h3>
                <p className="text-sm text-slate-500 mb-4 flex-grow">完全杜絕多層轉包。全數具備證照，確保高空吊裝精準零死角。</p>
                <div className="flex items-center gap-2 text-[10px] text-sky-600 font-bold uppercase mt-auto">
                  <span className="material-symbols-outlined text-sm">groups</span>
                  <span>100% 自主管理工班</span>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="relative group">
              {/* Offset Background Square */}
              <div className="absolute -bottom-3 -left-3 w-full h-full bg-emerald-400 z-0 transition-transform group-hover:-translate-x-1 group-hover:translate-y-1"></div>
              {/* Main Content Box */}
              <div className="relative z-10 bg-white border border-slate-100 p-6 h-full flex flex-col items-start shadow-sm">
                <span className="text-xs font-bold text-emerald-700 px-2 py-1 bg-emerald-50 font-en mb-4">02 / TECH</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">BIM 全流程模擬</h3>
                <p className="text-sm text-slate-500 mb-4 flex-grow">導入 3D 碰撞試算與應力風壓分析，排除 99% 介面衝突，縮短工期。</p>
                <div className="flex items-center gap-2 text-[10px] text-emerald-600 font-bold uppercase mt-auto">
                  <span className="material-symbols-outlined text-sm">view_in_ar</span>
                  <span>3D 預演零工差</span>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="relative group">
              {/* Offset Background Square */}
              <div className="absolute -top-3 -left-3 w-full h-full bg-sky-400 z-0 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
              {/* Main Content Box */}
              <div className="relative z-10 bg-white border border-slate-100 p-6 h-full flex flex-col items-start shadow-sm">
                <span className="text-xs font-bold text-sky-700 px-2 py-1 bg-sky-50 font-en mb-4">03 / SAFETY</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">CNS12514 防火</h3>
                <p className="text-sm text-slate-500 mb-4 flex-grow">全數具備內政部建築新工法認可書，提供 1~2 小時最高等級防火遮焰。</p>
                <div className="flex items-center gap-2 text-[10px] text-sky-600 font-bold uppercase mt-auto">
                  <span className="material-symbols-outlined text-sm">local_fire_department</span>
                  <span>國家甲級防護標準</span>
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="relative group">
              {/* Offset Background Square */}
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-emerald-400 z-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
              {/* Main Content Box */}
              <div className="relative z-10 bg-white border border-slate-100 p-6 h-full flex flex-col items-start shadow-sm">
                <span className="text-xs font-bold text-emerald-700 px-2 py-1 bg-emerald-50 font-en mb-4">04 / WARRANTY</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">25年防護承諾</h3>
                <p className="text-sm text-slate-500 mb-4 flex-grow">嚴選國際大廠塗層，耐酸雨腐蝕、抗紫外線，出具原廠長期保固。</p>
                <div className="flex items-center gap-2 text-[10px] text-emerald-600 font-bold uppercase mt-auto">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span>官方保證書存檔</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
"""

new_content = imports_and_start + "      {/* SECTION 1: HERO */}" + hero_section + section2 + section3 + section4 + "      {/* SECTION 5: CTA */}" + cta_section

with open('src/pages/AboutPage.tsx', 'w') as f:
    f.write(new_content)
