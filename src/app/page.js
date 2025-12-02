import ProductList from "../components/ProductList";

export default function Home() {
  return (
    // Ganti background jadi warna Peony
    <main className="min-h-screen bg-peony">
      {/* Hero Section */}
      <header className="py-24 text-center px-4">
        {/* Judul pake font handwriting & warna espresso */}
        <h1 className="font-handwriting text-6xl md:text-7xl text-espresso mb-6 drop-shadow-sm">
          Kuu<span className="text-white/80">kiss</span>.
        </h1>
        <p className="text-espresso/80 text-xl max-w-lg mx-auto font-medium leading-relaxed">
          Teman manis untuk harimu yang estetik. Dibuat dengan cinta dan bahan premium.
        </p>
      </header>

      {/* Komponen List Produk */}
      <ProductList />
      
      {/* Footer */}
      <footer className="py-12 text-center text-espresso/60 font-medium">
        <p className="font-handwriting text-2xl mb-2">Thank you!</p>
        © 2025 Kuukiss. Stay sweet.
      </footer>
    </main>
  );
}