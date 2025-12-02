"use client";
import { motion } from "framer-motion";

const reviews = [
  { name: "Sasa", text: "Cookiesnya lumer banget dimulut! 😭💖" },
  { name: "Dinda", text: "Matcha-nya ga main-main, premium abis." },
  { name: "Raka", text: "Buat kado pacar, dia suka banget. Thanks min!" },
  { name: "Bella", text: "Red Velvet nya juara dunia sih." },
  { name: "Putri", text: "Packaging aman, nyampe cookies masih utuh." },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white/30 backdrop-blur-sm border-y border-espresso/5 overflow-hidden">
      <h3 className="text-center font-handwriting text-4xl text-espresso mb-10">Kata Mereka</h3>
      
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 pl-4"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {/* Kita duplicate array review biar loopingnya mulus (seamless) */}
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-72 bg-white p-6 rounded-2xl shadow-sm border border-espresso/5"
            >
              <p className="text-espresso/70 text-sm mb-4 leading-relaxed italic">"{review.text}"</p>
              <p className="text-espresso font-bold text-xs uppercase tracking-wider">— {review.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}