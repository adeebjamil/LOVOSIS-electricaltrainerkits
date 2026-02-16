import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-purple-500/30 overflow-x-hidden">
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-neutral-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <Footer />
    </main>
  );
}
