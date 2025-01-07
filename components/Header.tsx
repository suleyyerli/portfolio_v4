"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePath = (path: string) => {
    return pathname === path;
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-2xl mx-2 lg:mx-auto">
        <nav className="flex justify-between items-center h-16">
          <Badge className="hover:xl:scale-150 transition-all duration-300">
            <Link
              href="/"
              className={`font-bold transition-colors text-[#d1d5db] ${
                isActivePath("/") ? "text-white" : ""
              }`}
            >
              Acceuil
            </Link>
          </Badge>
          <Badge className="hover:xl:scale-150 transition-all duration-300">
            <Link
              href="/projets"
              className={`font-bold transition-colors text-[#d1d5db] ${
                isActivePath("/projets") ? "text-white" : ""
              }`}
            >
              Projets
            </Link>
          </Badge>
          <Badge className="hover:xl:scale-150 transition-all duration-300">
            <Link
              href="/veilletechno"
              className={`font-bold transition-colors text-[#d1d5db] ${
                isActivePath("/veilletechno") ? "text-white" : ""
              }`}
            >
              Veilles
            </Link>
          </Badge>
          <Badge className="hover:xl:scale-150 transition-all duration-300">
            <Link
              href="/contact"
              className={` font-bold transition-colors text-[#d1d5db] ${
                isActivePath("/contact") ? "text-white" : ""
              }`}
            >
              Contact
            </Link>
          </Badge>
        </nav>
      </div>
    </div>
  );
}
