import { Pacifico, Nunito } from "next/font/google";
import "./globals.css";

// 1. Load Font Handwriting Lucu (Buat Judul)
const fontHandwriting = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwriting", // Kita jadiin variabel CSS
  display: "swap",
});

// 2. Load Font Body yang Rapi tapi Cocok (Buat Teks)
const fontBody = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Kuukiss - Cute & Delicious",
  description: "Cookies aesthetic paling enak.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Inject variabel font ke body */}
      <body className={`${fontHandwriting.variable} ${fontBody.variable} bg-peony text-espresso font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}