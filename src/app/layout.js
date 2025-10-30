import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Faisal Haroon — Engineer. Creator. Visionary.",
  description: "Merging Technology, Design, and AI to Build the Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${inter.variable} antialiased`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 168, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 168, 255, 0.06) 1px, transparent 1px),
            radial-gradient(circle at 10% 30%, rgba(0, 100, 255, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(0, 150, 255, 0.06) 0%, transparent 40%)
          `,
          backgroundSize: "50px 50px, 50px 50px, auto, auto",
          backgroundPosition: "0 0, 0 0, center, center",
          backgroundAttachment: "fixed",
          backgroundColor: "#000000",
        }}
      >
        {children}
      </body>
    </html>
  );
}
