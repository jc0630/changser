import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, Phone } from 'lucide-react';

export function Inquiry() {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden text-white bg-slate-900" id="inquiry">
      {/* 背景圖片 */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/src/assets/images/metal_roof_construction_1789545922655.jpg')",
        }}
      ></div>
      {/* 遮罩 */}
      <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px] z-[1]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <span className="text-[11px] font-en text-white tracking-[0.3em] font-bold uppercase mb-4 inline-flex items-center gap-2.5 px-4 py-1.5 border border-white/20 bg-white/10 backdrop-blur-xs">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-sm"></span>
          START YOUR ENGINEERING CONSULTATION
        </span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4 leading-snug max-w-3xl"
        >
          立即洽詢，取得金屬屋頂外牆工程報價與建議
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm md:text-base text-slate-300 font-normal mb-10 max-w-xl leading-relaxed"
        >
          強實企業專業工程師團隊隨時為您的建案提供材料規劃、預算評估與工法諮詢。
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full"
        >
          <Link
            className="px-7 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm tracking-wider transition-all shadow-md flex items-center gap-2"
            to="/inquiry"
          >
            <FileText className="w-4 h-4" />
            <span>立即聯絡我們 / 線上詢價表單</span>
          </Link>
          <a
            className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm tracking-wider transition-all shadow-md flex items-center gap-2"
            href="tel:0227988888"
          >
            <Phone className="w-4 h-4" />
            <span>致電工程諮詢專線</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
