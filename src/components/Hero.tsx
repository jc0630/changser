import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Full background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/src/assets/images/metal_louvers_facade_1789547511954.jpg')",
        }}
      ></div>
      {/* Subtle overlay to make text readable */}
      <div className="absolute inset-0 bg-black/45 z-[1]"></div>
      
      {/* Subtle top gradient for navbar readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 z-[1]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
           <span className="w-8 h-[2px] bg-sky-400"></span>
           <span className="text-xs font-en text-white tracking-[0.3em] uppercase font-bold text-shadow">ECO-FRIENDLY & INNOVATIVE</span>
           <span className="w-8 h-[2px] bg-emerald-400"></span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-widest text-white leading-tight drop-shadow-2xl shadow-black"
        >
          強實企業｜金屬屋頂外牆材料專業廠商
        </motion.h1>
      </div>
    </section>
  );
}
