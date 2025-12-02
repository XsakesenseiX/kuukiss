"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// --- DATA PRODUK ---
const products = [
  {
    id: 1,
    name: "Choco Melter",
    price: "Rp 85.000",
    desc: "Coklat lumer di dalam, crunchy di luar. Best seller!",
    image: "/images/cookies1.webp",
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

// --- VARIAN ANIMASI ---
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
    <section className="pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-handwriting text-5xl text-espresso text-center mb-12 drop-shadow-sm">
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
              whileHover={{ y: -8, rotate: 1 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-espresso/5 group"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-inner bg-white">
                {item.tag && (
                  <span className="absolute top-4 left-4 z-10 bg-espresso text-peony text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {item.tag}
                  </span>
                )}
                <motion.div className="w-full h-full relative" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="pt-6 pb-2 px-2 text-center">
                <h3 className="font-handwriting text-3xl text-espresso mb-2">{item.name}</h3>
                <p className="text-espresso/70 text-sm mb-5 min-h-[40px] leading-relaxed font-body">
                  {item.desc}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-espresso font-extrabold text-lg font-body">
                        {item.price}
                    </span>
                    <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="bg-espresso text-peony px-6 py-2.5 rounded-full font-bold text-sm hover:bg-espresso/90 transition-colors shadow-md"
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