import { motion } from 'motion/react';

export function InquiryPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Hero Banner - 像首頁一樣僅留下標題文字，背景完整清晰 */}
      <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/src/assets/images/renovation_before_after_1789545891892.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-[1]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-widest text-white leading-tight drop-shadow-lg"
          >
            聯絡我們
          </motion.h1>
        </div>
      </section>
      
      <section className="w-full py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">企業總部 Headquarters</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12  bg-slate-50 flex items-center justify-center text-sky-600 shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">總公司地址</h4>
                    <p className="text-slate-600 mt-1">台北市內湖區行善路 168 號 8 樓</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12  bg-slate-50 flex items-center justify-center text-sky-600 shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">聯絡電話</h4>
                    <p className="text-slate-600 mt-1 font-en">+886-2-2798-8888</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12  bg-slate-50 flex items-center justify-center text-sky-600 shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">電子信箱</h4>
                    <p className="text-slate-600 mt-1 font-en">info@qiangshi-engineering.com.tw</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full h-64  overflow-hidden bg-slate-200">
              {/* This could be a Google Maps iframe or an image placeholder */}
              <div className="w-full h-full bg-slate-200 flex flex-col items-center justify-center text-slate-500">
                <span className="material-symbols-outlined text-4xl mb-2 text-slate-400">map</span>
                <span>Google Maps Location</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 p-8 lg:p-12  border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">專案諮詢表單</h2>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700">姓名 / 公司名稱 *</label>
                  <input type="text" id="name" className="w-full px-4 py-3  border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" placeholder="請輸入姓名或公司名稱" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-700">聯絡電話 *</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3  border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" placeholder="請輸入聯絡電話" required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-700">電子信箱 *</label>
                <input type="email" id="email" className="w-full px-4 py-3  border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" placeholder="請輸入電子信箱" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-sm font-bold text-slate-700">諮詢類別</label>
                <select id="category" className="w-full px-4 py-3  border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white text-slate-700">
                  <option>建材產品詢價</option>
                  <option>工程規劃與評估</option>
                  <option>技術文件索取</option>
                  <option>其他合作提案</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">需求說明 *</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3  border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all resize-none" placeholder="請簡述您的需求或專案概況..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-4  shadow-lg hover:-translate-y-0.5 transition-all mt-4 rounded-full">
                送出表單
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
