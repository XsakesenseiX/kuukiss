import Image from "next/image";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen bg-peony overflow-hidden">
      {/* Hero Section */}
      <header className="py-16 md:py-24 text-center px-4 relative z-10">
        <div className="relative w-64 h-64 mx-auto mb-8 md:w-80 md:h-80 -rotate-15 transform-gpu transition-transform hover:-rotate-12">
          <Image 
            src="/images/logo2.png" // Pastikan file ada di public/images/logo.png
            alt="Logo Kuukiss"
            fill
            className="object-contain drop-shadow-md"
            priority
          />
        </div>
        {/* --------------------------- */}

        {/* Tagline */}
        <p className="text-espresso/80 text-xl md:text-2xl max-w-lg mx-auto font-medium leading-relaxed font-body relative z-20">
          Teman manis untuk harimu yang estetik.
        </p>
      </header>

      {/* Product Section */}
      <ProductList />
      
      {/* Footer */}
      <footer className="py-12 text-center text-espresso/60 font-medium relative z-10">
        <p className="font-handwriting text-3xl mb-2">Thank you!</p>
        <p className="text-sm">© 2025 Kuukiss. Stay sweet.</p>
      </footer>
    </main>
  );
}