import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-red-500/30 overflow-x-hidden">
      <div className="fixed inset-0 z-[-1]">
        <div suppressHydrationWarning className="absolute top-0 -left-4 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob will-change-transform"></div>
        <div suppressHydrationWarning className="absolute top-0 -right-4 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000 will-change-transform"></div>
        <div suppressHydrationWarning className="absolute -bottom-8 left-20 w-96 h-96 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000 will-change-transform"></div>
      </div>
      
      <Navbar />
      <Hero />
      <About />
      <div id="features">
        <Features />
      </div>
      <Certificates />
      <Footer />
    </main>
  );
}
