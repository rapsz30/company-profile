"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const ScrollToTop = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="#home"
      className={`fixed bottom-10 right-10 bg-slate-800 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-all z-50 shadow-lg ${
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <i className="ri-arrow-up-line ri-xl"></i>
    </Link>
  );
};

export default ScrollToTop;