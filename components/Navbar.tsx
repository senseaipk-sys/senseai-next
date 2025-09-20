'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact", button: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="SenseAI home">
          {/* Make sure your logo file exists at: /public/logo.png */}
          <Image src="/logo.png" alt="SenseAI" width={160} height={40} priority />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center rounded-xl border px-3 py-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {/* Simple hamburger; replace with an icon if you want */}
          <span className="text-xl leading-none">≡</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {LINKS.map((l) =>
            l.button ? (
              <Link key={l.href} href={l.href} className="btn">
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={pathname.startsWith(l.href) ? "text-brand font-medium" : ""}
              >
                {l.label}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-3">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={
                  l.button
                    ? "btn w-full justify-center"
                    : pathname.startsWith(l.href)
                    ? "text-brand font-medium"
                    : ""
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// // import Link from "next/link";

// // export default function Navbar() {
// //   return (
// //     <nav className="border-b">
// //       <div className="container flex items-center justify-between py-4">
// //         <Link href="/" className="font-semibold text-xl">
// //           SenseAI
// //         </Link>
// //         <div className="flex items-center gap-6 text-sm">
// //           <Link href="/about">About</Link>
// //           <Link href="/services">Services</Link>
// //           <Link href="/projects">Projects</Link>
// //           <Link href="/contact" className="btn">Contact</Link>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }


// // components/Navbar.tsx
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   return (
//     <nav className="border-b">
//       <div className="container flex items-center justify-between py-4">
//         <Link href="/" className="flex items-center gap-2">
//           {/* If using SVG/PNG in /public */}
//           <img src="/public/logo.png" alt="SenseAI" className="h-8 w-auto" />
//           <span className="sr-only">SenseAI</span>
//         </Link>
//         <div className="flex items-center gap-6 text-sm">
//           <Link href="/about">About</Link>
//           <Link href="/services">Services</Link>
//           <Link href="/projects">Projects</Link>
//           <Link href="/contact" className="btn">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
