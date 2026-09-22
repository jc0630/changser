import { Link } from 'react-router-dom';
import { PRODUCTS_LIST } from '../data/productsData';

export function ProductsPage() {
  const getProducts = (ids: string[]) => {
    return ids
      .map((id) => PRODUCTS_LIST.find((p) => p.id === id))
      .filter(Boolean) as typeof PRODUCTS_LIST;
  };

  const group1 = getProducts(['color-steel', 'steel-tile', 'frp-skylight']);
  const group2 = getProducts(['sandwich-panel']);
  const group3 = getProducts([
    'aluminum-composite',
    'titanium-zinc',
    'anodized-aluminum',
    'metal-louvers',
  ]);
  const group4 = getProducts(['roof-accessories', 'wall-coating']);

  const ProductGrid = ({ products }: { products: typeof PRODUCTS_LIST }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          className="group block bg-white  border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="aspect-[16/10] overflow-hidden bg-slate-100">
            <img
              src={product.heroImage}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
            <p className="text-sm text-slate-600 mb-4 line-clamp-2">{product.heroDesc}</p>
            <span className="inline-flex items-center text-sky-600 font-bold text-sm group-hover:text-sky-700">
              檢視產品詳情 &rarr;
            </span>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* 產品介紹｜金屬屋頂外牆材料總覽 */}
      <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/src/assets/images/metal_louvers_facade_1789547511954.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-[1]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            產品介紹｜金屬屋頂外牆材料總覽
          </h1>
          <p className="text-lg text-slate-200 drop-shadow-md max-w-2xl mx-auto">
            強實企業嚴選各式高品質金屬建材，提供兼具美觀與耐用性的建築外殼解決方案。
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full px-6 py-12 flex flex-col gap-16">
        {/* 彩色鋼板與金屬浪板系列 */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pl-4 border-l-4 border-sky-600">
            彩色鋼板與金屬浪板系列
          </h2>
          <ProductGrid products={group1} />
        </section>

        {/* 三明治板隔熱複合建材 */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pl-4 border-l-4 border-sky-600">
            三明治板隔熱複合建材
          </h2>
          <ProductGrid products={group2} />
        </section>

        {/* 鋁複合板與鈦鋅板特殊金屬材料 */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pl-4 border-l-4 border-sky-600">
            鋁複合板與鈦鋅板特殊金屬材料
          </h2>
          <ProductGrid products={group3} />
        </section>

        {/* 屋頂週邊配件與外牆塗料系統 */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pl-4 border-l-4 border-sky-600">
            屋頂週邊配件與外牆塗料系統
          </h2>
          <ProductGrid products={group4} />
        </section>
      </div>

      {/* 立即洽詢，取得產品報價與建議 */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden text-white bg-slate-800">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/src/assets/images/metal_roof_construction_1789545922655.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30 z-[1]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-xs font-en text-sky-300 tracking-[0.3em] font-bold uppercase block mb-3 drop-shadow-sm">
            START YOUR ENGINEERING CONSULTATION
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white tracking-tight mb-4 leading-snug max-w-3xl drop-shadow-md">
            立即洽詢，取得產品報價與建議
          </h2>
          <p className="text-sm md:text-base text-slate-100 font-normal mb-10 max-w-xl leading-relaxed drop-shadow-sm">
            提供您的工程需求與基地條件，我們將協助評估最適合的材料與工法。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            <Link
              className="px-8 py-3.5  bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm tracking-wider transition-all shadow-lg hover:shadow-sky-500/25 flex items-center gap-2 rounded-full"
              to="/inquiry"
            >
              <span className="material-symbols-outlined text-base">assignment</span>
              <span>線上詢價／立即洽詢</span>
            </Link>
            <a
              className="px-8 py-3.5  bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm tracking-wider transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 rounded-full"
              href="tel:0227988888"
            >
              <span className="material-symbols-outlined text-base">call</span>
              <span>致電工程諮詢專線</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
