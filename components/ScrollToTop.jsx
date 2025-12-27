"use client"
import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

const ScrollToTop = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-slate-800 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-all z-50 shadow-lg ${
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  )
}

export default ScrollToTop
