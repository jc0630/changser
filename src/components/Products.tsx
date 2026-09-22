import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface ProductItem {
  id: string;
  title: string;
  desc: string;
  tag: string;
  img: string;
}

export function Products() {
  // Row 1: 2 Cards
  const row1Products: ProductItem[] = [
    {
      id: 'color-steel',
      title: '彩色鋼板',
      desc: '高耐候 PVDF/SMP 塗裝，耐酸雨抗紫外線，適用大跨距工業廠房屋頂與牆面。',
      tag: 'CNS 10804',
      img: '/src/assets/images/color_steel_detail_1789547480465.jpg',
    },
    {
      id: 'sandwich-panel',
      title: '三明治板',
      desc: 'PIR/岩棉高發泡芯材，具優異隔音保溫與耐燃防火性能，冷鏈物流首選。',
      tag: 'CNS 耐燃一級',
      img: '/src/assets/images/metal_wall_fire_system_1789545864095.jpg',
    },
  ];

  // Row 2: 2 Cards
  const row2Products: ProductItem[] = [
    {
      id: 'aluminum-composite',
      title: '鋁複合板',
      desc: '質輕平整、易於曲面折彎成型，廣泛應用於現代商務大樓與展館帷幕外牆。',
      tag: '帷幕立面專用',
      img: '/src/assets/images/anodized_aluminum_1789547570311.jpg',
    },
    {
      id: 'titanium-zinc',
      title: '鈦鋅板',
      desc: '歐洲進口鈍化純鋅合金，天然氧化層具自體修復功能，使用年限可達百年。',
      tag: '百年自體修復',
      img: '/src/assets/images/titanium_zinc_wall_1789547498027.jpg',
    },
  ];

  // Row 3: 3 Cards
  const row3Products: ProductItem[] = [
    {
      id: 'anodized-aluminum',
      title: '氧化鋁合金板',
      desc: '經陽極氧化處理，表面金屬硬度高達 8H，耐磨且具現代科技奢華質感。',
      tag: '硬度 8H 陽極氧化',
      img: '/src/assets/images/metal_louvers_facade_1789547511954.jpg',
    },
    {
      id: 'steel-tile',
      title: '屋頂鋼瓦系統',
      desc: '高鍍鋁鋅鋼板結合立體模壓瓦型，具超高抗風壓防震耐候性，兼具瓦片美觀。',
      tag: '抗強颱 17 級',
      img: '/src/assets/images/roof_steel_tile_1789547590738.jpg',
    },
    {
      id: 'frp-skylight',
      title: 'FRP 採光板與配件',
      desc: '添加抗 UV 聚酯薄膜防黃化，透光率高達 80% 以上，為廠房提供溫潤自然光源。',
      tag: '透光率 80%+ 防黃化',
      img: '/src/assets/images/frp_skylight_roof_1789547542265.jpg',
    },
  ];

  const renderProductCard = (item: ProductItem, index: number, isThreeCol: boolean = false) => {
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Link
          to={`/products/${item.id}`}
          className={`group relative block w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 ${
            isThreeCol ? 'h-[360px] sm:h-[400px] md:h-[440px]' : 'h-[380px] sm:h-[430px] md:h-[480px]'
          }`}
        >
          {/* Background Image with Zoom on Hover */}
          <img
            alt={item.title}
            src={item.img}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Overall Dim Overlay */}
          <div className="absolute inset-0 bg-slate-950/25 group-hover:bg-slate-950/15 transition-colors duration-300"></div>

          {/* Rich Bottom Dark Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent"></div>

          {/* Architectural Spec Tag */}
          <div className="absolute top-5 left-5 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-en font-bold tracking-wider uppercase text-white bg-slate-900/60 backdrop-blur-md border border-white/20 shadow-sm">
              <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span>
              {item.tag}
            </span>
          </div>

          {/* Content pinned to Bottom Left */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end text-left z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-sky-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-normal mb-4 line-clamp-2 max-w-xl">
              {item.desc}
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/95 group-hover:text-white transition-colors">
              <span>查看產品系列</span>
              <ChevronRight className="w-4 h-4 text-white/80 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <section className="w-full py-20 md:py-28 bg-slate-50/80 relative overflow-hidden" id="products">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-sky-100 z-0 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-sky-800 text-[11px] font-en font-bold tracking-[0.2em] uppercase mb-4 border border-sky-100 shadow-xs">
            <span className="w-1.5 h-1.5 bg-sky-500 rounded-sm"></span>
            ARCHITECTURAL MATERIAL SPECIMEN
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            產品總覽：彩色鋼板、三明治板、鋁複合板、鈦鋅板
          </h2>
          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            強實企業嚴選四大核心金屬建材體系——高耐候彩色鋼板、防火隔熱三明治板、立面平整鋁複合板與百年耐候鈦鋅板，兼具卓越抗風壓、耐蝕性與現代建築美學。
          </p>
        </div>

        {/* 7-Card Showcase matching reference layout (2 + 2 + 3) */}
        <div className="space-y-6">
          {/* Row 1: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {row1Products.map((item, idx) => renderProductCard(item, idx, false))}
          </div>

          {/* Row 2: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {row2Products.map((item, idx) => renderProductCard(item, idx + 2, false))}
          </div>

          {/* Row 3: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {row3Products.map((item, idx) => renderProductCard(item, idx + 4, true))}
          </div>
        </div>

        {/* Section Footer: Link to Full Catalog */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-white hover:bg-sky-50 border border-sky-300 text-sky-700 hover:text-sky-900 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xs"
          >
            <span>瀏覽完整產品目錄與各項材料檢驗報告</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
