import Image from "next/image";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen bg-peony">
      {/* Hero Section */}
      <header className="py-16 md:py-24 text-center px-4">
        
        {/* LOGO AREA */}
        <div className="relative w-48 h-48 mx-auto mb-6 md:w-64 md:h-64">
          <Image 
            src="/images/logo.png" // Pastikan file ini ada di public/images/
            alt="Logo Kuukiss"
            fill
            className="object-contain drop-shadow-sm"
            priority
          />
        </div>

        {/* Tagline */}
        <p className="text-espresso/80 text-xl md:text-2xl max-w-lg mx-auto font-medium leading-relaxed font-body">
          Teman manis untuk harimu yang estetik.
        </p>
      </header>

      {/* Product Section */}
      <ProductList />
      
      {/* Footer */}
      <footer className="py-12 text-center text-espresso/60 font-medium">
        <p className="font-handwriting text-3xl mb-2">Thank you!</p>
        <p className="text-sm">© 2025 Kuukiss. Stay sweet.</p>
      </footer>
    </main>
  );
}