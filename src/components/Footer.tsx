'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-100">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-y-12 gap-x-8">

          {/* Brand + Tagline */}
          <div className="col-span-6 lg:col-span-5">
            <Link href="/" className="inline-block mb-5">
              <div className="relative h-10 w-40">
                <Image
                  src="/logo.png"
                  alt="Lovosis Technology"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-neutral-500 text-[15px] leading-relaxed max-w-sm mb-8">
              Advanced electronics solutions for modern engineering education. Innovation, quality, and excellence in every product we deliver.
            </p>

            {/* Social row */}
            <div className="flex items-center gap-3">
              {[
                { href: "https://www.linkedin.com/company/lovosis-technology-private-limited/posts/?feedView=all", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { href: "https://www.instagram.com/lovosis_technology?igsh=cmt3b2JnYTRhd3gx", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                { href: "https://www.facebook.com/p/LovosisTechnology-61572576592724/", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-red-600 text-neutral-500 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="font-semibold text-neutral-900 text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/electrical-trainer-kits/electrical" },
                { label: "Certificates", href: "/#certificates" },
                { label: "Contact Us", href: "https://lovosis.in/Contact", ext: true },
              ].map((l) => (
                <li key={l.label}>
                  {l.ext ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 hover:text-red-600 transition-colors inline-flex items-center gap-1">
                      {l.label} <ArrowUpRight size={10} className="opacity-40" />
                    </a>
                  ) : (
                    <Link href={l.href} className="text-sm text-neutral-500 hover:text-red-600 transition-colors">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-4">
            <h4 className="font-semibold text-neutral-900 text-sm mb-4">Contact Us</h4>
            <address className="not-italic space-y-2.5 text-sm text-neutral-500">
              <p className="leading-relaxed">
                3rd Floor, Swathi building, 4-72/2, Main Road,<br />
                opp. Singapura Garden, Lakshmipura, Abbigere,<br />
                Bengaluru, Karnataka 560090
              </p>
              <div className="space-y-1.5 pt-1">
                <a href="mailto:info@lovosis.in" className="block hover:text-red-600 transition-colors">info@lovosis.in</a>
                <a href="mailto:lovosist@gmail.com" className="block hover:text-red-600 transition-colors">lovosist@gmail.com</a>
              </div>
              <div className="space-y-1.5 pt-1">
                <a href="tel:+919747745544" className="block hover:text-red-600 transition-colors">+91 97477 45544</a>
                <a href="tel:+917012970281" className="block hover:text-red-600 transition-colors">+91 70129 70281</a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Lovosis Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-neutral-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-neutral-600 transition-colors">Terms of Service</Link>

            <span className="flex items-center gap-1">
              Made with <Heart size={10} className="text-red-500 fill-red-500" /> in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
