"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProductList from "../components/ProductList";
import RunningText from "../components/RunningText"; // Import Marquee Atas
import Testimonials from "../components/Testimonials"; // Import Testimoni

export default function Home() {
  return (
    <main className="min-h-screen bg-peony overflow-x-hidden">
      
      {/* HEADER HERO */}
      <header className="relative py-20 md:py-32 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.webp" alt="Background" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-peony/30 via-peony/60 to-peony"></div>
        </div>
        
        <div className="relative z-10">
            {/* LOGO SIZE DIKEMBALIKAN (Lebih Kecil) */}
            {/* Balik ke w-48 h-48 (mobile) dan md:w-64 md:h-64 (desktop) */}
            <motion.div 
              animate={{ rotate: [-15, -5, -15], y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-48 h-48 mx-auto mb-6 md:w-64 md:h-64"
            >
              <Image src="/images/logo.png" alt="Logo" fill className="object-contain drop-shadow-2xl" priority />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-espresso text-xl md:text-3xl max-w-lg mx-auto font-bold font-body drop-shadow-sm"
            >
              Teman manis untuk harimu yang estetik.
            </motion.p>
        </div>
      </header>

      {/* 1. RUNNING TEXT (Info Toko) */}
      <RunningText />

      {/* 2. DAFTAR PRODUK (Menu) */}
      <ProductList />

      {/* 3. TESTIMONI (Review Jalan) */}
      <Testimonials />
      
      <footer className="py-12 text-center text-espresso/60 font-medium relative z-10">
        <p className="font-handwriting text-3xl mb-2">Thank you!</p>
        <p className="text-sm">© 2025 Kuukiss. Stay sweet.</p>
      </footer>
    </main>
  );
}