
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md py-12 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-12 w-48">
                <Image 
                  src="/logo.png" 
                  alt="Lovosis Logo" 
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Building the next generation of static websites with modern tools and beautiful design.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lovosis Technology. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart size={16} className="text-red-500 fill-current" /> by Lovosis Team
          </p>
        </div>
      </div>
    </footer>
  );
}
