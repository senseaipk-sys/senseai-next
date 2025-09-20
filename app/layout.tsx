import type { Metadata } from "next";
import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SenseAI — AI • Sensors • Health • Research",
  description: "SenseAI builds intelligent systems at the intersection of machine learning, sensor data, and assistive health technologies.",
  metadataBase: new URL("https://senseai.example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
