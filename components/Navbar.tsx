// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="border-b">
//       <div className="container flex items-center justify-between py-4">
//         <Link href="/" className="font-semibold text-xl">
//           SenseAI
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


// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          {/* If using SVG/PNG in /public */}
          <img src="/logo.png" alt="SenseAI" className="h-8 w-auto" />
          <span className="sr-only">SenseAI</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact" className="btn">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
