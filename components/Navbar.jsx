"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/#beranda", label: "Beranda" },
    { href: "/#services", label: "Layanan" },
    { href: "/#about", label: "Tentang" },
  ]

  return (
    <nav
      className={`py-4 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="text-xl font-bold text-slate-800">Cognifera</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors font-medium text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="ml-2">
              <Link
                href="/auth/login"
                className="bg-slate-800 text-white px-5 py-2 rounded-lg hover:bg-slate-700 transition-all font-medium text-sm"
              >
                Login
              </Link>
            </li>
          </ul>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setActive(!active)}
            aria-label="Toggle menu"
          >
            {active ? <X className="w-5 h-5 text-slate-800" /> : <Menu className="w-5 h-5 text-slate-800" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            active ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-slate-50 rounded-xl p-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActive(false)}
                className="block px-4 py-2.5 rounded-lg hover:bg-white text-slate-700 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/auth/login"
              onClick={() => setActive(false)}
              className="block px-4 py-2.5 rounded-lg bg-slate-800 text-white text-center font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
