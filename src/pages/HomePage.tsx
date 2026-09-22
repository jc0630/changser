import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Products } from '../components/Products';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Inquiry } from '../components/Inquiry';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <Portfolio />
      <Inquiry />
    </>
  );
}

