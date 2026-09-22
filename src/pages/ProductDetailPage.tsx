import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  TableProperties, 
  Building2, 
  Mail, 
  FileText 
} from 'lucide-react';
import { getProductById, PRODUCTS_LIST, ProductItemData } from '../data/productsData';

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProductById(productId) : undefined;
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setActiveTab(0);
  }, [productId]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = product.relatedProductIds
    .map((id) => PRODUCTS_LIST.find((p) => p.id === id))
    .filter((p): p is ProductItemData => !!p);

  return (
    <div className="flex flex-col w-full bg-white">
      {/* 01｜Product Hero */}
      <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${product.heroImage}')` }}
        ></div>
        <div className="absolute inset-0 bg-slate-900/60 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-[1]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-md"
          >
            {product.h1}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base text-slate-200 mt-5 max-w-2xl mx-auto leading-relaxed"
          >
            {product.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8"
          >
            <Link
              to="/inquiry"
              className="inline-flex items-center gap-2 px-7 py-3  bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm tracking-wider transition-all shadow-lg hover:shadow-sky-500/30 rounded-full"
            >
              <span>立即洽詢此產品</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 02｜產品特性 (簡短文字＋特點條列＋產品主圖) */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-snug">
              {product.featureH2}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              {product.featureDesc}
            </p>

            {/* 3~4 個簡短特色重點 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.featureBullets.map((bullet, idx) => {
                const parts = bullet.split('：');
                const title = parts.length > 1 ? parts[0] : '';
                const desc = parts.length > 1 ? parts[1] : bullet;

                return (
                  <div key={idx} className="flex items-start gap-3 p-4  bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      {title && <div className="text-sm font-bold text-slate-900 mb-0.5">{title}</div>}
                      <div className="text-xs text-slate-600 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative  overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] bg-slate-100">
              <img
                src={product.featureImage}
                alt={product.featureH2}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* 專屬特殊模組（已移除） */}
      </section>

      {/* 03｜規格與應用範圍 (Tabs Design) */}
      <section className="py-16 md:py-24 px-6 bg-[#f8faf9] border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 lg:mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {product.specH2}
            </h2>
            <p className="text-sm text-slate-600">
              透明規格數據與應用範圍，提供建築師與工程團隊精確的選材依據。
            </p>
          </div>

          {(() => {
            const tabs = [
              {
                title: '產品規格與技術要點',
                icon: <TableProperties className="w-5 h-5 shrink-0" />,
                image: product.featureImage,
                contentTitle: '核心規格參數表',
                type: 'table' as const,
              },
              ...product.applications.map((app, idx) => ({
                title: app.title,
                icon: <Building2 className="w-5 h-5 shrink-0" />,
                image: product.appPhotos[idx]?.image || product.heroImage,
                contentTitle: `${app.title} 應用要點`,
                type: 'bullets' as const,
                bullets: app.desc.split(/[，。、]/).filter((s: string) => s.trim().length > 0)
              }))
            ];
            const currentTab = tabs[activeTab];

            return (
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* 左側選單 */}
                <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-3">
                  {tabs.map((tab, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`flex items-center gap-4 px-5 py-4  transition-all text-left bg-white
                        ${activeTab === idx 
                          ? 'border-[1.5px] border-sky-600 shadow-md ring-1 ring-sky-600/10' 
                          : 'border border-transparent shadow-sm hover:shadow-md hover:border-slate-200'
                        }`}
                    >
                      <div className={`${activeTab === idx ? 'text-sky-600' : 'text-slate-400'}`}>
                        {tab.icon}
                      </div>
                      <span className={`font-bold text-sm ${activeTab === idx ? 'text-slate-900' : 'text-slate-600'}`}>
                        {tab.title}
                      </span>
                    </button>
                  ))}
                </div>

                {/* 右側內容 */}
                <div className="w-full lg:flex-1">
                  <div className=" overflow-hidden mb-8 shadow-sm bg-slate-200 aspect-[16/9] md:aspect-[2/1]">
                    <img 
                      src={currentTab.image} 
                      alt={currentTab.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      {currentTab.contentTitle}
                    </h3>
                    
                    {currentTab.type === 'table' ? (
                      <div className="bg-white  border border-slate-200 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 text-xs font-bold tracking-wider uppercase">
                                {product.specTable.headers.map((header, idx) => (
                                  <th key={idx} className="py-4 px-6 font-semibold whitespace-nowrap">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                              {product.specTable.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors">
                                  {row.map((cell, cIdx) => (
                                    <td
                                      key={cIdx}
                                      className={`py-4 px-6 whitespace-nowrap ${
                                        cIdx === 0 ? 'font-bold text-slate-900' : ''
                                      }`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4">
                        {currentTab.bullets?.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                            <span className="text-slate-700 text-base leading-relaxed font-medium">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 04｜實際應用／搭配方式 (工程照片＋簡短說明) */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                {product.appH2}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.appPhotos.map((item, idx) => (
              <div
                key={idx}
                className="group  overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05-A｜相關產品 (2~4 個推薦) */}
      {relatedProducts.length > 0 && (
        <section className="py-14 px-6 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">相關產品</h2>
              </div>
              <Link
                to="/products"
                className="text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors inline-flex items-center gap-1"
              >
                查看全部產品 <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/products/${rel.id}`}
                  className="group bg-white  overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative h-40 overflow-hidden bg-slate-100">
                    <img
                      src={rel.heroImage}
                      alt={rel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-sky-600 uppercase font-en">{rel.enName}</span>
                      <h3 className="text-base font-bold text-slate-900 mt-0.5 group-hover:text-sky-600 transition-colors">
                        {rel.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{rel.heroDesc}</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 text-xs font-bold text-sky-600 inline-flex items-center gap-1">
                      了解產品詳情 <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 06｜詢問 CTA */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden text-white bg-slate-800">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/src/assets/images/frp_skylight_roof_1789547542265.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30 z-[1]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-xs font-en text-sky-300 tracking-[0.3em] font-bold uppercase block mb-3 drop-shadow-sm">
            START YOUR ENGINEERING CONSULTATION
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white tracking-tight mb-4 leading-snug max-w-3xl drop-shadow-md">
            {product.ctaTitle}
          </h2>
          <p className="text-sm md:text-base text-slate-100 font-normal mb-10 max-w-xl leading-relaxed drop-shadow-sm">
            {product.ctaDesc}
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
