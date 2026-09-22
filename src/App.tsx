import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { MethodsPage } from './pages/MethodsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { NewsPage } from './pages/NewsPage';
import { InquiryPage } from './pages/InquiryPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProductDetailPage } from './pages/ProductDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:productId" element={<ProductDetailPage />} />
          <Route path="methods" element={<MethodsPage />} />
          <Route path="methods/:categoryId" element={<MethodsPage />} />
          <Route path="methods/:categoryId/:itemId" element={<MethodsPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/:categoryId" element={<PortfolioPage />} />
          <Route path="portfolio/:categoryId/:projectId" element={<PortfolioPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:articleId" element={<NewsPage />} />
          <Route path="inquiry" element={<InquiryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
