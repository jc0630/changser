import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { PRODUCTS_LIST } from '../data/productsData';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setProductsOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const serviceSubItems = [
    { name: '建築設計規劃', path: '/services/design-planning', desc: '金屬外覆系統客製化設計' },
    { name: '金屬屋頂外牆施工', path: '/services/construction', desc: '隔熱工法與專業安裝服務' },
    { name: '屋牆面防火系統', path: '/services/fireproof-systems', desc: '金屬外牆防火工程設計' },
    { name: '金屬屋頂外牆拉皮翻新', path: '/services/facelift-renovation', desc: '老屋外觀升級工程' },
  ];

  const isServicesActive = location.pathname.startsWith('/services');
  const isProductsActive = location.pathname.startsWith('/products');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-sky-100 shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      {/* Full width container without max-w restriction */}
      <div className="w-full h-20 px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Left: Full-width Left-aligned Logo */}
        <Link className="flex items-center gap-3.5 group shrink-0" to="/">
          <div className={`p-1.5 transition-colors shadow-sm ${scrolled ? 'bg-white border border-slate-200' : 'bg-white border border-white/80'}`}>
            <img
              alt="強實企業 Logo"
              className="h-8 md:h-9 w-auto object-contain"
              src="/LOGO CS.png"
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-lg md:text-xl font-bold tracking-wider transition-colors ${scrolled ? 'text-slate-900 group-hover:text-sky-600' : 'text-white group-hover:text-sky-200'}`}>
              強實企業
            </span>
            <span className={`text-[9px] md:text-[10px] tracking-[0.2em] font-en uppercase font-semibold transition-colors ${scrolled ? 'text-sky-600' : 'text-sky-100'}`}>
              QIANG SHI ENTERPRISES
            </span>
          </div>
        </Link>

        {/* Right: Right-aligned Menu items + CTA button */}
        <div className="flex items-center gap-6 xl:gap-8 shrink-0">
          {/* 桌面版導覽列 */}
          <nav className={`hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium tracking-wide transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-100'}`}>
            <Link
              to="/"
              className={`transition-colors ${
                location.pathname === '/' 
                  ? scrolled ? 'text-sky-600 border-b-2 border-sky-600 pb-1 font-semibold' : 'text-white border-b-2 border-white pb-1 font-semibold'
                  : scrolled ? 'hover:text-sky-600' : 'hover:text-white'
              }`}
            >
              首頁
            </Link>

            <Link
              to="/about"
              className={`transition-colors ${
                location.pathname === '/about' 
                  ? scrolled ? 'text-sky-600 border-b-2 border-sky-600 pb-1 font-semibold' : 'text-white border-b-2 border-white pb-1 font-semibold'
                  : scrolled ? 'hover:text-sky-600' : 'hover:text-white'
              }`}
            >
              關於強實
            </Link>

            {/* 服務項目下拉選單 */}
            <div
              ref={servicesDropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 transition-colors ${
                  isServicesActive
                    ? scrolled ? 'text-sky-600 border-b-2 border-sky-600 pb-1 font-semibold' : 'text-white border-b-2 border-white pb-1 font-semibold'
                    : scrolled ? 'hover:text-sky-600' : 'hover:text-white'
                }`}
              >
                <span>服務項目</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full -left-4 w-64 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white/90 shadow-xl border border-slate-100 p-2 overflow-hidden">
                    {serviceSubItems.map((item) => {
                      const isSubActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-4 py-2.5 transition-all ${
                            isSubActive
                              ? 'bg-sky-50 text-sky-600'
                              : 'hover:bg-slate-50 text-slate-800'
                          }`}
                        >
                          <div className="text-sm font-bold">{item.name}</div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 產品介紹下拉選單 */}
            <div
              ref={productsDropdownRef}
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <Link
                to="/products"
                className={`flex items-center gap-1 transition-colors ${
                  isProductsActive
                    ? scrolled ? 'text-sky-600 border-b-2 border-sky-600 pb-1 font-semibold' : 'text-white border-b-2 border-white pb-1 font-semibold'
                    : scrolled ? 'hover:text-sky-600' : 'hover:text-white'
                }`}
              >
                <span>產品介紹</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </Link>

              {productsOpen && (
                <div className="absolute top-full -left-12 w-64 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white/90 shadow-xl border border-slate-100 p-3 overflow-hidden">
                    <div className="px-3 py-1.5 mb-1 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">產品分類選單</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      {PRODUCTS_LIST.map((prod) => {
                        const isSubActive = location.pathname === `/products/${prod.id}`;
                        return (
                          <Link
                            key={prod.id}
                            to={`/products/${prod.id}`}
                            className={`block px-3 py-2 transition-all ${
                              isSubActive
                                ? 'bg-sky-50 text-sky-600'
                                : 'hover:bg-slate-50 text-slate-800'
                            }`}
                          >
                            <div className="text-xs font-bold truncate">{prod.name}</div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/methods"
              className={`transition-colors ${
                location.pathname.startsWith('/methods') 
                  ? scrolled ? 'text-sky-600 border-b-2 border-sky-600 pb-1 font-semibold' : 'text-white border-b-2 border-white pb-1 font-semibold'
                  : scrolled ? 'hover:text-sky-600' : 'hover:text-white'
              }`}
            >
              施工做法
            </Link>

            <Link
              to="/portfolio"
              className={`transition-colors ${
                location.pathname === '/portfolio' 
                  ? scrolled ? 'text-sky-600 border-b-2 border-sky-600 pb-1 font-semibold' : 'text-white border-b-2 border-white pb-1 font-semibold'
                  : scrolled ? 'hover:text-sky-600' : 'hover:text-white'
              }`}
            >
              工程實績
            </Link>

            <Link
              to="/news"
              className={`transition-colors ${
                location.pathname.startsWith('/news') 
                  ? scrolled ? 'text-sky-600 border-b-2 border-sky-600 pb-1 font-semibold' : 'text-white border-b-2 border-white pb-1 font-semibold'
                  : scrolled ? 'hover:text-sky-600' : 'hover:text-white'
              }`}
            >
              最新消息
            </Link>

            <Link
              to="/inquiry"
              className={`transition-colors ${
                location.pathname === '/inquiry' 
                  ? scrolled ? 'text-sky-600 border-b-2 border-sky-600 pb-1 font-semibold' : 'text-white border-b-2 border-white pb-1 font-semibold'
                  : scrolled ? 'hover:text-sky-600' : 'hover:text-white'
              }`}
            >
              聯絡我們
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider transition-all hover:shadow-lg shrink-0 ${
                scrolled
                  ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
              }`}
              to="/inquiry"
            >
              <span>線上詢價 / 立即洽詢</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/20'
              }`}
              aria-label="打開手機選單"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 手機版選單 */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/90 border-b border-slate-200 px-6 py-6 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-slate-800 font-semibold py-2">首頁</Link>
            <Link to="/about" className="text-slate-800 font-semibold py-2">關於強實</Link>
            
            {/* 手機版服務項目 */}
            <div className="py-2 border-y border-slate-100">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between font-bold text-sky-600 py-1"
              >
                <span>服務項目</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-3 mt-2 space-y-2 text-sm">
                  {serviceSubItems.map((item) => (
                    <Link key={item.path} to={item.path} className="block text-slate-600 py-1 hover:text-sky-600">
                      • {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 手機版產品介紹 */}
            <div className="py-2 border-b border-slate-100">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between font-bold text-sky-600 py-1"
              >
                <span>產品介紹</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProductsOpen && (
                <div className="pl-3 mt-2 grid grid-cols-2 gap-2 text-sm">
                  <Link to="/products" className="col-span-2 block font-semibold text-slate-800 py-1">
                    • 產品總覽
                  </Link>
                  {PRODUCTS_LIST.map((prod) => (
                    <Link key={prod.id} to={`/products/${prod.id}`} className="block text-slate-600 py-1 hover:text-sky-600 text-xs">
                      • {prod.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/methods" className="text-slate-800 font-semibold py-2">施工做法</Link>
            <Link to="/portfolio" className="text-slate-800 font-semibold py-2">工程實績</Link>
            <Link to="/news" className="text-slate-800 font-semibold py-2">最新消息</Link>
            <Link to="/inquiry" className="text-slate-800 font-semibold py-2 text-sky-600">聯絡我們 / 線上詢價</Link>
          </div>
        </div>
      )}
    </header>
  );
}
