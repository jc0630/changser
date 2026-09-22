import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-1.5  bg-white/90 shadow-sm">
                <img
                  alt="強實企業 Logo"
                  className="h-7 w-auto object-contain"
                  src="/LOGO CS.png"
                />
              </div>
              <span className="text-base font-bold text-white tracking-wider">強實企業股份有限公司</span>
            </div>
            <p className="text-slate-400 text-xs font-normal leading-relaxed max-w-sm mb-6">
              專業金屬屋頂與帷幕外牆工程統包規劃，深耕金屬材料供應鏈與高規格防火隔熱結構工藝，賦予建築長效永續的立面生命力。
            </p>
            <div className="space-y-1.5 text-slate-300">
              <div>
                <span className="text-sky-400 font-medium">聯絡電話：</span>(02) 2345-6789
              </div>
              <div>
                <span className="text-emerald-400 font-medium">服務信箱：</span>service@qiangshi.com.tw
              </div>
              <div>
                <span className="text-sky-400 font-medium">公司地址：</span>新北市土城區永寧科技園區工業路 128 號
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider mb-4">工程服務項目</h4>
            <ul className="space-y-2.5">
              <li>
                <Link className="hover:text-sky-400 transition-colors" to="/services/design-planning">建築設計規劃</Link>
              </li>
              <li>
                <Link className="hover:text-sky-400 transition-colors" to="/services/construction">金屬屋頂外牆施工</Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 transition-colors" to="/services/fireproof-systems">屋牆面防火系統</Link>
              </li>
              <li>
                <Link className="hover:text-sky-400 transition-colors" to="/services/facelift-renovation">金屬屋頂外牆拉皮翻新</Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 transition-colors" to="/methods">專業施工做法</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider mb-4">主要產品系列</h4>
            <ul className="space-y-2.5">
              <li>
                <Link className="hover:text-sky-400 transition-colors" to="/products/color-steel">彩色鋼板系列</Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 transition-colors" to="/products/sandwich-panel">隔熱三明治板</Link>
              </li>
              <li>
                <Link className="hover:text-sky-400 transition-colors" to="/products/aluminum-composite">鋁複合板帷幕</Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 transition-colors" to="/products/titanium-zinc">頂級鈦鋅板系統</Link>
              </li>
              <li>
                <Link className="hover:text-sky-400 transition-colors" to="/products/anodized-aluminum">氧化鋁合金板</Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 transition-colors" to="/products/steel-tile">屋頂鋼瓦系統</Link>
              </li>
              <li>
                <Link className="hover:text-sky-400 transition-colors" to="/products/frp-skylight">FRP 耐候採光板</Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 transition-colors" to="/products/metal-louvers">金屬隔柵系統</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider mb-4">實績與資訊</h4>
            <ul className="space-y-2.5">
              <li>
                <Link className="hover:text-sky-400 transition-colors" to="/about">關於強實企業</Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 transition-colors" to="/portfolio">工程實績案例</Link>
              </li>
              <li>
                <Link className="hover:text-sky-400 transition-colors" to="/news">最新消息與新訊</Link>
              </li>
              <li>
                <Link className="hover:text-emerald-400 transition-colors" to="/inquiry">線上專案詢價</Link>
              </li>
              <li>
                <Link className="hover:text-sky-400 transition-colors" to="/inquiry">全台營業據點</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 強實企業股份有限公司 Qiang Shi Architectural Systems Ltd. 版權所有。
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <span>金屬外覆專家</span>
            <span className="w-1 h-1  bg-sky-500"></span>
            <span>建築美學工程</span>
            <span className="w-1 h-1  bg-emerald-500"></span>
            <span>永續綠建築方案</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
