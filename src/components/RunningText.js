"use client";
import { motion } from "framer-motion";

export default function RunningText() {
  return (
    <div className="bg-espresso text-peony py-3 overflow-hidden whitespace-nowrap border-y border-white/10 relative z-20">
      <motion.div
        className="flex gap-12 font-body font-bold text-sm tracking-widest uppercase"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Kecepatan jalan
        }}
      >
        {/* Looping teks biar panjang */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            <span>✨ Freshly Baked Daily</span>
            <span>🍪 Premium Ingredients</span>
            <span>💖 Made with Love</span>
            <span>📦 Pengiriman Seluruh Indonesia</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}