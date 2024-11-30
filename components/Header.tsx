"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <div className="flex justify-between items-center mt-4">
      <Link className="hover:underline" href="/">
        home
      </Link>
      <Link className="hover:underline" href="/projets">
        projets
      </Link>
      <Link className="hover:underline" href="/veilletechno">
        veille technologique
      </Link>
      <Link className="hover:underline" href="/contact">
        contact
      </Link>
      <ThemeToggle />
    </div>
  );
}
