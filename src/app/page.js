import Image from "next/image";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    // overflow-x-hidden WAJIB biar logo miring gak bikin scroll samping di HP
    <main className="min-h-screen bg-peony overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <header className="relative py-20 md:py-32 text-center px-4 overflow-hidden">
        
        {/* 1. LAYER BACKGROUND (Paling Belakang) */}
        <div className="absolute inset-0 z-0">
          {/* Foto Background */}
          <Image 
            src="/images/ft2.webp" // <--- GANTI SESUAI NAMA FILE FOTO LO
            alt="Background Kuukiss"
            fill
            className="object-cover opacity-20" // Opacity biar ga balapan sama logo
            priority
          />
          {/* Efek Gradasi (Fade ke warna background utama) */}
          <div className="absolute inset-0 bg-gradient-to-b from-peony/30 via-peony/60 to-peony"></div>
        </div>

        {/* 2. LAYER KONTEN (Di Depan Background) */}
        <div className="relative z-10">
            
            {/* Logo Area (Miring & Besar) */}
            <div className="relative w-48 h-48 mx-auto mb-8 md:w-64 md:h-64 -rotate-15 transform-gpu transition-transform hover:-rotate-12">
              <Image 
                src="/images/logo2.png"
                alt="Logo Kuukiss"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Tagline */}
            <p className="text-espresso text-xl md:text-3xl max-w-lg mx-auto font-bold leading-relaxed font-body drop-shadow-sm">
              Teman manis untuk harimu yang estetik.
            </p>
        </div>
      </header>

      {/* --- PRODUCT LIST --- */}
      <ProductList />
      
      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-espresso/60 font-medium relative z-10">
        <p className="font-handwriting text-3xl mb-2">Thank you!</p>
        <p className="text-sm">© 2025 Kuukiss. Stay sweet.</p>
      </footer>
    </main>
  );
}