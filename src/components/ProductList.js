"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// --- DATA PRODUK (Sama kayak kemarin) ---
const products = [
  {
    id: 1,
    name: "Choco Melter",
    price: "Rp 85.000",
    desc: "Coklat lumer di dalam, crunchy di luar. Best seller!",
    image: "/images/cookies1.webp", // Pastikan ada filenya
    tag: "Favorite",
  },
  {
    id: 2,
    name: "Red Velvet Soft",
    price: "Rp 90.000",
    desc: "Lembut parah, dengan cream cheese asli yang gurih.",
    image: "/images/cookies2.webp",
    tag: "New",
  },
  {
    id: 3,
    name: "Matcha Greentea",
    price: "Rp 88.000",
    desc: "Pahit manis pas, aroma matchanya premium banget.",
    image: "/images/cookies3.webp",
    tag: null,
  },
];

// --- CONFIG ANIMASI (Tetap sama) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export default function ProductList() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-handwriting text-4xl text-espresso text-center mb-12">
          Menu Pilihan
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -8, rotate: 1 }} // Micro-interaction: goyang dikit biar cute
              // UBAH STYLE CARD DISINI:
              // bg-white/50 = semi-transparan biar warnanya nyatu sama background peony
              // border-espresso/10 = garis tipis warna espresso
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-espresso/10 group"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-inner">
                {item.tag && (
                  // Tag warna Espresso
                  <span className="absolute top-3 left-3 z-10 bg-espresso text-peony text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                )}
                <motion.div className="w-full h-full relative" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="pt-5 pb-2 text-center">
                {/* Judul Produk pake font handwriting */}
                <h3 className="font-handwriting text-2xl text-espresso mb-1">{item.name}</h3>
                <p className="text-espresso/70 text-sm mb-4 min-h-[40px] leading-snug">
                  {item.desc}
                </p>
                
                <div className="flex items-center justify-between px-2">
                    <span className="text-espresso font-extrabold text-lg">
                        {item.price}
                    </span>
                    {/* Button warna Espresso, teks Peony */}
                    <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="bg-espresso text-peony px-5 py-2 rounded-full font-bold text-sm hover:bg-opacity-90 transition-colors"
                    >
                    Beli
                    </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}