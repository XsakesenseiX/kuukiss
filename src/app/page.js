import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section Sederhana */}
      <header className="py-20 text-center px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Kuu<span className="text-yellow-500">kiss</span>.
        </h1>
        <p className="text-gray-600 text-lg">
          Cookies paling enak se-antero server.
        </p>
      </header>

      {/* Komponen List Produk */}
      <ProductList />
      
      {/* Footer Sederhana */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        © 2025 Kuukiss. All rights reserved.
      </footer>
    </main>
  );
}