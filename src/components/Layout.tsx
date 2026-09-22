import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="bg-transparent text-slate-800 antialiased selection:bg-sky-500 selection:text-white min-h-screen flex flex-col relative rounded-full">
      {/* Global Architectural Background Elements */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-slate-300/20" />
        <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-slate-300/20" />
        <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-slate-300/20" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-300/20 top-[20%]" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-300/20 top-[60%]" />
      </div>

      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
