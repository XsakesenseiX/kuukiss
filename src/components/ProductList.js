"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// --- KONFIGURASI ---
const phoneNumber = "6285121307719"; 
const instagramHandle = "@kuukiss.ss";
const createWaLink = (productName) => {
  const message = `Halo Min kiss! saya mau pesan ${productName}.`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

const products = [
  {
    id: 1,
    status: "ready", 
    name: "Choco Melter",
    price: "Rp 85.000",
    shortDesc: "Coklat lumer di dalam, crunchy di luar.",
    fullDesc: "Menggunakan dark chocolate premium 70% yang meleleh sempurna saat digigit. Best seller kami yang bikin nagih!",
    image: "/images/ft1.webp",
    moreImages: ["/images/ft3.webp", "/images/ft4.webp"],
    tag: "Favorite",
  },
  {
    id: 2,
    status: "coming_soon",
    name: "Red Velvet Soft",
    price: "Rp 90.000",
    shortDesc: "Lembut parah, dengan cream cheese asli.",
    fullDesc: "Varian yang sedang kami sempurnakan resepnya.",
    image: "/images/cookies2.webp",
    moreImages: [], 
    tag: "New",
  },
  {
    id: 3,
    status: "coming_soon",
    name: "Matcha Greentea",
    price: "Rp 88.000",
    shortDesc: "Pahit manis pas.",
    fullDesc: "Menggunakan matcha import Jepang asli.",
    image: "/images/cookies3.webp",
    moreImages: [],
    tag: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductList() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id, status) => {
    if (status === 'coming_soon') return;
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="pb-20 px-4 pt-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-handwriting text-5xl text-espresso text-center mb-10 drop-shadow-sm">
          Menu Pilihan
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {products.map((item) => {
            const isExpanded = expandedId === item.id;
            const isReady = item.status === "ready";

            return (
              <motion.div
                key={item.id}
                layout 
                variants={cardVariants}
                whileHover={isReady && !isExpanded ? { y: -5 } : {}}
                className={`
                  rounded-3xl p-4 shadow-sm transition-all duration-500 border border-espresso/5 overflow-hidden relative
                  ${isReady ? 'bg-white/70 backdrop-blur-md' : 'bg-white/40 border-dashed border-espresso/20'} 
                  ${isExpanded ? 'md:col-span-2 md:row-span-2 z-20 shadow-xl' : ''}
                `}
              >
                <motion.div 
                  layout
                  onClick={() => toggleExpand(item.id, item.status)}
                  className={`relative h-72 w-full rounded-2xl overflow-hidden shadow-inner bg-white group 
                    ${isReady ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  {item.tag && isReady && (
                    <span className="absolute top-4 left-4 z-10 bg-espresso text-peony text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {item.tag}
                    </span>
                  )}

                  {isReady ? (
                    <>
                      <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-all z-10 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <p className="text-white font-body text-sm bg-espresso/80 px-3 py-1 rounded-full">Klik untuk detail</p>
                      </div>
                      <motion.div className="w-full h-full relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </motion.div>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-espresso/30">
                        <span className="font-handwriting text-8xl opacity-50">?</span>
                        <span className="font-bold text-xs uppercase tracking-widest mt-2">Coming Soon</span>
                    </div>
                  )}
                </motion.div>

                <motion.div layout className="pt-6 pb-2 px-2 text-center">
                  <h3 className="font-handwriting text-3xl text-espresso mb-2">
                    {isReady ? item.name : "Secret Menu"}
                  </h3>
                  
                  {!isExpanded && (
                     <motion.p initial={{opacity: 0}} animate={{opacity: 1}} className="text-espresso/70 text-sm mb-5 min-h-[40px] leading-relaxed font-body line-clamp-2">
                        {isReady ? item.shortDesc : "Sesuatu yang spesial sedang kami siapkan di dapur..."}
                     </motion.p>
                  )}
                </motion.div>
                
                <AnimatePresence>
                  {isExpanded && isReady && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="px-4 pb-6 text-left"
                    >
                      <p className="text-espresso/80 font-body mb-6 leading-relaxed">
                        {item.fullDesc}
                      </p>
                      
                      {item.moreImages.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 mb-6">
                           {item.moreImages.map((imgSrc, idx) => (
                             <div key={idx} className="relative h-32 rounded-xl overflow-hidden">
                                <Image src={imgSrc} alt={`${item.name} detail ${idx}`} fill className="object-cover" />
                             </div>
                           ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div layout className="flex items-center justify-between mt-auto px-2 border-t border-espresso/10 pt-4 font-body">
                    {isReady ? (
                      <>
                        <span className="text-espresso font-extrabold text-lg">
                            {item.price}
                        </span>
                        <motion.a
                        href={createWaLink(item.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.95 }}
                        className="bg-espresso text-peony px-6 py-2.5 rounded-full font-bold text-sm hover:bg-espresso/90 transition-colors shadow-md flex items-center gap-2"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                        Pesan
                        </motion.a>
                      </>
                    ) : (
                      <div className="w-full text-center py-2 flex items-center justify-center gap-2 text-espresso/40">
                          <span className="text-xs font-bold uppercase tracking-wider">Stay Tuned</span>
                      </div>
                    )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- SECTION KONTAK (FIX: PAKE TOMBOL) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center pb-12"
        >
            <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-espresso/10 max-w-lg mx-auto shadow-sm">
                <h3 className="font-handwriting text-4xl text-espresso mb-2">Mau tanya-tanya?</h3>
                <p className="text-espresso/60 text-sm mb-8 font-body">Jangan ragu buat sapa kita dulu, bestie.</p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center font-body font-bold">
                    {/* Tombol IG */}
                    <a href={`https://instagram.com/${instagramHandle.replace('@','')}`} target="_blank" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-espresso/10 text-espresso hover:bg-espresso/5 transition-colors group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        <span>Follow Instagram</span>
                    </a>
                    
                    {/* Tombol WA (CTA Jelas) */}
                    <a href={`https://wa.me/${phoneNumber}`} target="_blank" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white shadow-lg hover:bg-green-700 hover:shadow-xl transition-all group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-rotate-12 transition-transform"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        <span>Chat Min Kiss</span>
                    </a>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}