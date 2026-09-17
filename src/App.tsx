import { Hero } from './components/Hero';
import { Authority } from './components/Authority';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf4f5] text-[#1e0a10] selection:bg-[#861a32]/20 selection:text-[#861a32]">
      <main className="flex-grow">
        <Hero />
        <Authority />
      </main>
      <Footer />
    </div>
  );
}