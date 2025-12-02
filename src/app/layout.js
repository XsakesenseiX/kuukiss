import { Pacifico, Nunito } from "next/font/google";
import "./globals.css";

const fontHandwriting = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

const fontBody = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Kuukiss - Premium Cookies",
  description: "Cookies aesthetic paling enak.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontHandwriting.variable} ${fontBody.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}