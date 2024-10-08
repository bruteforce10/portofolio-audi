import Header from "@/components/Header";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import { StairTransition } from "@/components/StairTransition";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${JetBrainsMono.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
